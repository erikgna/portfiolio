import { useEffect, useState } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { Button } from '../../styles/Global.styled';

import { Links, NavbarSection, Content, Socials } from './Navbar.styled'

export const Navbar = () => {
  const [clicked, setClicked] = useState<string>('home');

  useEffect(() => {
    const url = window.location.pathname.slice(1);
    setClicked(url)
  }, [])

  return (
    <NavbarSection>
      <Content>
        {/* <Logo> */}
          {/* <GiReactor /> */}
        {/* </Logo> */}
        <div>
          <Links>
          <li>
              <Link to='/'
                onClick={() => setClicked(() => '')}
                className={clicked === ''? 'li-active' : ''}>
                  Home
              </Link>
            </li>
            <li>
              <Link to='/posts' 
                onClick={() => setClicked(() => 'posts')}
                className={clicked === 'posts'? 'li-active' : ''}>
                  Posts
              </Link>
            </li>
            <li>
              <Link to='/about' 
                onClick={() => setClicked(() => 'about')}
                className={clicked === 'about'? 'li-active' : ''}>
                  About me
              </Link>
            </li>
            <li>
              <Link to='/contact' 
                onClick={() => setClicked(() => 'contact')}
                className={clicked === 'contact'? 'li-active' : ''}>
                  Contact
              </Link>
            </li>
          </Links>
          <Socials>
            <AiFillGithub></AiFillGithub>
            <AiFillLinkedin></AiFillLinkedin>
          </Socials>
          <Socials>
            <Link to='create-post'><Button width={125}>Create Post</Button></Link>
          </Socials>
        </div>
      </Content>
    </NavbarSection>
  )
}
