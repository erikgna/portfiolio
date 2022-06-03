import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { IPost } from '../../interfaces/post'
import { IUser } from '../../interfaces/user';
import { asyncDeletePost, asyncNewPost, asyncUpdatePost, asyncUserPosts } from '../../redux/stores/Post.store';
import { RootState } from '../../redux';

import { AnimatedLetter } from '../../components/AnimatedLetter/AnimatedLetter';
import { YourPost } from '../../components/YourPost/YourPost';

import { FlexPrincipal, Button, Form, Input, TextArea } from '../../styles/Global.styled';
import { AnimatedH2 } from '../../components/AnimatedLetter/AnimatedLetter.styled';
import { CreatePostStyle, InputImage, ColInput, YourPosts } from './CreatePost.styled';
import { Login, Register } from '../../components/Authentication/Authentication';

export const CreatePost = () => {
    const user:IUser = useSelector((state: RootState) => state.user);
    const posts:IPost[] = useSelector((state: RootState) => state.post);
    const error:string = useSelector((state: RootState) => state.error);
    const dispatch = useDispatch();
    
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [isCreating, setIsCreating] = useState<boolean>(true);

    const [post, setPost] = useState<IPost>({ 
        image: undefined,
        title: '',
        description: ''
    })

    const inputChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();

        setPost({ ...post, [event.target.name]: event.target.value });
    }

    const changeImage = (event:any) => {
        setPost({...post, image: event.target.files[0]})
    }

    const submit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        isCreating? dispatch(asyncNewPost(post, user.userID)) : dispatch(asyncUpdatePost(post));
    }

    const updatePost = (post:IPost) => {
        setIsCreating(false);
        setPost(post);
    }

    const deletePost = (post:IPost) => {
        dispatch(asyncDeletePost(post));
    }

    useEffect(() => {
        dispatch(asyncUserPosts(user.userID));
    }, [dispatch, user])

    return (
        <FlexPrincipal alignCenter={true}>
            <CreatePostStyle>
                <Form onSubmit={(e) => submit(e)}>
                    {isCreating?
                        <AnimatedH2>
                            <AnimatedLetter letter='C' />
                            <AnimatedLetter letter='r' />
                            <AnimatedLetter letter='e' />
                            <AnimatedLetter letter='a' />
                            <AnimatedLetter letter='t' />
                            <AnimatedLetter letter='e' />
                            <AnimatedLetter letter='&nbsp;p' />
                            <AnimatedLetter letter='o' />
                            <AnimatedLetter letter='s' />
                            <AnimatedLetter letter='t' />
                        </AnimatedH2>
                        :
                        <AnimatedH2>
                            <AnimatedLetter letter='E' />
                            <AnimatedLetter letter='d' />
                            <AnimatedLetter letter='i' />
                            <AnimatedLetter letter='t' />
                            <AnimatedLetter letter='&nbsp;p' />
                            <AnimatedLetter letter='o' />
                            <AnimatedLetter letter='s' />
                            <AnimatedLetter letter='t' />
                        </AnimatedH2>
                    }
                    <ColInput>
                        <label htmlFor="title">Title</label>
                        <Input type="text" name='title' onChange={(e) => inputChange(e)} value={post.title} placeholder='Type a title'/>
                    </ColInput>
                    <ColInput>
                        <label htmlFor="description">Description</label>
                        <TextArea name='description' onChange={(e) => inputChange(e)} rows={10} value={post.description} placeholder='Type a description'/>
                    </ColInput>
                    <ColInput>
                        <label htmlFor="image">Add Image</label>
                        <InputImage>
                            <label htmlFor='image'>Choose File</label>
                            <input type="file" id="image" name='image' onChange={(e) => changeImage(e)} />
                        </InputImage>
                    </ColInput>
                    <Button width={225}>Send Post</Button>
                </Form>

                {!user.name&& isLogin&&
                    <Login setIsLogin={setIsLogin} />
                }

                {!user.name&& !isLogin&&
                    <Register setIsLogin={setIsLogin} />
                }

                {user.name&& 
                    <YourPosts>
                        {error}
                        <h3>Here you can see all your posts and edit it</h3>
                        {posts.map((post, index) => {
                            return <YourPost key={index} post={post} buttons={{deletePost, updatePost}} />
                        })}
                    </YourPosts>
                }

            </CreatePostStyle>
        </FlexPrincipal>
    )
}
