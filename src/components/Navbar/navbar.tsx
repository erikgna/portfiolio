import { useEffect, useState } from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { Button } from '../../styles/Global.styled';

import { Links, NavbarSection, Content, Socials, Social, Logo } from './Navbar.styled'

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [clicked, setClicked] = useState<string>('home');

  useEffect(() => {
    const url = window.location.pathname.slice(1);
    setClicked(url);
  }, [])

  return (
    <NavbarSection>
      <Content>
        <Logo>
          <h1>Erik</h1>
        </Logo>
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
            <a title='GitHub' href="https://github.com/erikgna" target='blank'>
              <AiFillGithub></AiFillGithub>  
            </a>
            <a title='Linkedin' href="https://www.linkedin.com/in/erik-na-37817b177/" target='blank'>
              <AiFillLinkedin></AiFillLinkedin>
            </a>
          </Socials>
          <Social>
            <Link to='create-post' onClick={() => setClicked(() => 'create-post')} style={{alignSelf: 'center'}} ><Button width={125}>Create Post</Button></Link>
          </Social>
        </div>
      </Content>
      <div className='menu' onClick={() => setShowNavbar(true)}>
        <AiOutlineMenu />
      </div>
      <div className={`mobile-nav ${showNavbar&& 'animation'}`}>
        <AiOutlineCloseCircle onClick={() => setShowNavbar(false)} />
        <div>
          <Links>
          <li>
              <Link to='/'
                onClick={() =>{
                  setClicked(() => '');
                  setShowNavbar(false);
                }}
                className={clicked === ''? 'li-active' : ''}>
                  Home
              </Link>
            </li>
            <li>
              <Link to='/posts' 
                onClick={() => {
                  setClicked(() => 'posts');
                  setShowNavbar(false);
                }}
                className={clicked === 'posts'? 'li-active' : ''}>
                  Posts
              </Link>
            </li>
            <li>
              <Link to='/about' 
                onClick={() => {
                  setClicked(() => 'about');
                  setShowNavbar(false);
                }}
                className={clicked === 'about'? 'li-active' : ''}>
                  About me
              </Link>
            </li>
            <li>
              <Link to='/contact' 
                onClick={() => {
                  setClicked(() => 'contact');
                  setShowNavbar(false);
                }}
                className={clicked === 'contact'? 'li-active' : ''}>
                  Contact
              </Link>
            </li>
          </Links>
          <Socials>
            <a title='GitHub' href="https://github.com/erikgna" target='blank'>
              <AiFillGithub></AiFillGithub>  
            </a>
            <a title='Linkedin' href="https://www.linkedin.com/in/erik-na-37817b177/" target='blank'>
              <AiFillLinkedin></AiFillLinkedin>
            </a>
          </Socials>
          <Social>
            <Link to='create-post' onClick={() => {
              setClicked(() => 'create-post');
              setShowNavbar(false);
              }} style={{alignSelf: 'center'}} ><Button width={125}>Create Post</Button></Link>
          </Social>
        </div>
      </div>
    </NavbarSection>
  )
}
