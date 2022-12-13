import { Box, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Copyright() {
  const { t } = useTranslation();

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://books.sharpervn.com/">
        {t("copyRightJasmin")}
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        {t("copyRight")}
      </Typography>
      <Copyright />
    </Box>
  );
}
