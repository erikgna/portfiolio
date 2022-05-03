package com.own.portfolio.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Post {
    private int id;
    private String image;
    private String title;
    private String description;
    private int likes;
    private int dislikes;
}