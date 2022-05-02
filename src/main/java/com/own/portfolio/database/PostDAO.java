package com.own.portfolio.database;

import com.own.portfolio.model.Post;
import org.springframework.data.repository.CrudRepository;

public interface PostDAO extends CrudRepository<Post, Integer> {}
