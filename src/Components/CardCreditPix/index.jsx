import { useCounter } from '../../hooks/UseCounter';
import './style.css';

import iconPagSeguro from '../../assets/icon-pagseguro.png';

export default function CardQrPix() {
  const { descontoOn, scriptState, priceOn } = useCounter();

  return (
    <div>
      {descontoOn.ativo &&
        <div className='logo-link-pix-container'>
          <h1 id='title-payment-pix' className='shadowsIntoLight400 gold1 size60 height42 goldenSoftShadow'>PAGAMENTO PIX</h1>
          <div className='payment-container'>
            <img id='qrCode-img' src={priceOn.price1 ? scriptState.qrCode2[0] : scriptState.qrCode1[0]} alt="QRCodePix" />
            <div id='infos-container'>
              
              <p className='roboto400 grey size16'><strong>Chave PIX: </strong>(61) 98284-7622</p>
              <p className='roboto400 grey size16' ><strong>Nome: </strong>Pedro Rosa Domingues</p>
              <p  className='roboto400 grey size16'><strong>Tipo de Chave: </strong>Telefone</p>
              <p className='roboto400 grey size16 '><strong>Valor: </strong>R${priceOn.price1 && scriptState.prices[1] !== undefined ? parseFloat(scriptState.prices[1]) - 3 + ',00'  : parseFloat(scriptState.prices[0]) - 5 + ',00'}</p>
              <div id='copy-paste-text'>
                <p  className='roboto400 grey size16 '><strong> Pix copia e cola</strong></p> <div className="down-pointer"></div>
              </div>
            </div>
            
          </div>
          <div id='pix-key'>
                <p className='roboto400 grey size12 height25'>{priceOn.price1 ? scriptState.qrCode2[1] : scriptState.qrCode1[1]}</p>
              </div>
        </div>
      }
      {!descontoOn.ativo && <div>
        <h1 id='title-payment-card' className='shadowsIntoLight400 gold1 size55 height60 goldenSoftShadow'>PAGAMENTO CARTÃO DE CRÉDITO</h1>
        <div className='payment-container'>
          <img alt='logoMercadoPago' src={iconPagSeguro} className='priceSelected'></img>
          <div id='text-payment-card'>
            
            <p className='roboto400 grey size16 height25'>Acesse o link abaixo para concluir o pagamento via cartão de crédito </p>

            <p className='grey size16 height25'><strong className='roboto700'>Valor: </strong>R${priceOn.price1  && scriptState.prices[1] !== undefined ? scriptState.prices[1] : scriptState.prices[0]}</p>
            <p id='link-payment-card' >
              <strong className='roboto700 grey size19 height25'>Link de pagamento<div className="right-pointer"></div> </strong><a 
                target='_' className='roboto900 gold1 size19 height25'
                href={priceOn.price1 ? scriptState.links[1] : scriptState.links[0]}>  {priceOn.price1 ? scriptState.links[1] : scriptState.links[0]}</a>
            </p>
          </div>
        </div>

      </div>
      }
    </div>
  )
}