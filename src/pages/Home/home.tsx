import React, { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";

import { InformationSection, Span, HomeSection } from "./Home.styled";
import { Button } from "../../styles/Global.styled";

const Earth = React.lazy(() => import("./Earth3D"));
const Canvas = React.lazy(() => import("./CanvasDefault"));

export const Home = () => {
  const [word, setWord] = useState('');

  const effectWord = () => {
    const list = ['frontend', 'backend'];

    let letterIndex = 0;
    let wordIndex = 0
    let word = list[wordIndex][letterIndex]

    setInterval(() => {
      letterIndex++;
      if(letterIndex >= list[wordIndex].length){
        word = word.slice(0, -1);
        if(letterIndex === list[wordIndex].length*2) {
          letterIndex = 0
          if(wordIndex === 0) wordIndex = 1;
          else if(wordIndex === 1) wordIndex = 0;
        }
      }
      if(letterIndex < list[wordIndex].length){
        word = word+list[wordIndex][letterIndex]
      }
      setWord(word)
    }, 275)
  }

  useEffect(() => {
    effectWord();
  }, [])

  return (
    <HomeSection>
        <InformationSection>
          <h1>
            <span>H</span>
            <span>e</span>
            <span>l</span>
            <span>l</span>
            <span>o</span>
            <span>,</span>
            <br />I'm Erik,<br /><Span>{word}</Span> developer
          </h1>
          <p>Frontend Developer / Backend Developer / DevOps</p>
          <Link to='/contact'>
            <Button width={225}>Contact me</Button>
          </Link>          
        </InformationSection>
        <div>
          <Suspense fallback={ <div>Loading...</div> }>
            <Canvas style={{width: 'calc(45vw - 75px)', height: '100vh'}} >
              <Earth />
            </Canvas>
          </Suspense>
        </div>
    </HomeSection>
  )
}
