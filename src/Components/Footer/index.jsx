import './style.css'

import iconDiscord from '../../assets/icon-discord.png'
import iconWhatsapp from '../../assets/whatsapp-icon.png'

export default function Example (){
    return (
        <div>
            <div id='main-container-footer'>
                <div><span className='roboto400 white size22 height25'>ATENDIMENTO AO CLIENTE</span></div>
                
                <div>
                    <a target={'_blank'}
                    id='container-discord-footer' href="https://discord.gg/hb4wXYkBYk">
                        <img src={iconDiscord} alt="icon-discord" id='icon-discord' />
                        <span className='white size22 pointer roboto400'> Discord </span>
                    </a>
                </div>
                <div>
                    <a target={'_blank'}
                    id='container-whatsapp-footer' href="https://wa.me/message/BBMI4JNK2Y5TC1">
                        <img src={iconWhatsapp} alt="icon-whatsapp" id='icon-whatsapp' />
                        <span className='white size22 pointer roboto400'>(61) 9 9918 4644</span>
                    </a>
                </div>
                <div><span id='cdscript-store-footer' className='bungeeSpice400 size40'>CDSCRIPT STORE</span></div>
            </div>
        </div>
    )
}