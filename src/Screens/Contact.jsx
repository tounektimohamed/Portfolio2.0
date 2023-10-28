import { ContactAnimation } from "../Assets/AssetsList";
import ContactForm from "../Components/ContactForm";
import LottieAnimationCard from "../Components/LottieAnimationCard";

const Contact = () => {
  return (
    <div id="contact" className=" flex justify-center items-center gap-5 flex-col lg:flex-row">
      <ContactForm/>
      <LottieAnimationCard AnimationSrc={ContactAnimation} />
    </div>
  );
};

export default Contact;
