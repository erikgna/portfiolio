import React from 'react'
import { Button, ButtonBlue } from '../../styles/Global.styled'
import { Buttons } from '../Authentication/Authentication.styled'
import { Image, YourPostStyle } from './YourPost.styled'

export const YourPost = () => {
  return (
    <YourPostStyle>
        <Image style={{backgroundImage: "url('https://www.nasa.gov/sites/default/files/thumbnails/image/simulated_bh.jpg')"}}>
        {/* <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/simulated_bh.jpg" alt="Yourpost" /> */}
        </Image>
        <h5>Some post title longer than</h5>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
        <Buttons>
            <ButtonBlue width={150}>Editar</ButtonBlue>
            <Button style={{marginLeft: '24px'}} width={150}>Delete</Button>
        </Buttons>
    </YourPostStyle>
  )
}
