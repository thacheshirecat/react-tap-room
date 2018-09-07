import React from 'react';
import brewPic from '../assets/images/brew.jpg';

function About(){
  return(
    <div>
      <style jsx>{`
          img {
            width: 1110px;
            border: 3px solid green;
            border-radius: 25px;
          }
      `}</style>
      <h2>About Greenfrog</h2>
      <div className='card'>
        <h3>Who We Are~</h3>
        <p> Donec nec nisi dignissim, porttitor libero vitae, dapibus nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin laoreet, nisi quis vehicula volutpat, sem lorem efficitur libero, quis mollis mauris justo vitae ex. Etiam non suscipit sapien. Aliquam posuere dolor non lectus iaculis, vitae efficitur enim dapibus. Fusce turpis neque, tincidunt vel faucibus ac, interdum rutrum augue. Nam malesuada arcu vel dui accumsan, id dictum elit efficitur. Cras tincidunt hendrerit justo. Quisque a lectus viverra, pellentesque nulla molestie, interdum lectus.

        Suspendisse ac placerat justo, sed accumsan dui. Aenean sed diam sed mauris accumsan dignissim ut ut nisl. Phasellus sed ligula at tellus porttitor mattis. Vestibulum at sodales quam. Donec pharetra convallis fermentum. Mauris placerat sodales massa, ut tempor metus elementum pellentesque. Etiam ac mi laoreet, vehicula urna et, aliquet eros. Aenean feugiat dolor at pulvinar euismod. Fusce porta sit amet turpis eu egestas. Praesent porta risus a fermentum placerat. </p>
      </div>
      <img src={brewPic}/>
    </div>
  );
}

export default About;
