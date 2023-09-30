import ecommlogo from "../Assets/Ecommerce campaign-amico.svg";
import drivingSchoolLogo from "../Assets/driving school-bro.svg";
import portfolioLogo from "../Assets/Personal site-amico.svg";
import snapiaLogo from "../Assets/Building hashtag-amico.svg";
import weatherAppLogo from "../Assets/Weather-amico.svg";
import imdbLogo from "../Assets/Home cinema-amico.svg";

import aboutAnimation from "../Assets/Animations/AboutAnimation.json";
import contactAnimation from "../Assets/Animations/ContactAnimation.json";
import heroAnimation from "../Assets/Animations/HeroAnimation.json";
import projectAnimation from "../Assets/Animations/ProjectAnimation.json";
import skillsAnimation from "../Assets/Animations/SkillsAnimation.json";
import { Link } from "react-router-dom";

// Main  Logo

export const MainLogo = 
  <Link
    to="/"
    onClick={()=>window.scroll(0,0)}
    className="nav-logo font-black leading-none text-gray-800 font-bebas-neue   dark:text-lightText flex items-center ml-4 cursor-pointer  no-underline text-4xl "
  >
    Sau
    <span className="r font-bebas-neue text-mainTheme text-6xl font-bold ">र</span>
    bh
  </Link>

// All  Projects Images

export const ECmomLogo = ecommlogo;
export const DrivingSchoolLogo = drivingSchoolLogo;
export const PortfolioLogo = portfolioLogo;
export const SnapiaLogo = snapiaLogo;
export const WeatherAppLogo = weatherAppLogo;
export const IMDBLogo = imdbLogo;

// All Animations

export const AboutAnimation = aboutAnimation;
export const ContactAnimation = contactAnimation;
export const HeroAnimation = heroAnimation;
export const ProjectAnimation = projectAnimation;
export const SkillsAnimation = skillsAnimation;
