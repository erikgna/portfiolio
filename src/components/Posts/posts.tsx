import React, { useEffect, useState } from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { PostInterface } from '../../interfaces/post';
import { RootState } from '../../redux';
import { asyncAllPosts, asyncDeletePost } from '../../redux/stores/Post.store';
import { EditPostModal } from '../Modal/EditPostModal';

const Post: React.FC<{post:PostInterface}> = ( { post } ) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div>
      <div>
        <img src={post.imageURL} alt="Product" />
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
        { modal&& <EditPostModal setModal={setModal} post={post} /> }
        <button onClick={() => setModal(true)}>Editar</button>
        <button onClick={() => {dispatch(asyncDeletePost(post))}}>Excluir</button>
      </div>
    </div>
  )
}

export const Posts = () => {
  const dispatch = useDispatch();
  const posts:PostInterface[] = useSelector((state: RootState) => state.post);

  useEffect(() => {
    dispatch(asyncAllPosts())
  }, [dispatch])

  return (
    <div>
      <div>
        {posts.map((post) => {  return <Post key={post?.id} post={post} /> })}
      </div>
    </div>
  )
}
