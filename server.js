//Importing
const Koa = require('koa'),
    bodyParser = require('koa-bodyparser');

const HomeRouter = require('./routes/home.routes');
const PostRouter = require('./routes/post.routes');

//Creating Koa Application - to add our routes and everything
const app = new Koa();

//Registering the body parser - this will understand the content type header, and converts the body into that type
//In here the content type is application/json
//Also called middleware - could execute at any point of time (i.e. before or after the registered routes)
app.use(bodyParser()); // Sensitive to header types, not routes


//Routes - if a route is hit by the request or response, it won't pass it downwards. That's why we only see "Hello World" without "Hello"
//Registered home routes
app.use(HomeRouter.routes())
    .use(HomeRouter.allowedMethods()); //methods that are allowed within this route (GET and POST)

//Registered post routes
app.use(PostRouter.routes())
    .use(PostRouter.allowedMethods());

//for any undefined route this will work. It just prints hello in the body
//ctx = context
app.use(ctx => {
    ctx.body = "Hello";
});

//Making available the application via port 3000
app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Application is running on the port 3000');
});