import { useState } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GiReactor } from 'react-icons/gi'
import { Link } from 'react-router-dom';

import { Links, NavbarSection, Content, Logo, Socials } from './Navbar.styled'

export const Navbar = () => {
  const [clicked, setClicked] = useState<string>('home');

  return (
    <NavbarSection>
      <Content>
        <Logo>
          <GiReactor />
        </Logo>
        <div>
          <Links>
          <Link to='/'>
              <li 
                onClick={() => setClicked(() => 'home')}
                className={clicked === 'home'? 'li-active' : ''}>
                  Home
              </li>
            </Link>
            <Link to='/about'>
              <li 
                onClick={() => setClicked(() => 'about')}
                className={clicked === 'about'? 'li-active' : ''}>
                  About me
              </li>
            </Link>
            <Link to='/contact'>
              <li 
                onClick={() => setClicked(() => 'contact')}
                className={clicked === 'contact'? 'li-active' : ''}>
                  Contact
              </li>
            </Link>
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
