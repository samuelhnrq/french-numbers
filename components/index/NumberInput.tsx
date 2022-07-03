import { TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useStore } from "../../lib/store";

function NumberInput() {
  const [text, setText] = useState("");
  const updateNumber = useStore((x) => x.updateNumber);
  const newInput = useCallback(
    (ev: React.KeyboardEvent<HTMLInputElement>) => {
      const element = ev.target as HTMLInputElement;
      setText(element.value);
      updateNumber(element.value);
    },
    [updateNumber]
  );
  return (
    <>
      <TextField
        label="Cardinal number"
        variant="filled"
        value={text}
        onInput={newInput}
      />
    </>
  );
}

export default NumberInput;
