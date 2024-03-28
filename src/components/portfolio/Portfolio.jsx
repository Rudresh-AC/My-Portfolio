import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import todo from "/public/todo-app.png";
import movie from "/public/movie-app.png";

// const imagePath = process.env.PUBLIC_URL + "/todo-app.png";

const items = [
  {
    id: 1,
    title: "ToDo List App",
    img: todo,
    desc: " A todo list is a tool for organizing tasks and goals. It helps prioritize activities, manage time effectively, and reduce stress by providing a clear roadmap of what needs to be done. Whether in paper or digital form, todo lists aid productivity and focus by breaking down tasks into manageable steps, enabling individuals to track progress and achieve their objectives efficiently.",
    link: "https://taskmate-rudresh.netlify.app/",
  },
  {
    id: 2,
    title: "Cinemate",
    img: movie,
    desc: "The project's name is Cinemate, where users can search for any movie and check its ratings. Additionally, they can explore top movies and upcoming releases. Cinemate allows users to search for any movie they desire, providing a comprehensive database of films. With features like user reviews, trailers, and recommendations, it offers a holistic movie-watching experience. Whether users want to discover new releases or revisit classics, Cinemate caters to all movie enthusiasts, making it a must-have app for cinephiles",
    link: "https://rudresh-ac-cinemate.netlify.app/",
  },
  // {
  //   id: 3,
  //   title: "Vanilla JS App",
  //   img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.link} target="_blank" rel="noreferrer">
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
