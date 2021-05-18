//Pure JS implementation
const UUID = require('uuid'); //Universal Unique ID

const posts = new Map(); //Store data as key-value (not advanced as Java Map)

// const posts = new Map();
// const createPost = obj => {
//     const post = {name: obj.name, description: obj.description, id: UUID.v4(), date: new Date()};
//     posts.set(post.id, post);
// };


//name and description are the properties we are getting from the create post
const createPost = ({name, description}) => {
    const post = {
        id: UUID.v4(), //created by uuid
        name,
        description,
        postedDate: new Date() //date as new date class
    }

    posts.set(post.id, post); //setting values to the post map
    return post;
}

//All the posts are returning (posts values inside the map)
const getPosts = () => {
    return[...posts.values()]; //posts.value will return an iterator
    // ... - spread operator. spreading the iterator into individual values and [] will return all the values as an array
}

//getting the item by its id
const getPost = (id) => {
    return posts.get(id);
}

module.exports = {
    createPost,
    getPost,
    getPosts
}; //exporting the methods