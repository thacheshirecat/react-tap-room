import React from 'react';

function Home(){
  return(
    <div className="container">
      <style global jsx>{`
          h2 {
            margin-top: 10px;
            color: green;
            text-align: center;
          }
          .card {
            background-color: gold;
          }
          body {
            background-image: url(https://www.zastavki.com/pictures/originals/2015/Backgrounds_Light_green_gradient_background_107689_.jpg);
            background-repeat: no-repeat;
            background-size: cover;
          }
            `}</style>
      <h2>Welcome to the Tap Room!</h2>
      <div className="card">
        <h3>Premium Brews~</h3>
        <p>Here at the Greenfrog Tap Room we pride ourselves on lorem ipsum, consectetur adipiscing elit. Cras fermentum libero id commodo ultrices. Mauris auctor dictum augue, eu varius eros commodo at. Etiam ornare semper neque. Sed pharetra diam dolor. Integer mollis scelerisque mi nec feugiat. Pellentesque id fringilla nulla. Duis efficitur, nunc accumsan consectetur sagittis, elit massa tincidunt odio, a venenatis massa velit ut arcu. In at nibh vel ante sollicitudin sollicitudin.</p>
      </div>
    </div>
  );
}

export default Home;
