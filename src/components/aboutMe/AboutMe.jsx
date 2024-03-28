import { useState } from "react";
import "./aboutme.scss";
import { useEffect } from "react";

const AboutMe = () => {
  const [downloadCv, setDownloadCv] = useState(false);

  useEffect(() => {
    if (downloadCv) {
      const downloadUrl = "./rudresh.pdf";
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "rudresh.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadCv(false);
    }
  }, [downloadCv]);

  function handleDownload() {
    setDownloadCv(true);
  }

  return (
    <div className="about">
      <div className="aboutText">
        <h1>About Me</h1>
      </div>

      <div className="aboutbox">
        <div className="imageBox">
          <img src="./about.jpg" alt="About" />
        </div>

        <div className="textContainer">
          <h2>
            A dedicated Front-end Developer at Do your thng (DYT) , Bengaluru 📍
          </h2>
          <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
          <div className="techStack">
            <h3>techStack</h3>

            <div className="skills">
              <div className="skill">
                <img src="./react.png" alt="" />
                <p>React</p>
              </div>
              <div className="skill">
                <img src="./js.png" alt="" />
                <p>Javascript</p>
              </div>
              <div className="skill">
                <img src="./scss.webp" alt="" />
                <p>scss</p>
              </div>
              <div className="skill">
                <img src="./tailwind.png" alt="" />
                <p>tailwind</p>
              </div>
              <div className="skill">
                <img src="./html.png" alt="" />
                <p>html</p>
              </div>
              <div className="skill">
                <img src="./css.png" alt="" />
                <p>css</p>
              </div>
              <div className="skill">
                <img src="./boot.webp" alt="" />
                <p>Bootstrap</p>
              </div>
              <div className="skill">
                <img src="./native.png" alt="" />
                <p>React native</p>
              </div>
            </div>
          </div>
          <div className="buttonContainer">
            <button onClick={handleDownload}>
              Download <strong>CV</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
