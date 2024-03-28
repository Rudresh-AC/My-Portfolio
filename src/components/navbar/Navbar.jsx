import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <a
            href="https://github.com/Rudresh-AC"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/git.png" alt="" />
          </a>
          <a
            href="linkedin.com/in/rudresh-ac-b8b962280"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedln.png" alt="" />
          </a>
          <a
            href="https://wa.me/qr/K7B6ILXXORMAO"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/whatsapp.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
