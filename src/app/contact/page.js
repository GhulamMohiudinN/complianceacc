import React from 'react'
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <>
      <Header activePage="contact" />
      
      <ContactForm/>

      <Footer/>
    </>
  )
}

export default page;