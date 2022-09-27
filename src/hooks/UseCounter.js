import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";


import bgxscript from "../assets/bgxscript.jpeg";
import toirplus from "../assets/toirplus.jpeg";
import xnscript from "../assets/xnscript.jpeg";

export function useCounterProvider(){
    const [homeState, setHomeState] = useState(true); 
    const [scriptState, setScriptState] = useState('');
    const [ modalKeepBuyingState, setModalKeepBuyingState ] = useState(false);
    const [ modalSelectPriceState, setModalSelectPriceState ] = useState(false);
    const [ descontoOn, setDescontoOn ] = useState({
      ativo: false,
      text: "Desconto Off"
    });
    const [ pagamentoLinks, setPagamentoLinks ] = useState({});
    const [ linkOn, setLinkOn ] = useState(false);
    const [ priceOn, setPriceOn ] = useState({
      price1: false,
      price2: false,
    });
    const [ buttonLinkPix, setButtonLinkPix ] = useState('Gerar Link Mercado Pago'); 

    const handleHomeState = () => {
        setHomeState(!homeState);
        setScriptState('');
        setPriceOn({})
        }
      const handleScriptState = (script) => {
        setScriptState(script);
        setHomeState(!homeState);
      }
      const handleDescontoOn = (paymentType) => {
        if( paymentType === 'cartao' ){
            setDescontoOn({
            ativo: false,
            text:  "Desconto Off"
          })
          setLinkOn(false)
          setButtonLinkPix('Gerar Link Mercado Pago')
          return
        }
        else{
          setLinkOn(false)
          setButtonLinkPix('Gerar QR Code Pix')
           setDescontoOn({
            ativo: true,
            text: "Desconto On"
          })
          return
        }
      }
        const handlePagamentoLinks = (links) => {  
            setPagamentoLinks(links);
        }
        const handleLinkOn = (priceOn) => {
          if ( !priceOn.price1 && !priceOn.price2 ) {
            setModalSelectPriceState(true);
            setTimeout(() => { setModalSelectPriceState(false) }, 2000);
            return
          }
            setLinkOn(true);
            setButtonLinkPix('Link Gerado!')
        }
        const handlePriceOn = (option, descontoOn) => {
          
          if (  option === 1){
            setPriceOn({price1: true, price2: false});
            
          }
    
          if (  option === 2){
            setPriceOn({price1: false, price2: true});
          }
          if ( descontoOn){
            setButtonLinkPix('Gerar QR Code Pix')
          }else{
            setButtonLinkPix('Gerar Link Mercado Pago')
          }
        }
        
 const games ={
  game1: {
     title: 'League of Legends',
     products: [{ img: bgxscript, name: 'bgx', prices:['105,00'],links:['https://mpago.la/1brp3rL','https://mpago.la/2WUzcqW']}, { img: toirplus, name: 'toirPlus', prices: ['65,00', '15,00'], links:['https://mpago.la/1MLKLTF','https://mpago.la/2WUzcqW']  }, { img: xnscript, name: 'xnScript', prices: ['80,00', '15,00'], links: ['https://mpago.la/1LaEAuS', ]  }, { img: bgxscript, name: 'bgx',  prices: ['80,00', '15,00'],links:['https://mpago.la/1MLKLTF','https://mpago.la/2WUzcqW']  }, { img: toirplus, name: 'bgx',  prices: ['80,00', '15,00'], links:['https://mpago.la/1MLKLTF','https://mpago.la/2WUzcqW'] }],
   }
}


      return {
        homeState,
        scriptState,
        handleHomeState,
        handleScriptState,
        modalKeepBuyingState,
        setModalKeepBuyingState,
        descontoOn,
        handleDescontoOn,
        pagamentoLinks,
        handlePagamentoLinks,
        linkOn,
        handleLinkOn,
        priceOn,
        handlePriceOn,
        modalSelectPriceState,
        buttonLinkPix,
        games
      }
} 

export function useCounter(){
    return useContext(UserContext)
}