import app from "./app"
import connection from "./connection"


app.get("/atores/:id", async (req, res) => {
    try {
        const id: string = req.params.id
        const [result] = await connection.raw(`SELECT * FROM Actor WHERE id = "${id}"`)

        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send("Erro!")
    }
})

app.get("/atores/genero/:gender", async (req, res) => {
    try {
        const gender: string = req.params.gender
        const [result] = await connection.raw(`SELECT COUNT(*) , gender
        FROM Actor 
        WHERE gender = "${gender}" 
        GROUP BY gender`)
        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send("Erro!")
    }
})

app.put("/atores/atualizar_salario/:id", async (req, res) => {
    try {
        // const { salary } = req.body
        // const id: string = req.params.id

        const result = await connection("Actor")
            .update({
                salary: req.body.salary
            })
            .where({ id: req.params.id })

        res.send(result)
    } catch (error: any) {
        res.status(500).send("Erro!")
    }
})

app.delete("/atores/deletar_atores/:id", async (req, res) => {
    try {
        await connection("Actor")
            .delete()
            .where({ id: req.params.id })
        res.status(200).send("Sucesso!")
    } catch (error: any) {
        res.status(500).send("Erro!")
    }
})

app.get("/atores/media_salarial/:gender", async (req, res) => {
    try {
        const gender = req.params.gender
        const [result] = await connection("Actor")
            .avg("salary as average")
            .where({ gender: gender })

        res.status(200).send(result)
    } catch (error: any) {
        console.log(error.sqlMessage);
        
        res.status(500).send("Erro ao atualizar o salario!")
    }
})

// app.get("/atores/media_salarial/:gender", async (req, res)=>{
//     try{
//         const gender = req.params.gender
//         const [result] = await connection.raw(`SELECT AVG(salary) gender FROM Actor
//         GROUP BY gender = "${gender}";`)

//         res.status(200).send(result)
//     }catch (error:any){
//         res.status(500).send("Erro!")
//     }
// })

app.get("/atores_por_id/:id", async (req, res) => {
    try {
        const id = req.params.id
        const result = await connection("Actor")
            .select("*")
            .where({ id: id })
        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send("Erro!")
    }
})

app.get("/atores_by_query", async (req, res) => {
    try {
        const gender = req.query.gender
        const result = await connection("Actor")
            .count("*")
            .where({ gender: gender })
        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send("Erro!")
    }
})

app.post("/atores", async (req, res) => {
    try {
        const { name, salary, birth_date, gender } = req.body
        const result = await connection("Actor")
            .insert({
                id: Math.floor(Date.now() * Math.random()).toString(36),
                name: name,
                salary: salary,
                birth_date: birth_date,
                gender: gender
            })
            res.status(200).send(result)
    } catch (error: any) {
        console.log(error.sqlMessage);
        res.status(500).send("Erro ao criar um ator!")
    }
})