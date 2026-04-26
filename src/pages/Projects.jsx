import petplay from "../img/petplay.jpg";
import lofi from "../img/lofi.jpg";
import lively from "../img/livelyhifi.jpg";

export default function Projects() {
  return (
    <div className="page">
     <div className="project-con">
      <h2>My Projects</h2>

      <div className="project-card">
        <h3>Project 1 - Quiz App</h3>
        <h5>This app showcases a brief quiz based on health facts and showcases a score at the end.</h5>
        <a href="https://youtu.be/mtL3bwV6DFo?si=ipqv3nsfNs-l6vwb">Youtube Demo</a>
        <a href="https://github.com/LenaDurant/quiz-app">Github Repository</a>
      </div>

      <div className="project-card">
        <h3>Project 2 - Pet Play</h3>
        <h5>This is High Fidelity of a Pet Playdate app that matches local pet owners with other pet owners (of all kinds) to meet up and socialize their furry/non-furry friends.</h5>
        <div className="project-link">
          <a href="https://www.figma.com/design/mROZmpFUb43lnVVJh0YTKW/Pet-Play-Date-app---Free-UI-Kit--Community---Copy-?node-id=1-2&m=dev&t=NxrB0RmRQKt15xzg-1">Figma Pet PlayDate App</a>
        </div>
        <img src={petplay} alt="High Fidelity Prototype of Pet Play"></img>
      </div>

      <div className="project-card">
        <h3>Project 3 - Roam Reveal</h3>
        <h5>This is a low fidelity design for Augmented Reality app that allowws users to find hidden gems in their city that reveals promos to events, museums and restaurants in their local area</h5>
        <div className="project-link"></div>
          <a href="https://youtu.be/AsqxmgVkAoA?si=Y0ykddZAg2nRDswx">Youtube Demo</a>
        </div>
        <img src={lofi} alt="Low Fidelity Prototype of Augument Reality"></img>
      </div>

      <div className="project-card">
        <h3>Project 4 - Lively</h3>
        <h5>This is a high fidelity prototype of an immersive experience that allows users to bring drawings to life and add effects and backgrounds using mixed reality overlay.</h5>
        <div className="project-link">  
          <a href="https://www.youtube.com/watch?v=HCiNEVLqDGM">Youtube Demo</a>
        </div>
        <img src={lively} alt="High Fidelity Prototype of artistic mixed Reality app"></img>
      </div>

      {/* <div className="project-card">
        <h3>Project 5</h3>
        <h5>Brief Description</h5>
        <a href="#">Youtube Demo</a>
        <a href="#">Github Repo</a>
      </div>

      <div className="project-card">
        <h3>Project 6</h3>
        <h5>Brief Description</h5>
        <a href="#">Youtube Demo</a>
        <a href="#">Github Repo</a>
      </div> */}
     </div> 
  );
}