import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white fixed-bottom p-3">
      <div className="d-flex justify-content-center gap-3">
        <a href="https://github.com/ErnestoDanielTafoyaMolina" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white size-30" />
        </a>
        <a href="https://linkedin.com/in/ernesto-daniel-tafoya-molina-59636b23a" target="_blank" rel="noopener noreferrer">
          <FaLinkedin  className="text-white size-30"/>
        </a>
      </div>
    </footer>
  )
}
