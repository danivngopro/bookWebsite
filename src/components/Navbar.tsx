import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoToContactUs = () => {
    navigate("/ContactUs");
  };

  const handleGoToAbout = () => {
    navigate("/About");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ minWidth: 293 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Button
              color="inherit"
              sx={{ mr: 2, fontSize: "1rem" }}
              onClick={handleGoToContactUs}
            >
              {t("contactUs")}
            </Button>
            <Button
              color="inherit"
              sx={{ mr: 2, fontSize: "1rem" }}
              onClick={handleGoToAbout}
            >
              {t("about")}
            </Button>
          </Box>
          <Button
            color="inherit"
            sx={{ mr: 2, fontSize: "2rem" }}
            onClick={handleGoHome}
          >
            {t("books")}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
