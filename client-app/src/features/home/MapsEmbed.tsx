import { useSmallScreen } from "../../hooks/useSmallScreen";

const MapsEmbed = () => {
  const smallScreen = useSmallScreen();
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5202.362747995617!2d-74.18052802274303!3d39.882740587964825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19f9922ccf81b%3A0x75b8b6ab222a8867!2sBerkeley%20Soccer%20Association!5e1!3m2!1sen!2sus!4v1766253864141!5m2!1sen!2sus"
      width={smallScreen ? "400" : "1000"}
      height="400"
      //style="border:0;"
      //allowfullscreen=""
      loading="lazy"
      // referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
export default MapsEmbed;
