import "./style.css";

import { useCounter } from '../../hooks/UseCounter';


export default function Card(){
    const { handleScriptState,  games } = useCounter()
    return (
    <div  id="card-main-container">
            <div id="container-titulo-cards">
                <h1 id='title1'className="shadowsIntoLight400 gold1 size60 height42">{games.game1.title}</h1>
                <h2 id='title2' className="roboto400 gold1 size32 height42" >PRODUTOS</h2>
            </div>
            <div id='cards-container'>
        {games.game1.products.map((product) => (
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
        ))}
       
          </div>
        </div>
    )
}