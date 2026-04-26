import icon from "../img/Professional sillohuette.png";

export default function About() {
  return (
    <>
    <div className="page">
     <h2>Nice to Meet You</h2>
     <div className="blurb">
      <img src={icon} alt="Minimalist image of myself, Arlena Durant" id="profile"/>
      <h5>Hello! I’m Arlena — an aspiring UX designer who loves turning ideas into clean, intuitive experiences. I earned my CompTIA Security+ Certificate and graduated from the Full Stack Academy boot camp in September 2024.</h5>
      <h5>As of Summer 2025, I’m studying Digital Media at the University of Central Florida to deepen my skills in web development and design, building experience with HTML, CSS, JavaScript, Git, GitHub, Canva, Figma, Adobe Creative Cloud, and Photoshop.</h5>
      <h5>My background in Hospitality Management shaped my strengths in empathy, communication, collaboration, time management, and attention to detail — qualities I bring into every design project.</h5>
      <h5>I’m excited to keep learning, exploring new ideas, and gaining hands-on experience that helps me create thoughtful, human-centered designs.</h5>
     </div>
    </div>
    </>
  );
}