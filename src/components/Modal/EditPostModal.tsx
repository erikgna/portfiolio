import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { PostInterface } from '../../interfaces/post';
import { asyncUpdatePost } from '../../redux/stores/Post.store';

export const EditPostModal: React.FC<{setModal: React.Dispatch<React.SetStateAction<boolean>>, post: PostInterface}> = ( { setModal, post } ) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<PostInterface>({title: "", description: ""});
  
  const edit = () => {
    console.log("tste")
    // dispatch(asyncUpdatePost(post));
  }

  return (
    <div>
        <h3>Edit {post.title}</h3>
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" name='title' placeholder='New title' onChange={(e) => { setFormData({...formData, title: e.target.value}) }} />
            <label htmlFor="title">Title</label>
            <textarea name='description' placeholder='New description' onChange={(e) => { setFormData({...formData, description: e.target.value}) }} />
        </form>
        <div>
            <button onClick={() => { setModal(false) }}>Fechar</button>
            <button onClick={() => { edit() }}>Finalizar</button>
        </div>
    </div>
  )
}
