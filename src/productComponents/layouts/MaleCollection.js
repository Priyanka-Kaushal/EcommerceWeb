import { Box, Typography } from "@mui/material";
import React from "react";
import BoysOrganicCollection from "./BoysOrganicCollection";
import BoysCollection from "../../assets/data/Boys";
import { useContext } from "react";
import TitleContext from "../productContext";

const MaleCollection = () => {
  const { titles } = useContext(TitleContext);
  return (
    <>
      <Box
        sx={{
          background: "#F5F5F5",
          width: "100%",
          height: "50px",
        }}
      >
        <Typography variant="h4" sx={{ ml: 2 }}>
          {/* Boys Collection  */}
          {titles.boysCollectionTitle}
        </Typography>

        <BoysOrganicCollection BoysCollection={BoysCollection} />
      </Box>
    </>
  );
};

export default MaleCollection;
