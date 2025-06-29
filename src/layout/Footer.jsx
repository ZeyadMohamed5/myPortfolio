const Footer = () => {
  return (
    <footer className="snap-start flex-grow bg-gradient-to-bl from-[#0b1120] via-[#0a101c] to-[#080c16] text-slate-300 pt-10 md:pt-16 pb-8 border-t border-[#1e2d47]">
      <div className="px-6 flex flex-col items-center justify-center text-center space-y-5">
        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/ZeyadMohamed5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/zeyad-el-sonbaty-66a5ab25a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a
            href="mailto:zeyad.elsonbaty1@gmail.com"
            className="hover:text-sky-400 transition"
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 outfit-normal">
          <li>
            <a
              href="#techStack"
              className="hover:text-sky-400 transition-colors duration-200"
            >
              Tech Stack
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-sky-400 transition-colors duration-200"
            >
              Projects
            </a>
          </li>
        </ul>

        {/* Shoutout */}
        <div className="text-xs text-slate-500 italic">
          Pixel art avatar by my talented friend{" "}
          <a
            href="https://www.instagram.com/mohamed.kapardy555/"
            target="_blank"
            className="text-sky-400 font-medium hover:underline"
          >
            mohamed kapardy
          </a>
        </div>
        {/* Copyright */}
        <div className="text-xs text-sky-400 font-semibold ">© 2025 Zeyad </div>
      </div>
    </footer>
  );
};

export default Footer;
