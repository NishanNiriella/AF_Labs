package com.sliit.sample.api;

import com.sliit.sample.domain.Post;
import com.sliit.sample.domain.PostDataAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class PostApi {
//    private final Map<String, Post> posts;
    private final PostDataAdapter postDataAdapter;

    @Autowired
    public PostApi(PostDataAdapter postDataAdapter) {
//        this.posts = new HashMap<>();
        this.postDataAdapter = postDataAdapter;
    }

    public List<Post> getAllPosts() {
//        return new ArrayList<>(posts.values());
        return postDataAdapter.getAll();
    }

    public Post addPost(Post post) {
//        post.setId(UUID.randomUUID().toString());
//        posts.put(post.getId(), post);
//        System.out.println("Done");
        post.setPostedDate(LocalDateTime.now());
        post = postDataAdapter.save(post);
        return post;
    }

    public Post update(Post post) {
        return postDataAdapter.update(post);
    }

    public void deletePost(String id) {
//        posts.remove(id);
//        System.out.println("Post Deleted" + id);
        postDataAdapter.delete(id);
    }

//    public Post updatePost(Post post) {
//        Post simplePost = new Post();
////        simplePost = this.posts.get(post.getId());
//
//        simplePost.setName(post.getName());
//        simplePost.setDescription(post.getDescription());
//        return simplePost;
//    }
}
