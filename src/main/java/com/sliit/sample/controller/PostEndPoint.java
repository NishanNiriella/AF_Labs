package com.sliit.sample.controller;

import com.sliit.sample.api.PostApi;
import com.sliit.sample.domain.Post;
import com.sliit.sample.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostEndPoint {
    private final PostApi postApi;

    @Autowired
    public PostEndPoint(PostApi postApi) {
        this.postApi = postApi;
    }

    @GetMapping
    public List<Post> getPosts() {
        return postApi.getAllPosts();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Post addPost(@RequestBody PostDto postDto) {
        Post post = new Post();
        post.setName(postDto.getName());
        post.setDescription(postDto.getDescription());
        return postApi.addPost(post);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable("id") String id){
        postApi.deletePost(id);
    }

}
