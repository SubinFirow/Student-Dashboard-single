"use client";

import React, { useState } from "react";
import StudentGrid from "./components/StudentGrid";
import { Box, Paper, styled } from "@mui/material";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1E1E1E",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#FAF9F6",
  borderRadius: "18px",
}));

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StudentGrid />
    </Box>
  );
};

export default HomePage;
