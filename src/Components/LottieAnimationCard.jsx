import Lottie from "lottie-react";

const LottieAnimationCard = ({ AnimationSrc }) => {
  return <Lottie
    animationData={AnimationSrc}
    className="w-full h-full md:w-1/2"
  />;
};

export default LottieAnimationCard;  
