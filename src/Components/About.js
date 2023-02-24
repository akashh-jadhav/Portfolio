import React from 'react'
import mySelf from "../img/mySelf.jpg"

function About() {
  return (
    <section className="aboutMe" id="about">
      <main>
        <figure>
          <img src={mySelf} alt="charles kasasira" width={350} />
        </figure>
        <div>
          <h2>ABOUT ME</h2>
          <h1 id="who-am-i">WHO AM I</h1>
          <p>I am a BE graduate(2020) with technical background but recently switched the ambition to find my own way in the IT Industry typically in the field of Web Development. I have done" Front End Web Development Course. I prefer React as a Front End , currently I am learning Node Js.</p>
          <p>I describe myself as a passionate developer who loves to keep myself up to date with the technology trend
worldwide.</p> 
          <div>
            <button className="cta black-filled"><a href='mailto:dr.er.akashjadhav1997@gmail.com' color='black'>Hire Me</a></button>
            <button className="cta black-filled"><a href='https://drive.google.com/file/d/1JlGH30wpXFool8WoY2e_mif-tTmJpYiU/view?usp=share_link'>See My Resume</a></button>
          </div>
        </div>

      </main>
    </section>
  )
}

export default About