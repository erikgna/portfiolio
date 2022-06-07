import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { IPost } from '../../interfaces/post'
import { IUser } from '../../interfaces/user';
import { asyncDeletePost, asyncNewPost, asyncUpdatePost, asyncUserPosts } from '../../redux/stores/Post.store';
import { RootState } from '../../redux';

import { AnimatedLetter } from '../../components/AnimatedLetter/AnimatedLetter';
import { YourPost } from '../../components/YourPost/YourPost';

import { FlexPrincipal, Button, Input, TextArea } from '../../styles/Global.styled';
import { AnimatedH2 } from '../../components/AnimatedLetter/AnimatedLetter.styled';
import { CreatePostStyle, InputImage, ColInput, YourPosts, ErrorMessage, FormPost } from './CreatePost.styled';
import { IError } from '../../interfaces/error';

export const CreatePost = () => {
    const user:IUser = useSelector((state: RootState) => state.user);
    const posts:IPost[] = useSelector((state: RootState) => state.post);
    const error:IError = useSelector((state: RootState) => state.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        if(!user.name) navigate('/auth');
        if(user.name) dispatch(asyncUserPosts(user.userID));
    }, [dispatch, user, navigate])

    return (
        <FlexPrincipal alignCenter={true}>
            <CreatePostStyle>
                {user.name&& <FormPost onSubmit={(e) => submit(e)}>
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
                    <ErrorMessage style={{marginTop: '-24px', marginBottom: '48px'}}>{error.postErrorMessage}</ErrorMessage>
                    <Button width={225}>Send Post</Button>
                </FormPost>
                }

                {user.name&& 
                    <YourPosts>
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
