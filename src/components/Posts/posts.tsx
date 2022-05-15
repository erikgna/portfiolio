import React from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { PostInterface } from '../../interfaces/post';
import { RootState } from '../../redux';
import { asyncAllPosts, asyncDeletePost, asyncUpdatePost } from '../../redux/stores/Post.store';

const Post: React.FC<{post:PostInterface}> = ( { post } ) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <img src={post.image} alt="Product" />
      </div>
      <div>
        <h4>{post.title}</h4>
        <p>{post.description}</p>
      </div>
      <div>
      <div>
          <AiFillLike />
          <p>{post.likes}</p>
        </div>
        <div>
          <AiFillDislike />
          <p>{post.dislikes}</p>
        </div>
      </div>
      <div>
        {/* <button onClick={() => {dispatch(asyncUpdatePost(newPost))}}>Editar</button> */}
        <button onClick={() => {dispatch(asyncDeletePost(post))}}>Excluir</button>
      </div>
    </div>
  )
}

export const Posts = () => {
  const dispatch = useDispatch();
  const posts:PostInterface[] = useSelector((state: RootState) => state.post);

  return (
    <div>
      <div>
        {posts.map((post) => {  return <Post key={post?.id} post={post} /> })}
      </div>
      <button onClick={() => {dispatch(asyncAllPosts())}}>This gotta</button>
    </div>
  )
}
