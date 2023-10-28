import {
  AboutAnimation,
  DockerLogo,
  ExpressJSLogo,
  FastAPILogo,
  GithubLogo,
  JavaScriptLogo,
  MongoDBLogo,
  NodeJSLogo,
  PostgreSQLLogo,
  ReactJSLogo,
  RedisLogo,
  TailwindCSSLogo
} from "../Assets/AssetsList"
import GitHubCalender from "../Components/GitHubCalender";
import LottieAnimationCard from "../Components/LottieAnimationCard";
import SkillsCard from "../Components/SkillsCard";
import Title from "../Components/Title";

const Skills = () => {
  const data = [
    JavaScriptLogo,
    ReactJSLogo,
    TailwindCSSLogo,
    NodeJSLogo,
    MongoDBLogo,
    GithubLogo,
    ExpressJSLogo,
    FastAPILogo,
    PostgreSQLLogo,
    DockerLogo
  ];

  const TitleText =
    <h1 className=" text-gray-800 font-bebas-neue text-4xl dark:text-white pb-6 " >
      Where <strong className="text-fadeMainTheme">Passion</strong> Meets <strong className="text-fadeMainTheme">Proficiency</strong>
    </h1>
  return (
    <div className="my-20 flex justify-center items-center flex-col">
      <Title text={TitleText} id="skills" />
      <div id='skills' className="flex flex-wrap justify-center gap-10 mt-10 px-10 lg:ml-10 lg:w-1/2">
        {
          data.map((item, index) => (
            <SkillsCard imgSrc={item} index={index} key={index} />
          ))
        }
        </div>
        <div className="flex justify-center items-center flex-col">
          <LottieAnimationCard AnimationSrc={AboutAnimation} />
          <GitHubCalender />
      </div>

    </div>
  );
};

export default Skills;
