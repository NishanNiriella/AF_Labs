package com.sliit.sample.api;

import com.sliit.sample.domain.Post;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PostApi {
    private Map<String, Post> posts;

    public PostApi() {
        this.posts = new HashMap<>();
    }

    public List<Post> getAllPosts() {
        return new ArrayList<>(posts.values());
    }

    public Post addPost(Post post) {
        post.setId(UUID.randomUUID().toString());
        posts.put(post.getId(), post);
        return post;
    }
}
