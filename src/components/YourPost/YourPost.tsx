import React from 'react'
import { IPost } from '../../interfaces/post'
import { Button, ButtonBlue } from '../../styles/Global.styled'
import { Buttons } from '../Authentication/Authentication.styled'
import { Image, YourPostStyle } from './YourPost.styled'

export const YourPost: React.FC<{ 
  post:IPost, 
  buttons: { deletePost: (post:IPost) => void, updatePost: (post:IPost) => void } }> = ( {post, buttons} ) => {

  return (
    <YourPostStyle>
        <Image style={{backgroundImage: `url('${post.image}')`}}>
        {/* <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/simulated_bh.jpg" alt="Yourpost" /> */}
        </Image>
        <h5>{post.title}</h5>
        <p>{post.description}</p>
        <Buttons>
            <ButtonBlue onClick={() => buttons.updatePost(post)} width={150}>Editar</ButtonBlue>
            <Button onClick={() => buttons.deletePost(post)} style={{marginLeft: '24px'}} width={150}>Delete</Button>
        </Buttons>
    </YourPostStyle>
  )
}
