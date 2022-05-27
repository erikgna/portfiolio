import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { PostInterface } from '../../interfaces/post'
import { UserInterface } from '../../interfaces/user';
import { asyncNewPost } from '../../redux/stores/Post.store';
import { RootState } from '../../redux';

import { AnimatedLetter } from '../../components/AnimatedLetter/AnimatedLetter';
import { YourPost } from '../../components/YourPost/YourPost';

import { FlexPrincipal, Button, Form, Input, TextArea } from '../../styles/Global.styled';
import { AnimatedH2 } from '../../components/AnimatedLetter/AnimatedLetter.styled';
import { CreatePostStyle, InputImage, ColInput, YourPosts } from './CreatePost.styled';
import { Login, Register } from '../../components/Authentication/Authentication';

export const CreatePost = () => {
    const user:UserInterface = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [post, setPost] = useState<PostInterface>({ 
        image: undefined,
        title: '',
        description: '',
        likes: 0,
        dislikes: 0
    })

    const inputChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();

        setPost({ ...post, [event.target.name]: event.target.value });
    }

    const submit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(asyncNewPost(post));
    }

    return (
        <FlexPrincipal alignCenter={true}>
            <CreatePostStyle>
                <Form onSubmit={(e) => submit(e)}>
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
                    <ColInput>
                        <label htmlFor="title">Title</label>
                        <Input type="text" name='title' onChange={(e) => inputChange(e)} placeholder='Type a title'/>
                    </ColInput>
                    <ColInput>
                        <label htmlFor="description">Description</label>
                        <TextArea name='description' onChange={(e) => inputChange(e)} rows={10} placeholder='Type a description'/>
                    </ColInput>
                    <ColInput>
                        <label htmlFor="image">Add Image</label>
                        <InputImage>
                            <h4>Choose File</h4>
                            <input multiple type="file" name='image' onChange={(e) => inputChange(e)} />
                        </InputImage>
                    </ColInput>
                    <Button width={225}>Send Post</Button>
                </Form>

                {!user.accessToken&& isLogin&&
                    <Login setIsLogin={setIsLogin} />
                }

                {!user.accessToken&& !isLogin&&
                    <Register setIsLogin={setIsLogin} />
                }

                {user.accessToken&& 
                    <YourPosts>
                        <h3>Here you can see all your posts and edit it</h3>
                        <YourPost />
                        <YourPost />
                        <YourPost />
                        <YourPost />
                    </YourPosts>
                }

            </CreatePostStyle>
        </FlexPrincipal>
    )
}
