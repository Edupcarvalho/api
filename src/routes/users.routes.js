const {Router} = require("express");

const UsersController = require("../controllers/UserController")

const usersRoutes = Router();


// function myMiddleware(request,response,next){
//     console.log("Você passou pelo middleware");

//     if(!request.body.isAdmin){
//         return response.json({message: "user unauthorized"});
//     }

//     next();
// }



const usersController = new UsersController();

// usersRoutes.post("/", myMiddleware, usersController.create)
usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);


//exportando usersRoutes

module.exports = usersRoutes;