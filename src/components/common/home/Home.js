import React from "react";
import "./Home.css";

export default function About() {
  return (
    <div className='main'>
      <header className='header-1'>
        <h1>RJ Pantalena Webpage</h1>
      </header>

      <section>
        <h2 className='header-2'>Split text boxes</h2>
        <div className='split'>
          <div className='split-item split-left'>
            <p>
              Chick Corea was one of the greatest pianists to ever live. This is
              not disputed.
            </p>
          </div>
          <div className='split-item split-right'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              recusandae optio nulla molestiae id. Dignissimos nemo quis minima
              placeat ducimus.
            </p>
          </div>
        </div>
      </section>
      <section className='picture-section'>
        <img src='/images/image-001.jpg' alt=''></img>
      </section>
      <h2>Home Page v4</h2>
    </div>
  );
}
