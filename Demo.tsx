import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels() {
  return (
    <FormGroup
      sx={{
        m: 10,
      }}
    >
      <FormControlLabel
        control={
          <Switch
            defaultChecked
            sx={{
              zoom: 15,
              width: 28,
              height: 18,
              p: 0,
              border: '2px solid #FFC202',
              borderRadius: 9,
              transform: 'rotate(-90deg)',

              '.MuiButtonBase-root': {
                p: '2px',

                '&.Mui-checked': {
                  transform: 'translateX(10px)',
                },

                '.MuiSwitch-thumb': {
                  width: 10,
                  height: 10,
                  background: 'linear-gradient(#DD5D00, #FFC202)',
                },
              },
            }}
          />
        }
        label="Label"
      />
      <FormControlLabel required control={<Switch />} label="Required" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
  );
}
