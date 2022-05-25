import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GiReactor } from 'react-icons/gi'
import { Links, NavbarSection, Content, Logo, Socials } from './Navbar.styled'

export const Navbar = () => {
  return (
    <NavbarSection>
      <Content>
        <Logo>
          <GiReactor />
        </Logo>
        <div>
          <Links>
            <li>Home</li>
            <li>About Me</li>
            <li>Contact</li>
          </Links>
          <Socials>
            <AiFillGithub></AiFillGithub>
            <AiFillLinkedin></AiFillLinkedin>
          </Socials>
        </div>
      </Content>
    </NavbarSection>
  )
}
