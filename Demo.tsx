import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels() {
  return (
    <FormGroup
      sx={{
        m: 2,
      }}
    >
      <FormControlLabel
        control={
          <Switch
            defaultChecked
            sx={{
              zoom: 10,
              width: 26,
              height: 16,
              p: 0,
              border: '2px solid #FFC202',
              borderRadius: 7,
              transform: 'rotate(-90deg)',

              '.MuiButtonBase-root': {
                p: '1px',

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
