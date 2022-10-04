import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";


import bgxscript from "../assets/bgxscript.jpeg";
import toirplus from "../assets/toirplus.jpeg";
import xnscript from "../assets/xnscript.jpeg";


import qrCode15 from "../assets/qrcode-pix-15.png";
import qrCode65 from "../assets/qrcode-pix-65.png";
import qrCode80 from "../assets/qrcode-pix-80.png";
import qrCode105 from "../assets/qrcode-pix-105.png";

export function useCounterProvider(){
    const [homeState, setHomeState] = useState(true); 
    const [scriptState, setScriptState] = useState('');
    const [ modalKeepBuyingState, setModalKeepBuyingState ] = useState(false);
    const [ modalSelectPriceState, setModalSelectPriceState ] = useState(false);
    const [ descontoOn, setDescontoOn ] = useState({
      ativo: false,
      text: "Desconto Off"
    });
    const [ linkOn, setLinkOn ] = useState(false);
    const [ priceOn, setPriceOn ] = useState({
      price1: false,
      price2: false,
    });
    const [ buttonLinkPix, setButtonLinkPix ] = useState('Gerar Link'); 

    const handleHomeState = () => {
        setHomeState(!homeState);
        setScriptState('');
        setPriceOn({})
        }
      const handleScriptState = (script) => {
        setScriptState(script)
        setHomeState(!homeState);
      }
      const handleDescontoOn = (paymentType) => {
        setButtonLinkPix('Gerar Link')
        setPriceOn({
          price1: false,
          price2: false,
        })
        if( paymentType === 'cartao' ){
            setDescontoOn({
            ativo: false,
            text:  "Desconto Off"
          })
          setLinkOn(false)
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
            setButtonLinkPix('Gerar Link ')
          }
        }
        const turnLinkOff = () => {
          setLinkOn(false)
        }

       
 const games ={
  game1: {
     title: 'League of Legends',
     products: [{ img: bgxscript, name: 'bgx', prices:['115,00'],links:['https://pag.ae/7YHZf6NS8','https://pag.ae/7YHZf6NS8'],qrCode1:[qrCode105, '00020126360014BR.GOV.BCB.PIX0114+55619828476225204000053039865406105.005802BR5920Pedro Rosa Domingues6008Brasilia62070503***63049626'],qrCode2:[qrCode105, '00020126360014BR.GOV.BCB.PIX0114+55619828476225204000053039865406105.005802BR5920Pedro Rosa Domingues6008Brasilia62070503***63049626']}, { img: toirplus, name: 'toirPlus', prices: ['72,00', '20,00'], links:['https://pag.ae/7YHZeNEb7','https://pag.ae/7YHZemvCL'],qrCode1:[qrCode65, '00020126360014BR.GOV.BCB.PIX0114+5561982847622520400005303986540565.005802BR5920Pedro Rosa Domingues6008Brasilia62070503***63044BA0'],qrCode2:[qrCode15, '00020126360014BR.GOV.BCB.PIX0114+5561982847622520400005303986540515.005802BR5920Pedro Rosa Domingues6008Brasilia62070503***63043895']  }, { img: xnscript, name: 'xnScript', prices: ['88,00', '18,00'], links: ['https://pag.ae/7YHZdY868','https://pag.ae/7YHZdA--q' ],qrCode1:[qrCode80, '00020126360014BR.GOV.BCB.PIX0114+5561982847622520400005303986540580.005802BR5920Pedro Rosa Domingues6008Brasilia62070503***6304829B'],qrCode2:[qrCode15, '00020126360014BR.GOV.BCB.PIX0114+5561982847622520400005303986540515.005802BR5920Pedro Rosa Domingues6008Brasilia62070503***63043895']   }, { img: bgxscript, name: 'bgx', prices:['115,00'],links:['https://pag.ae/7YHZf6NS8','https://pag.ae/7YHZf6NS8'],qrCode1:[qrCode105, '00020126360014BR.GOV.BCB.PIX0114+55619828476225204000053039865406105.005802BR5920Pedro Rosa Domingues6008Brasilia62070503***63049626'],qrCode2:[qrCode105, '00020126360014BR.GOV.BCB.PIX0114+55619828476225204000053039865406105.005802BR5920Pedro Rosa Domingues6008Brasilia62070503***63049626']}],
   }
}


      return {
        setScriptState,
        homeState,
        scriptState,
        handleHomeState,
        handleScriptState,
        modalKeepBuyingState,
        setModalKeepBuyingState,
        descontoOn,
        handleDescontoOn,
        linkOn,
        handleLinkOn,
        priceOn,
        handlePriceOn,
        modalSelectPriceState,
        buttonLinkPix,
        games,
        turnLinkOff
      }
} 

export function useCounter(){
    return useContext(UserContext)
}