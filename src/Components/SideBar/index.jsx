import './style.css'
import { useContext } from 'react'

import { UserContext } from "../../context/UserContext"

import lolIcon from '../../assets/lol-icon-sidebar.png';
import valorantIcon from '../../assets/valorant-icon-sidebar.jpg';
import gtaVIcon from '../../assets/gta5-icon-sidebar.png'


export default function SideBar() {
    const { handleHomeState, homeState, setModalKeepBuyingState, modalKeepBuyingState } = useContext(UserContext)

    const goToBuyPage = (home) => {
        if (home) {
            setModalKeepBuyingState(true)
            return setTimeout(()=>{
                setModalKeepBuyingState(false)
            },2000)
        }
        else
            handleHomeState(true)
    }

    const icons = [{ src: lolIcon, ativo: true, name: 'bgx' }, { src: valorantIcon, ativo: false, name: 'toirPlis' }, { src: gtaVIcon, ativo: false, name: 'xnScript' }]

    return (
        <div id='side-bar-main-container'>
            <h1 className='shadowsIntoLight400 size80 gold2' id='sidebar-title'>JOGOS</h1>
            <div id='sidebar-icons-container'>
                {icons.map((icon) => (
                    <div id='sidebar-icon-container'>
                        <img src={icon.src} key={icon.src} className={!icon.ativo  ? 'margin-left-30' : 'pointer transform-icon'}
                            onClick={() => icon.ativo ? goToBuyPage(homeState) : ''}
                        ></img>
                        {icon.ativo !== true && <p id= 'em-breve-title' className='roboto400 size60 '>EM BREVE</p>}
                    </div>
                ))}
                    { modalKeepBuyingState && <div id="modal-keep-buying" className='center'>Escolha um produto!</div>}
            </div>
           
        </div>
    )
}