import app from "./app"
import connection from "./connection"

type User = {
    name: string,
    nickname: string,
    email: string
}

app.post("/user", async (req, res) => {
    try {
        const { name, nickname, email }: User = req.body

        if (name !== String(name) || nickname !== String(nickname) || email !== String(email)) {
            throw new Error("Please check the fields!")
        }

        if (!name || !nickname || !email) {
            throw new Error("Empty fild!")
        }

        const result = await connection("to_do_list_user")
            .insert({
                // id: Math.floor(Date.now() * Math.random()),
                name: name,
                nickname: nickname,
                email: email
            })

        if (!result) {
            throw new Error("Error creating a user.")
        }
        res.status(200).send(["Created!", result])
    } catch (error: any) {

        console.log(error.sqlMessage);

        switch (error.message) {
            case "Please check the fields!":
                res.status(422)
                break
            case "Error creating a user.":
                res.status(400)
                break
            case "Empty fild!":
                res.status(422)
                break
            default:
                res.status(500)
                error.message("Servidor error")
                break
        }

        res.send(error.message)
    }
})

app.get("/user/:id", async (req, res) => {
    try {
        const idParams: number = Number(req.params.id)

        if (!idParams) {
            throw new Error("Id not found or invalid!")
        }

        if (idParams !== Number(idParams)) {
            throw new Error("Id invalid!")
        }
        const result = await connection("to_do_list_user")
            .select("*")
            .where({ id: idParams })

        // if(idParams !== .select("id")){
        //     throw new Error("Id invalid!")
        // }

        if (!result || result.length === 0) {
            throw new Error("Error getting the user!")
        }

        res.status(200).send(["Ok", result])
    } catch (error: any) {

        console.log(error.sqlMessage);

        switch (error.message) {
            case "Id not found or invalid!":
                res.status(400)
                break
            case "Id invalid!":
                res.status(400)
                break
            case "Error getting the user!":
                res.status(400)
                break
            default:
                res.status(500)
                error.message("Servidor error")
                break
        }

        res.send(error.message)
    }
})

app.put("/user/edit/:id", async (req, res) => {
    try {
        const { name, nickname } = req.body
        const idParams: number = Number(req.params.id)

        await connection("to_do_list_user")
            .update({
                name: name,
                nickname: nickname
            })
            .where({ id: idParams })

        res.status(200).send("Atualizado!")

    } catch (error: any) {
        console.log(error.sqlMessage);
        res.send(error.message)
    }
})

//---------- Não funciona -----------
app.post("/task", async (req, res) => {
    try {
        const { id, title, description, status, limitDate, authorId } = req.body

        // const newLimitDate = limitDate.split('/').reverse().join('-')

        const result = await connection("to_do_list_task")
            .insert({
                title: title,
                description: description,
                limit_date: limitDate,
                user_author_id: authorId
            })

        res.status(200).send(["OK", result])

        console.log(result);

    } catch (error: any) {
        console.log(error.sqlMessage);
        res.send(error.message)
    }
})

//----------- Não funciona -------------
app.get("/task/:id1/:id2", async (req, res) => {
    try {
        const idParams1: number = Number(req.params.id1)
        const idParams2: number = Number(req.params.id2)

        if (!idParams1) {
            throw new Error("Id not found or invalid!")
        }

        if (idParams1 !== Number(idParams1)) {
            throw new Error("Id invalid!")
        }

        //const result = await connection("to_do_list_task_relation")
        // .select("*")
        // .from("to_do_list_task")
        // .join("to_do_list_user")
        // .where({user_author_id: idParams})

        const [result] = await connection.raw(`
            SELECT *
            FROM to_do_list_task
            JOIN to_do_list_user
            ON user_author_id =
            to_do_list_user.${idParams2};`)


        if (!result || result.length === 0) {
            throw new Error("Error getting the taks!")
        }
        res.status(200).send(result)

    } catch (error: any) {
        console.log(error.sqlMessage);

        switch (error.message) {
            case "Id not found or invalid!":
                res.status(400)
                break
            case "Id invalid!":
                res.status(400)
                break
            case "Error getting the tasks!":
                res.status(400)
                break
            default:
                res.status(500)
                error.message("Servidor error")
                break
        }

        res.send(error.message)

    }
})

app.get("/user_all", async (req, res) => {
    try {
        const result = await connection("to_do_list_user")
            .select("*")
            .from("to_do_list_user")

        if (!result || result.length === 0) {
            throw new Error("Error getting users!")
        }

        res.status(200).send(result)
    } catch (error: any) {
        console.log(error.sqlMessage);
        switch (error.message) {
            case "Error getting users!":
                res.status(400)
                break
            default:
                res.status(500)
                error.message("Servidor error")
                break
        }

        res.status(500).send(error.message)
    }
})

app.get("/user_nickname", async (req, res) => {
    try {
        const query = req.query.query

        if (!query) {
            throw new Error("User nikcs not found!")
        }

        const result = await connection("to_do_list_user")
            .select("id", "nickname")
            .where({ nickname: query })

        res.status(200).send(result)
    } catch (error: any) {
        console.log(error.sqlMessage);
        switch (error.message) {
            case "User nikcs not found!":
                res.status(400)
                break
            default:
                res.status(500)
                error.message("Servidor error")
                break
        }
        res.send(error.message)
    }
})

app.post("/task/responsible", async (req, res) => {
    try {
        const { task_id, user_id } = req.body

        if (task_id !== Number(task_id) || user_id !== Number(user_id)) {
            throw new Error("Please check the fields!")
        }

        if (!task_id || !user_id) {
            throw new Error("Empty fild!")
        }

        const result = await connection("to_do_list_task_relation")
            .insert({
                task_id: task_id,
                user_id: user_id
            })

        if (!result) {
            throw new Error("Error creating a relation task.")
        }

        res.status(200).send("Created!")

    } catch (error: any) {
        console.log(error.sqlMessage)

        switch (error.message) {
            case "Please check the fields!":
                res.status(422)
                break
            case "Error creating a relation task.":
                res.status(400)
                break
            case "Empty fild!":
                res.status(422)
                break
            default:
                res.status(500)
                error.message("Servidor error")
                break
        }
        res.send(error.message)
    }
})