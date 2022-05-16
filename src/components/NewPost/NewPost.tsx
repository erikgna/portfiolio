import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { PostInterface } from '../../interfaces/post'
import { asyncNewPost } from '../../redux/stores/Post.store';

export const NewPost = () => {
    const dispatch = useDispatch();
    
    const [product, setProduct] = useState<PostInterface>({ 
        image: undefined,
        title: '',
        description: '',
        likes: 0,
        dislikes: 0
    })

    const inputChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();

        setProduct({ ...product, [event.target.name]: event.target.value });
    }

    const submit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(asyncNewPost(product));
    }

    return (
        <div>
            <div>
                <form onSubmit={(e) => submit(e)}>
                    <h2>Register New Product</h2>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" name='title' onChange={(e) => inputChange(e)} placeholder='Type a title'/>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea name='description' onChange={(e) => inputChange(e)} placeholder='Type a description'/>
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input type="number" name='price' onChange={(e) => inputChange(e)} placeholder='Type a price'/>
                    </div>
                    <div>
                        <label htmlFor="image">Add Image</label>
                        <input multiple type="file" name='image' onChange={(e) => inputChange(e)} />
                    </div>
                    <input type="submit" value="Register" />
                </form>
            </div>
        </div>
    )
}
