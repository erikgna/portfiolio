import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GiReactor } from 'react-icons/gi'
import { Links, NavbarSection } from './Navbar.styled'

export const Navbar = () => {
  return (
    <NavbarSection>
        <div className='logo'>
            <GiReactor></GiReactor>
        </div>
        <div>
            <Links>
                <li>Home</li>
                <li>About Me</li>
                <li>Contact</li>
            </Links>

            <div>
              <AiFillGithub></AiFillGithub>
              <AiFillLinkedin></AiFillLinkedin>
            </div>
        </div>
    </NavbarSection>
  )
}
