import { Grid, Stack } from "@mui/material";
import { useSmallScreen } from "../../hooks/useSmallScreen";
import PageBanner from "../../components/common/PageBanner";
import type { IContactUsTileProps } from "./ContactUsTile";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactUsTile from "./ContactUsTile";
import ContactForm from "./ContactForm";
import ModalContainer from "../../components/modals/SnackbarContainer";

const ContactUsTiles: IContactUsTileProps[] = [
  {
    icon: <PhoneIcon />,
    title: "Phone",
    content: "+1234567890",
    link: "tel:+1234567890",
  },
  {
    icon: <EmailIcon />,
    title: "Email",
    content: "contact@example.com",
    link: "mailto:contact@example.com",
  },
  {
    icon: <FacebookIcon />,
    title: "Facebook",
    content: "https://www.facebook.com/example",
    link: "https://www.facebook.com/example",
  },
  {
    icon: <InstagramIcon />,
    title: "Instagram",
    content: "@example",
    link: "https://www.instagram.com/example",
  },
];

const ContactUs = () => {
  const smallScreen = useSmallScreen();
  return (
    <Stack
      width="100%"
      height="100%"
      pt={smallScreen ? 5 : 18}
      spacing={5}
      alignItems="center"
    >
      <PageBanner title="Contact Us" />
      <Grid container spacing={2} width="95%">
        {ContactUsTiles.map((tile) => (
          <Grid size={smallScreen ? 12 : 3} key={tile.title}>
            <ContactUsTile {...tile} />
          </Grid>
        ))}
      </Grid>
      <br />
      <ContactForm />
    </Stack>
  );
};
export default ContactUs;
