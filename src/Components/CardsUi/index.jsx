import './style.css'

import { useCounter} from '../../hooks/UseCounter';

import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

export default function SimpleGrow() {
  const [checked, setChecked] = React.useState(false);
  const { handleScriptState, modalKeepBuyingState, games } = useCounter()

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ display: 'flex' }}>
        <div  id="card-main-container">
            <div id="container-titulo-cards">
                <h1 id='title1'className="shadowsIntoLight400 gold1 size60 height42">{games.game1.title}</h1>
                <h2 id='title2' className="roboto400 gold1 size32 height42" >PRODUTOS</h2>
            </div>
          
            <div id='cards-container'>
        {games.game1.products.map((product) => (
            <Grow in={checked}>
            <div id='card'
            key={product.name}
            >
            <img onClick={() => handleScriptState(product)} src={product.img} className="pointer" alt="product-img"/>
            <div >
                { product.prices.length > 1  ? <div id ='products-price-container'>
                    <span className='roboto400 gold1 size19 appheight25'><strong>30days:</strong> R${product.prices[0]}</span>
                    <span className='roboto400 gold1 size19 appheight25'><strong>1day:</strong> R${product.prices[1]}</span>
                </div> : <span className='roboto400 gold1 size19 appheight25'><strong>30days:</strong> R${product.prices[0]}</span>
                }
            </div>
        
            <button className="pointer publicSans400 letterSpace2 height14 size12 center btn-card"
            onClick={() => handleScriptState(product)}
            >COMPRAR</button>
            </div>
            </Grow>
        ))}
       
          </div>
          
        </div>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
 
      </Box>
    </Box>
  );
}
