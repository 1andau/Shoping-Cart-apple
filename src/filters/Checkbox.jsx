import React from 'react'
import { ToggleButtonGroup } from '@material-ui/lab';
import { ToggleButton } from '@material-ui/lab';

const Checkbox = ({ options, value, selectToggle }) => {
  return (
   <ToggleButtonGroup
      value={value}
      exclusive
      onChange={selectToggle}
    >
      {options.map(({ label, id, value }) => (
        <ToggleButton key={id} value={value}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export default Checkbox