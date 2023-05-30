require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations");

const AppError = require("./utils/AppError");

const express = require("express");

const routes = require("./routes");

const app = express();
app.use(express.json());

app.use(routes);

migrationsRun();


app.use((error,request,response,next) =>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }
    console.error(error);
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});

const port = 3333;

/*Route Params */

// app.get("/message/:id/:user",(request,response)=>{

//     const {id,user} = request.params

//     response.send(`Id da Mensagem: ${id}.
//     Para o usuário: ${user}`);
// });


/*Query Params */

// app.get("/users", (request, response) =>{
//     const {page, limit, name } = request.query

//     response.send(`Página: ${page}. Limite: ${limit}.
//     Nome: ${name}`);
// });

app.post("/users", (request,response) =>{
    const {name, email, password} = request.body

    response.json({name, email, password});
    
});

app.listen(port, () =>{
    console.log(`Server is running on Port ${port}`);
})

