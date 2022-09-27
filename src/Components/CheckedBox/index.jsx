import './style.css'

import { useCounter} from '../../hooks/UseCounter';

import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function ControlledCheckbox() {
  const { descontoOn} = useCounter();

  return (
    <Checkbox
    style={{color: 'green', cursor: 'default'}}
      checked={descontoOn.ativo}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
