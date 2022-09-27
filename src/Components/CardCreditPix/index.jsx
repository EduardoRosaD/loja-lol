import './style.css'
import { useCounter} from '../../hooks/UseCounter';

export default function CardQrPix (type){
  const { descontoOn} = useCounter();
  console.log(descontoOn)
    return (
        <div>
        {descontoOn.ativo &&
         <div className='logo-link-pix-container'>
          <img src={type.src} alt="QRCodePix" />
        <p>Qr code pix chave PIx doisuadqwuUEWEUWQHE434$#@$#$#@$</p>
        </div>
        }
        {!descontoOn.ativo  && <div>
          <img alt='logoMercadoPago'></img>
          <p>Link mercado pago</p>
        </div>
        }
      </div>
    )
}