import app from "./app"
import connection from "./connection"

type User = {
    name: string,
    nickname: string,
    email:string
}

app.post("/user", async (req, res)=>{
    try{
        const {name, nickname, email}:User = req.body

        if(name !== String(name) || nickname !== String(nickname) || email !== String(email)){
            throw new Error("Please check the fields!")
        }

        if(!name || !nickname || !email){
            throw new Error("Empty fild!")
        }

        const result = await connection("to_do_list_user")
        .insert({
            // id: Math.floor(Date.now() * Math.random()),
            name: name,
            nickname: nickname,
            email:email 
        })

        if(!result){
            throw new Error("Error creating a user.")
        }
        res.status(200).send(result)
    }catch (error:any){

        console.log(error.sqlMessage);

        switch (error.message){
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

app.get("/user/:id", async (req, res)=>{
    try{
        const idParams:number = Number(req.params.id)

        if(!idParams){
            throw new Error("Id not found or invalid!")
        }

        if(idParams!== Number(idParams)){
            throw new Error("Id invalid!")
        }
        const result = await connection("to_do_list_user")
        .select("*")
        .where({id: idParams})

        // if(idParams !== .select("id")){
        //     throw new Error("Id invalid!")
        // }

        if (!result || result.length === 0){
            throw new Error("Error getting the user!")
        }

        res.status(200).send(result)
    }catch (error:any){

        console.log(error.sqlMessage);

        switch (error.message){
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

app.post("/task", async (req, res)=>{
  try{
    const {title, description, limitDate, authorId} = req.body

    // const newLimitDate = limitDate.split('/').reverse().join('-')
    
    const result = await connection("to_do_list_task")
    .insert({
        title: title,
        description: description,
        limit_date: limitDate,
        user_author_id: authorId
    })

    res.status(200).send(result)

    console.log(result);

  }catch (error:any){
    console.log(error.sqlMessage);

    // switch (error.message){
    //     default:
    //         res.status(500)
    //         error.message("Servidor error")
    //         break
    // }
    res.send(error.message)
  }
})

app.get("/user/all", async (req, res)=>{
try{
    const result = await connection("to_do_list_user")
}catch (error:any){

}
})