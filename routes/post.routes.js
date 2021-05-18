const Router = require('@koa/router'),
    {createPost, getPost, getPosts} = require('../api/posts.api');

//prefix of the routes
const router = new Router({
    prefix: '/posts'
});

router.get('/', ctx => {
    ctx.body = getPosts(); //calling getPost and setting the data into the body
});

router.post('/', ctx => {
    let post = ctx.request.body; //as a result of a bodyparser, body is returning as json (name, description)
    post = createPost(post); //passing data to the createPost
    ctx.response.status = 201; //Setting the response status(created http code)
    ctx.body = post; //setting the response body as post
});

/*After / we are putting the placeholder which means posts/something*/
router.get('/:id', ctx => {
    const id = ctx.params.id; //ID is available under the params
    ctx.body = getPost(id); //pass the id to the method and return the post
});

module.exports = router;