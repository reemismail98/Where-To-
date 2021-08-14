const PostController = require('../controller/post.controller');
const UserController = require('../controller/user.controller');
const CategoryController = require('../controller/category.contoller');
const { authenticate } = require('../config/jwt.config');
const {upload} = require("../controller/post.controller");

    module.exports = function(app){
        app.get('/api/users', UserController.findAllUsers);
        app.get('/api/users/:id', UserController.findOneSingleUser);
       // app.put('/api/users/:id', UserController.updateExistingUser);
        app.post('/api/users/new', UserController.createNewUser);
        app.post("/api/login", UserController.login);
        app.get("/api/logout", UserController.logout);


       // app.delete('/api/users/:id', UserController.deleteAnExistingUser);

        app.get('/api/posts', PostController.findAllPosts);
        // app.post('/api/posts/new',upload.single("picture"), PostController.createNewPost);
        app.post('/api/posts/new', PostController.createNewPost);

        app.get('/api/posts/:id', PostController.findOneSinglePost);
        app.put('/api/posts/:id', PostController.updateExistingPost);
        app.delete('/api/posts/:id', PostController.deleteAnExistingPost);
        app.get('/api/category', CategoryController.findAllCategorys);
        app.get('/api/category/:id', CategoryController.findOneSingleCategory);
        app.put('/api/category/:id', CategoryController.updateExistingCategory);
        app.post('/api/category/new', CategoryController.createNewCategory);
        app.delete('/api/category/:id', CategoryController.deleteAnExistingCategory);
    }