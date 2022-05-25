import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; 

import { InformationSection, Span } from "./Home.styled";
import { Earth } from "./Earth3D";

export const Home = () => {
  const [word, setWord] = useState('');

  const effectTeste = () => {
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
    effectTeste();
  }, [])

  return (
    <section className="home">
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
          <button>Contact me</button>
        </InformationSection>
        <div>
          <Canvas style={{width: `${window.innerWidth/3.7}px`}}>
            <Earth />
          </Canvas>
        </div>
    </section>
  )
}
