const SimpleNav = () => {
  return (
    <nav className="w-full flex justify-center">
      <ul className="flex gap-4 bg-[#0c1a2e] border border-[#1c3b57] rounded-full px-6 py-3 shadow-[0_0_10px_#1c3b57]">
        <li>
          <a
            href="#techStack"
            className="text-slate-200 px-4 py-2 rounded-full hover:bg-[#1c3b57] hover:text-sky-400 transition-all duration-200"
          >
            Tech Stack
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-slate-200 px-4 py-2 rounded-full hover:bg-[#1c3b57] hover:text-sky-400 transition-all duration-200"
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SimpleNav;
