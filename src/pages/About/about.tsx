import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimatedLetter } from '../../components/AnimatedLetter/AnimatedLetter';
import { AnimatedH2 } from '../../components/AnimatedLetter/AnimatedLetter.styled';
import { FlexPrincipal } from '../../styles/Global.styled';

import { Description, ProgressBarStyles, Skills } from './About.styled';

const SkillsValues:{level:number, name:string}[] = [
    { level: 200, name: 'HTML / CSS / JavaScript' },
    { level: 195, name: 'ReactJS' },
    { level: 195, name: 'Flutter' },
    { level: 195, name: 'MySQL' },
    { level: 190, name: 'NodeJS' },
    { level: 180, name: 'TypeScript' },
    { level: 125, name: 'Java' },
    { level: 115, name: 'MongoDB' },
    { level: 100, name: 'Python' },
    { level: 100, name: 'AWS' },
    { level: 100, name: 'Docker' }
]

export const About = () => {
  return (
    <FlexPrincipal alignCenter={true}>
        <Description>
            <AnimatedH2>
                <AnimatedLetter letter='S' />
                <AnimatedLetter letter='k' />
                <AnimatedLetter letter='i' />
                <AnimatedLetter letter='l' />
                <AnimatedLetter letter='l' />
                <AnimatedLetter letter='s' />
                <AnimatedLetter letter='&nbsp;a' />
                <AnimatedLetter letter='n' />
                <AnimatedLetter letter='d' />
                <br />
                <AnimatedLetter letter='E' />
                <AnimatedLetter letter='x' />
                <AnimatedLetter letter='p' />
                <AnimatedLetter letter='e' />
                <AnimatedLetter letter='r' />
                <AnimatedLetter letter='i' />
                <AnimatedLetter letter='e' />
                <AnimatedLetter letter='n' />
                <AnimatedLetter letter='c' />
                <AnimatedLetter letter='e' />
                <AnimatedLetter letter='s' />
            </AnimatedH2>
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
                Visit my <a href='https://www.linkedin.com/in/erik-na-37817b177/' target="blank">Linkedin</a> profile or <a href='https://github.com/erikgna' target="blank">contact me</a> for more details.
            </p>
        </Description>

        <Skills>

            {SkillsValues.map(( {level, name} ) => (
                <div key={name}>
                    <h3>{name}</h3>
                    <SkillProgressBar size={level} />
                </div>
            ))}
            
        </Skills>
    </FlexPrincipal>
  )
}

const SkillProgressBar: React.FC<{size:number}> = ( {size} ) => {
    const squareVariants = {
        visible: { backgroundPosition: '0% 100%' },
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
        />
    );
}
