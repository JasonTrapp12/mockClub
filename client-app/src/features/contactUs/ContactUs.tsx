import { Stack, Typography, useTheme } from "@mui/material";
import { useSmallScreen } from "../../hooks/useSmallScreen";
import PageBanner from "../../components/common/PageBanner";

const ContactUs = () => {
  const theme = useTheme();
  const smallScreen = useSmallScreen();
  return (
    <Stack
      width="100%"
      height="100%"
      pt={smallScreen ? 10 : 18}
      spacing={5}
      alignItems="center"
    >
      <PageBanner title="Contact Us" />
      <Typography
        variant="h6"
        sx={{ textAlign: "center", px: 2 }}
        color={theme.palette.text.primary}
        width={smallScreen ? "90%" : "60%"}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
        erat ut purus venenatis posuere. Sed vitae turpis nec erat scelerisque
        fermentum. Morbi malesuada, justo vel pretium cursus, lectus urna
        dapibus libero, nec facilisis nunc purus non sapien. Curabitur at tempor
        enim. Proin ac nisi id lectus facilisis suscipit sit amet at lacus.
        Donec blandit, orci ac efficitur ultrices, nunc nisl hendrerit lectus,
        at laoreet ligula neque vitae libero. Phasellus in magna ut risus
        suscipit tempor. Etiam sit amet lectus at sapien fermentum efficitur.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Integer id sapien sed nisl eleifend feugiat. Nulla
        facilisi. Vivamus pharetra odio a nunc sodales, sed tincidunt nisl
        ornare. Aliquam erat volutpat. Sed feugiat risus et enim sollicitudin,
        nec fermentum sapien feugiat. Donec at justo in sem vehicula convallis.
        Sed ut erat sed odio scelerisque faucibus. Suspendisse potenti. Nullam
        ac sapien a nulla interdum scelerisque. Curabitur tempus magna ac ligula
        vehicula, et euismod ex mattis. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Maecenas eget
        felis id justo scelerisque eleifend. Proin vulputate convallis purus, ut
        tincidunt ligula laoreet ac. Ut dapibus, lacus non facilisis
        scelerisque, felis odio venenatis lectus, ut varius leo sem a lorem.
        Nunc nec volutpat sem. Duis posuere augue a erat mattis, vitae
        vestibulum nisl efficitur. Sed at tortor vitae sapien commodo cursus.
        Nam in magna sed purus imperdiet tincidunt. Etiam a massa ut erat congue
        aliquet. In semper leo non metus sagittis, a fringilla risus venenatis.
        Sed vitae est a enim feugiat ultrices non id libero. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Quisque in convallis erat. Sed bibendum urna eu risus
        fermentum, nec blandit arcu cursus. Vivamus sed orci at est imperdiet
        finibus. Donec eget eros nec velit gravida efficitur non nec arcu.
        Suspendisse potenti. Pellentesque eu elit a purus tempus tempor. Donec a
        orci a felis efficitur vestibulum. Nulla facilisi. Integer tristique
        enim ac tincidunt laoreet. Duis mattis tellus nec lorem fermentum, sed
        fermentum nisi blandit. Praesent in lectus eget eros malesuada
        tincidunt. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Curabitur suscipit lectus ut leo
        convallis, et sodales ligula facilisis. Aenean id lorem sed elit
        tristique varius non a sapien.
      </Typography>
    </Stack>
  );
};
export default ContactUs;
