import { Typography } from "@mui/material";
import React from "react";
import { toFrenchSpelling } from "../../lib/french-spelling";
import { useStore } from "../../lib/store";

function Result() {
  const value = useStore((a) => a.currentNumber);
  if (Number.isNaN(value)) {
    return (
      <Typography color="GrayText">
        <i>Invalid number</i>
      </Typography>
    );
  }
  if (!value) {
    return (
      <Typography color="GrayText">
        <i>Type a number...</i>
      </Typography>
    );
  }
  const frenchNumber = toFrenchSpelling(value);
  return (
    <>
      <Typography>Result is</Typography>
      <Typography variant="h2">{frenchNumber}</Typography>
    </>
  );
}

export default Result;
