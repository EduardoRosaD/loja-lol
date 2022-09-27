import './style.css';

import CardCreditPix from '../CardCreditPix';
import Checkbox from '../CheckedBox';

import { useCounter } from '../../hooks/UseCounter';

import iconCartao from '../../assets/icon-cartao.png';
import iconDiscord from '../../assets/icon-discord.png';
import iconPix from '../../assets/icon-pix.png';
import iconWhatsapp from '../../assets/whatsapp-icon.png';

export default function CardCompra() {
    const { scriptState, descontoOn, handleDescontoOn, handleLinkOn, linkOn, priceOn, handlePriceOn, modalSelectPriceState, buttonLinkPix } = useCounter()

    return (
        <div id='card-compra-main-container' >
            <div id='container-text-information'>
                <h2 id='title-text-information' className='shadowsIntoLight400 red size60 height42'>INFORMAÇÕES IMPORTANTES!</h2>

                <p id='text-information-one' className='roboto400 red size22 height25 '><strong>Depois de efetuar o pagamento via Pix ou cartão de crédito, você deverá nos enviar o comprovante de pagamento pelo Discord ou Whatsapp. Você receberá seu script, pelo mesmo canal, em até 10 minutos depois que o comprovante for enviado.</strong></p>
                <div id='container-instructions'>
                    <p className='roboto400 grey size22 height25 '><strong>Passo 1:</strong> Escolha quantos dias de script você vai comprar.</p>
                    <p className='roboto400 grey size22 height25 '><strong>Passo 2:</strong> Escolha a forma de pagamento.</p>
                    <p className='roboto400 grey size22 height25 '><strong>Passo 3:</strong> Ao selecionar a opção de <strong>quantidade de dias</strong> e a<strong> forma de pagamento</strong> você receberá um QR CODE para pagamentos via PIX. Para pagamentos com cartão de crédito você receberá um link que vai te redirecionar para a página de pagamentos do Mercado Pago, conclua o pagamento por lá.</p>
                    <p className='roboto400 grey size22 height25 '><strong>Passo 4:</strong> Envie o <strong>comprovante de pagamento</strong> para nossos canais  <div id='container-link-discord'>
                        <a target={'_blank'} rel="noreferrer"
                        className='link-information'
                        href="https://discord.gg/hb4wXYkBYk">
                            <img src={iconDiscord} alt="icon-discord" id='icon-discord' />
                            <span className='white size19 pointer roboto400'>Discord</span></a>
                    </div> ou  <div id='container-link-wpp'>
                    <a target={'_blank'} rel="noreferrer"
                    className='link-information'
                    href="https://wa.me/message/BBMI4JNK2Y5TC1">
                        <img src={iconWhatsapp} alt="icon-whatsapp" id='icon-whatsapp' />
                        <span className='white size19 pointer roboto400'>WhatsApp</span>
                    </a>
                </div> e você receberá seu produto em até <strong>15 minutos</strong> pela platarforma que escolher.</p>
                </div>
            </div>
          { scriptState!== '' && <div id="card-compra-conteudo-container">
                <div>
                   <div id='card-compra-container1'>
                   { !linkOn ?
                        <div>
                            <img id='image-compra-card' src={scriptState.img} alt='scriptImg'></img>
                            <p className='roboto400 gold1 size22 height25 center'>Esse script usa hwid spoof incluso para driblar banimentos. </p>
                          
                        </div>  : <CardCreditPix/>}
                        <div>
                            <div className="video-responsive">
                                <iframe width="100%" height="400" src="https://www.youtube.com/embed/4Gu-MNPZvU8" title="KALISTA GAMEPLAY (SCRIPT) (FUNCIONANDO) PATCH 12.18" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                                    id='video-responsive'
                                ></iframe>
                            </div>
                            <p className='roboto400 gold1 size22 height25'>O vídeo acima mostra o script funcionando durante uma partida normal.</p>
                        </div>
                    </div>
                </div>
                <div id='card-compra-container2'>
                    <div >
                        <h3 className='shadowsIntoLight400 gold1 size60 height42'>1. Escolha uma opção</h3>
                        {scriptState.prices.length < 2 ? <button className={ !priceOn.price1 ?"priceUnselected roboto400  size32 height42 white2" : "priceSelected roboto400  size32 height42 " }
                        onClick={() => handlePriceOn(1,descontoOn.ativo)}
                        >30 Dias: R$ {!descontoOn.ativo ? scriptState.prices[0] : parseFloat(scriptState.prices[0]) - 30 + ",00"} </button> : <div id='container-compra-buttons'><button
                        onClick={() => handlePriceOn(1,descontoOn.ativo)}  className={ !priceOn.price1 ?"priceUnselected roboto400 gold1 size32 height42" : "priceSelected roboto400 gold1 size32 height42 " } >1 Dia: R$ {!descontoOn.ativo ? scriptState.prices[1] : parseFloat(scriptState.prices[1]) - 5 + ",00"} </button><button  className={ !priceOn.price2 ?"priceUnselected roboto400 gold1 size32 height42" : "priceSelected roboto400 gold1 size32 height42 " }
                        onClick={() => handlePriceOn(2,descontoOn.ativo)}
                        >30 Dias: R$ {!descontoOn.ativo ? scriptState.prices[0] : parseFloat(scriptState.prices[0]) - 30 + ",00"}</button></div>}
                        <div className={descontoOn.ativo ? "desconto-controladorOn roboto400 desconto" : "desconto-controladorOff roboto400 desconto"}><div><span>{descontoOn.text}</span><Checkbox></Checkbox></div>
                        </div>
                    </div>
                    <div>
                        <h3 id='container-two-title-two' className='shadowsIntoLight400 gold1 size60 height42'>2. Escolha a forma de pagamento</h3>
                        <div id='payment-forms-container'>
                            <div id='image-payment-container'>
                                <button
                                onClick={() => handleDescontoOn()}
                                className={descontoOn.ativo ? 'paymentTypeSelected' : 'paymentTypeUnselected'}
                                >
                                    <img id="container-two-image-pix" src={iconPix} alt="icon-pix" />
                                </button>
                                <button
                                  onClick={() => handleDescontoOn('cartao')}
                                  className={!descontoOn.ativo ? 'paymentTypeSelected' : 'paymentTypeUnselected'}
                                >
                                    <img id='container-two-image-cartao' src={iconCartao} alt="icon-cartao" />
                                </button>
                            </div>
                            <div id='text-payment-forms-container'>
                                <div>
                                    <p className='roboto400 gold1 size22 height25'><strong>Opção 1:</strong> Ao selecionar esta forma de pagamento é gerado um QRCODE e uma chave PIX, aponte a camera do seu celular com o aplicativo bankline para realizar o pagamento. Depois é só enviar o comprovante! Você receberá seu script, pelo mesmo canal, em até 10 minutos depois que o comprovante for enviado.</p>
                                </div>
                                <div>
                                    <p className='roboto400 gold1 size22 height25'><strong>Opção 2:</strong> Ao selecionar esta forma de pagamento é gerado um link, você deverá clicar no link e ser redirecionado para a página de pagamentos do Mercado Pago. Conclua o pagamento por lá.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                  <buton  id= 'qrcode-button'
                            className="pointer publicSans400 letterSpace2 height14 size12 center "
                            onClick={() => handleLinkOn(priceOn)}
                        >{buttonLinkPix}</buton> 

                </div>
                {modalSelectPriceState && <p id='modal-keepbuying'><strong>Selecione uma opção!</strong></p>}
            </div>
          
            }
        </div>
    )
}