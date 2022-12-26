import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Sardonic Lovely Octopus</title>
        <meta property="og:title" content="Sardonic Lovely Octopus" />
      </Helmet>
      <div className="home-container1">
        <h1 className="home-text">pretty rad studio.</h1>
      </div>
      <div className="home-container2">
        <img
          alt="image"
          src="/playground_assets/vector1.svg"
          className="home-image text-purple"
        />
        <div className="home-container3">
          <h1 className="home-text01">Radical solutions for</h1>
          <h1 className="home-text02">modern brands.</h1>
        </div>
        <span className="home-text03">
          <span>
            Bespoke development for the e-commerce and media industries. 
          </span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="home-text07">
          <span>
            Our strategy includes using modern cutting edge technology to
            deliver solutions and experiences that will grow with an
            organization. We&apos;re
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text09">pretty rad.</span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link"
        >
          Get in touch
        </a>
      </div>
    </div>
  )
}

export default Home
