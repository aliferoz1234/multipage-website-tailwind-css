import React from 'react'

const About = () => {
  return (
    <section className='about h-screen flex items-center justify-start bg-cover bg-center text-white px-10'
    style={{backgroundImage:"url('/background-image2.jpg')"}}>
      <div className='bg-blue-950 bg-opacity-60 p-8 rounded-md max-w-lg'>
      <h2 className='text-4xl font-bold mb-4' data-aos="fade-up">About Us</h2>
      <p>Welcome to Watch World, where we believe a watch is more than just an accessory. It is a statement of style,
        precision and craftmanship. Our mission is to bring you a diverse selection of premium timepieces from around the
        globe, each chosen for its quality and unique design. We are here to help you find the perfect piece to complement your
        personality and elevate your look. </p>
      </div>
    </section>
  )
}

export default About
