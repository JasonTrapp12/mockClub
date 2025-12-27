import { Box, Typography } from "@mui/material";

export interface IPartner {
  image: string;
  caption?: string;
  url?: string;
}

const PartnerTile = (partner: IPartner) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 250,
        height: 250,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 2,
        flexDirection: "column",
        p: 2,
        gap: 1,
      }}
    >
      <Box
        component="img"
        src={partner.image}
        alt={partner.caption}
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
      <Typography variant="h6">{partner.caption}</Typography>
    </Box>
  );
};
export default PartnerTile;
