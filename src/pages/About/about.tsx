import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { ProgressBarStyles, Description, Skills, Special, Static } from './About.styled';

export const About = () => {
  return (
    <section className='home'>
        <Description>
            <h2>
                <AnimatedLetter letter='S'></AnimatedLetter>
                <AnimatedLetter letter='k'></AnimatedLetter>
                <AnimatedLetter letter='i'></AnimatedLetter>
                <AnimatedLetter letter='l'></AnimatedLetter>
                <AnimatedLetter letter='l'></AnimatedLetter>
                <AnimatedLetter letter='s'></AnimatedLetter>
                <AnimatedLetter letter='&nbsp;a'></AnimatedLetter>
                <AnimatedLetter letter='n'></AnimatedLetter>
                <AnimatedLetter letter='d'></AnimatedLetter>
                <br />
                <AnimatedLetter letter='E'></AnimatedLetter>
                <AnimatedLetter letter='x'></AnimatedLetter>
                <AnimatedLetter letter='p'></AnimatedLetter>
                <AnimatedLetter letter='e'></AnimatedLetter>
                <AnimatedLetter letter='r'></AnimatedLetter>
                <AnimatedLetter letter='i'></AnimatedLetter>
                <AnimatedLetter letter='e'></AnimatedLetter>
                <AnimatedLetter letter='n'></AnimatedLetter>
                <AnimatedLetter letter='c'></AnimatedLetter>
                <AnimatedLetter letter='e'></AnimatedLetter>
                <AnimatedLetter letter='s'></AnimatedLetter>
            </h2>
            <p>
                Since the beggining of my journey I always focused more on frontend and web applications.
                I've designed, developed and build multiples websites since my start from now.
                <br />
                <br />
                I've worked as freelancer once, where I built a pizzaria webpage for administration of orders.
                Also, I've worked to an junior enterprise, where I've learned a lot about teamwork, talking
                with clients, clean code and agile software development.
                <br />
                <br />
                Now I'm working with a research lab of my college building a Flutter mobile application,
                where I'm acting mostly on the frontend, mobile resources and API calls.
                <br />
                <br />
                I've also learned and worked in personal projects using backend, database and DevOps technologies.
                <br />
                <br />
                Visit my <a href='https://github.com'>Linkedin</a> profile or <a href='https://github.com'>contact me</a> for more details.
            </p>
        </Description>
        <Skills>
            <div>
                <h3>HTML / CSS / JavaScript</h3>
                <ProgressBar size={200} />
            </div>
            <div>
                <h3>ReactJS</h3>
                <ProgressBar size={195} />
            </div>
            <div>
                <h3>Flutter</h3>
                <ProgressBar size={195} />
            </div>
            <div>
                <h3>MySQL</h3>
                <ProgressBar size={195} />
            </div>
            <div>
                <h3>NodeJS</h3>
                <ProgressBar size={190} />
            </div>
            <div>
                <h3>TypeScript</h3>
                <ProgressBar size={180} />
            </div>
            <div>
                <h3>Java</h3>
                <ProgressBar size={125} />
            </div>
            <div>
                <h3>MongoDB</h3>
                <ProgressBar size={115} />
            </div>
            <div>
                <h3>Python</h3>
                <ProgressBar size={100} />
            </div>
            <div>
                <h3>AWS</h3>
                <ProgressBar size={100} />
            </div>
            <div>
                <h3>Docker</h3>
                <ProgressBar size={100} />
            </div>
        </Skills>
    </section>
  )
}

const ProgressBar: React.FC<{size:number}> = ( {size} ) => {
    const squareVariants = {
        visible: { backgroundPosition: 'left' },
    };
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <ProgressBarStyles size={size}
        ref={ref}
        animate={controls}
        variants={squareVariants}
        ></ProgressBarStyles>
    );
}

const AnimatedLetter: React.FC<{letter:string}> = ( {letter} ) => {
    const [animated, setAnimated] = useState<boolean>(false);

    return(
        animated?
    <Special 
        onAnimationEnd={() => setAnimated(() => false)}>{letter}</Special> 
        :
    <Static 
        onMouseEnter={() => setAnimated(() => true)}>{letter}</Static>
    )
}