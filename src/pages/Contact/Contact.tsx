import React, { useState } from 'react'
import { AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AnimatedLetter } from '../../components/AnimatedLetter/AnimatedLetter'
import { AnimatedH2 } from '../../components/AnimatedLetter/AnimatedLetter.styled'
import { IContact } from '../../interfaces/contact'
import { Button, FlexPrincipal, Form, Input, TextArea } from '../../styles/Global.styled'
import { Description } from '../About/About.styled'
import { ContactMeH3, ContactWays } from './Contact.styled'

export const Contact = () => {
    const [contact, setContact] = useState<IContact>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const changeInput = (event:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setContact({ ...contact, [event.target.name]: event.target.value });
    }

    const sendMessage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        console.log(contact);
    }

    return (
        <FlexPrincipal alignCenter={true}>
            <Description>
                <AnimatedH2>
                    <AnimatedLetter letter='C' />
                    <AnimatedLetter letter='o' />
                    <AnimatedLetter letter='n' />
                    <AnimatedLetter letter='t' />
                    <AnimatedLetter letter='a' />
                    <AnimatedLetter letter='c' />
                    <AnimatedLetter letter='t' />
                    <AnimatedLetter letter='&nbsp;m' />
                    <AnimatedLetter letter='e' />
                </AnimatedH2>
                <p>I'm looking to working at a enterprise as intern or junior, if you have opportunities to me, I would be thankful.</p>
                <ContactWays>
                    <div>
                        <AiOutlineMail />
                        <p>erikgnaa@gmail.com</p>
                    </div>
                    <div>
                        <AiOutlineWhatsApp />
                        <p>+55 (51) 920007599</p>
                    </div>
                    <Link to='https://www.linkedin.com/in/erik-na-37817b177/'>
                        <div>
                            <AiOutlineLinkedin />
                            <p>Erik Gabriel Na</p>
                        </div>
                    </Link>
                </ContactWays>
            </Description>
            <Form>
                <ContactMeH3>Send me a message!</ContactMeH3>
                <div>
                    <Input 
                        type="text"
                        name='name' 
                        id='name' 
                        placeholder='Name' 
                        onChange={(e) => changeInput(e)}
                    />
                    <Input 
                        type="text"
                        name='email' 
                        id='email' 
                        placeholder='Email' 
                        onChange={(e) => changeInput(e)}
                    />
                </div>
                <Input 
                    type="text" 
                    name='subject' 
                    id='subject' 
                    placeholder='Subject' 
                    onChange={(e) => changeInput(e)} 
                />
                <TextArea 
                    name="message" 
                    id="message" 
                    cols={30} 
                    rows={10} 
                    placeholder='Message' 
                    onChange={(e) => changeInput(e)}
                />
                <Button width={225} onClick={(e) => sendMessage(e)}>Send message</Button>
            </Form>
        </FlexPrincipal>
    )
}
