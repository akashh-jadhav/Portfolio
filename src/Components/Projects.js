import React from 'react'
import moviesApp from "../img/moviesApp.png"
import CrmApp from "../img/CrmApp.png"

function Projects() {
  return (
    <section className="projects" id="projects">
      <h1 className="headings">Projects</h1>
      <div className='container'>
      <article>
        <figure>
          <img src={moviesApp} alt="Trending Movie App" width={350} />
        </figure>
        <div>
          <h2>Trending Movies & Tv Shows</h2>
          <p>This Website Will help you to find treanding Movies and Tv Shows all over the world, you can find every Details, Cast, Rating, Trailer, Budget, Realise date of the same.</p>
          <h3>Technologies</h3>
          <ul>
            <li>React</li>
            <li>Bootstrap</li>
            <li>axios</li>
          </ul>
        </div>
        <div className='container'>
      <a rel="noreferrer" href="https://akashh-jadhav.github.io/movies-app/" target="_blank"><button className="cta-outline black ">see work</button></a>
      </div>
      </article><br/>

      <article>
        <figure>
          <img src={CrmApp} alt="CRM-App" width={350} />
        </figure>
        <div>
          <h2>Customer Relationship Management(CRM)</h2>
          <p>CRM Website is a technology for managing all your company's relationships and interactions with customers and potential customers. The goal is simple: Improve business relationships. A CRM system helps companies stay connected to customers, streamline processes, and improve profitability.</p>
          <h3>Technologies</h3>
          <ul>
            <li>React</li>
            <li>Bootstrap</li>
            <li>PrimeReact</li>
          </ul>
        </div>
        <div className='btn-center'>
      <a rel="noreferrer" href="https://mycrmappbyakash.netlify.app/" target="_blank"><button className="cta-outline black">see work</button></a>
      </div>
      </article></div>
    </section>
  )
}

export default Projects