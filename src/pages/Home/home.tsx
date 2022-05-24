import { useEffect, useState } from "react";
import { InformationSection, Teste } from "./Home.styled";
import { motion } from "framer-motion";

export const Home = () => {
  const [teste, setTeste] = useState('');

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
      setTeste(word)
    }, 275)
  }

  useEffect(() => {
    effectTeste();
  }, [])

  return (
    <section className="home">
        <InformationSection>
          <h1>
            Hello,<br />I'm Erik,<br /><span>{teste}</span> developer
          </h1>
          <p>Frontend Developer / Backend Developer / DevOps</p>
          <button>Contact me</button>

          <Teste whileTap={{scale: .8}} drag={true} ></Teste>
        </InformationSection>
    </section>
  )
}
