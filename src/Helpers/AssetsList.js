import ecommlogo from "../Assets/E-comm-logo.jpg";
import drivingSchoolLogo from "../Assets/driving school.jpg";
import portfolioLogo from "../Assets/Protfolio-logo.jpg";
import snapiaLogo from "../Assets/SnapiaLogo.png";
import weatherAppLogo from "../Assets/Weather-App-Logo.jpg";
import imdbLogo from "../Assets/IMDB logo.jpg";

import aboutAnimation from "../Assets/Animations/AboutAnimation.json";
import contactAnimation from "../Assets/Animations/ContactAnimation.json";
import heroAnimation from "../Assets/Animations/HeroAnimation.json";
import projectAnimation from "../Assets/Animations/ProjectAnimation.json";
import skillsAnimation from "../Assets/Animations/SkillsAnimation.json";

// Main  Logo

export const MainLogo = (
  <div
    to="/"
    className="nav-logo font-black leading-none text-gray-800 font-bebas-neue   dark:text-lightText flex items-center ml-4 cursor-pointer  no-underline text-4xl "
  >
    Sau
    <span className="r font-bebas-neue text-mainTheme text-6xl font-bold ">र</span>
    bh
  </div>
);

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
