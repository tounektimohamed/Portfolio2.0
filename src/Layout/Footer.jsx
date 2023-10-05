import { MainLogo } from "../Assets/AssetsList";
import NavItems from "../Utils/NavItems";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import scrollToTopUtil from "../Utils/ScrollToTop";

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-2">
        <div className="flex justify-center items-center flex-col">
          {MainLogo}
          <ul className="flex flex-wrap items-center mb-2 gap-4 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {NavItems.map((items, index) => (
              <li key={index}>
                <ScrollLink
                  activeClass="active"
                  to={items.toLowerCase()}
                  spy={true}
                  smooth={true}
                  duration={300}
                  className="font-medium tracking-wide text-gray-700 dark:text-lightText transition-colors duration-200 hover:text-fadeMainTheme cursor-pointer hover:underline"
                >
                  {items}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className=" text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center items-center mb-2">
          © {new Date().getFullYear()}{" "}
          <Link to="/" onClick={() => scrollToTopUtil()} className="ml-1 hover:underline">
            Saurabh Khatmode
          </Link>
          . All Rights Reserved.
        </span> 
      </div>
    </footer>
  );
};

export default Footer;
