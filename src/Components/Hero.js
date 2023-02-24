import me from '../img/me.jpg'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="brief">
        <div>
          <h1><span
            className='im'
          >I'm</span></h1>
          <h1>Akash Jadhav</h1>
          <p>A Front-end developer aiming to design and develop experiences that make people's lives simple</p>
        </div>
        <button className="cta">See My Projects</button>
      </div>
      <figure>
        <img src={me} alt="Akash Jadhav"  />
      </figure>
    </section>
  )
}

export default Hero