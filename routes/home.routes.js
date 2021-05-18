const Router = require('@koa/router'); //no need of if else or switch when you are using Router

//prefix - how all the routes are stored start from
const router = new Router({
    prefix: '/home'
});

// /home get request will hit here
router.get('/', ctx => {
    ctx.body = "Hello World";
});

// /home post request will hit here
router.post('/', ctx => {
    ctx.body = "Hello World";
});

module.exports = router;

