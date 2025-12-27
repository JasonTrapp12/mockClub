import { useSmallScreen } from "../../hooks/useSmallScreen";

const MapsEmbed = () => {
  const smallScreen = useSmallScreen();
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8736.302842691712!2d-74.18567463585309!3d39.98446095144032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19d4165b163e1%3A0xfffe7884086877c8!2sBey%20Lea%20Soccer%20Complex!5e1!3m2!1sen!2sus!4v1766866580115!5m2!1sen!2sus"
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
