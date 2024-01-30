import * as React from "react";
import Switch from "@mui/material/Switch";

const ControlledSwitches = React.memo(() => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  console.log(checked);
  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
});

export default ControlledSwitches;
