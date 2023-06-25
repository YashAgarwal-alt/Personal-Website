"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

const contactInfo = {
  email: 'yashleo81@gmail.com',
  phone: '(647)-783-0076',
  description:
    'I am currently looking for opportunities for internships/work starting from July 1st, 2023. If you have any positions available, feel free to reach out!',
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const EMAILJS_SERVICE_ID = 'service_hfcimsi';
    const EMAILJS_TEMPLATE_ID = 'template_z5420wy';
    const EMAILJS_USER_ID = 'zt7cduFTEai5iHG7s';

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.currentTarget, EMAILJS_USER_ID)
      .then(function(response) {
        console.log('Email Delivered Successfully!', response.status, response.text);
      }, function(error) {
        console.log('Failed to Deliver Email...', error);
      });
    
    const EMAILJS_GMAIL_SERVICE_ID = 'service_qzpsj5z';
    const EMAILJS_GMAIL_TEMPLATE_ID = 'template_h32ugq3';

    emailjs.sendForm(EMAILJS_GMAIL_SERVICE_ID, EMAILJS_GMAIL_TEMPLATE_ID, e.currentTarget, EMAILJS_USER_ID)
    .then(function(response) {
      console.log('Email Delivered Successfully!', response.status, response.text);
    }, function(error) {
      console.log('Failed to Deliver Email...', error);
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact">
    <h1 className="text-center font-bold text-4xl mt-16">
      Contact Me!
      <hr className="w-14 h-1 mx-auto my-5 bg-cyan-400 border-0 rounded mb-10" />
    </h1>

    <div className="flex flex-col md:flex-row space-y-10 items-stretch justify-center md:text-left md:p-4 md:space-y-0 md:space-x-10 sm:text-center">
      {/* Get in Touch Text*/}
      <div className="md:w-1/2 sm:text-center">
        <h1 className="text-center text-3xl font-bold mb-6 md:text-left sm:mb-6 text-orange-400">Get in Touch!</h1>
        
        <div className='flex flex-row sm:text-center'>
          <h2 className='font-semibold md:text-left mb-3 text-center text-lg '>Email Address:</h2>
          <p className='ml-1'>{contactInfo.email}</p>
        </div>

        <div className='flex flex-row sm:text-center'>
          <h2 className='font-semibold md:text-left mb-3 text-center text-lg '>Phone Number:</h2>
          <p className='ml-1'>{contactInfo.phone}</p>
        </div>

        <div className='flex flex-row sm:text-center'>
          <h2 className='md:text-left mb-3 text-md '>{contactInfo.description}</h2>
        </div>

        <Image
        src="/dev.png"
        alt=""
        width={150}
        height={150}
        className="hidden md:block md:relative md:bottom-4 md:top-4 md:left-14 md:z-0"
        />
      </div>

      {/* Contact Form */}
      <div className="container mx-auto">
      <form onSubmit={sendEmail} className="max-w-md mx-auto">
        <div className="flex mb-4">

          <div className="w-1/2 mr-2">
            <label className="block font-bold mb-2" htmlFor="name">Name:</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="name"
              name="user_name"
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          

          <div className="w-1/2 ml-2">
            <label className="block font-bold mb-2" htmlFor="email">Email:</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="email"
              id="email"
              name="user_email"
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="message">Message:</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded resize-y"
            id="message"
            name="message"
            placeholder='Message'
            value={message}
            rows={7}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className='flex justify-center'>
          <button className="bg-cyan-400 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  </section>
  );
};

export default Contact;
