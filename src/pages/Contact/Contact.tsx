import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';

import { AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { AnimatedLetter } from '../../components/AnimatedLetter/AnimatedLetter'
import { AnimatedH2 } from '../../components/AnimatedLetter/AnimatedLetter.styled'
import { IContact } from '../../interfaces/contact'
import { Button, Input, TextArea } from '../../styles/Global.styled'
import { ContactMeH3, ContactPage, ContactWays, ContactForm, ContactDescription, ButtonError } from './Contact.styled'
import { RootState } from '../../redux';
import { ILoading } from '../../interfaces/loading';
import { useSelector, useDispatch } from 'react-redux';
import { Loading } from '../../components/Loading/Loading';
import { setIsLoading } from '../../redux/stores/Loading.store';

const initialValue:IContact = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

export const Contact = () => {
    const loading:ILoading = useSelector((state: RootState) => state.loading);
    const dispatch = useDispatch();
    const [sent, setSent] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [contact, setContact] = useState<IContact>(initialValue);

    const changeInput = (event:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setContact({ ...contact, [event.target.name]: event.target.value });
    }

    const sendMessage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        if(contact.email.length < 6 || contact.name.length < 2 || contact.subject.length < 5 || contact.message.length < 10){
            setError('Please, fill the empty fields.');
            return;
        }
        
        const templateParams = {
            name: contact.name,
            email: contact.email,
            subject: contact.subject,
            message: contact.message
        };

        dispatch(setIsLoading(true));
        try {
            emailjs.send(process.env.REACT_APP_SERVICE_ID || '', process.env.REACT_APP_TEMPLATE_ID || '', templateParams, process.env.REACT_APP_PUBLIC_KEY || '')
            .then(function() {
                setSent(true);
            }, function(_) {
                setError('An error occurred sending the email');
            });
            setContact(initialValue);
        } catch (error) {
            dispatch(setIsLoading(false));
            setError('An error occurred sending the email');
        }
        dispatch(setIsLoading(false));
    }

    useEffect(() => {
        setSent(false);
        setError('');
    },[])

    return (
        <ContactPage>
            <ContactDescription>
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
                    <a href='https://www.linkedin.com/in/erik-na-37817b177/' target="blank" >
                        <div>
                            <AiOutlineLinkedin />
                            <p>Erik Gabriel Na</p>
                        </div>
                    </a>
                </ContactWays>
            </ContactDescription>
            <ContactForm style={{paddingRight: '40px'}}>
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
                <ButtonError>
                    {sent&& <h5 style={{color: '#bde7f5'}}>Email sent!</h5>}
                    {error !== ''&& <h5 style={{color: '#f44336'}}>{error}</h5>}
                    {!loading.isLoading?
                        <Button width={225} onClick={(e) => sendMessage(e)}>Send message</Button>
                        :
                        <Loading></Loading>
                    }        
                </ButtonError>
            </ContactForm>
        </ContactPage>
    )
}
