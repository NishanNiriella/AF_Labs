package com.sliit.sample.domain;

import java.util.List;

public interface PostDataAdapter {
    Post save(Post post);
    List<Post> getAll();
    Post update(Post post);
    void delete(String id);
}
