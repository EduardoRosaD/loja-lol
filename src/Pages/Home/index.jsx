import '../../fonts.css';
import './style.css';

import { useCounter } from '../../hooks/UseCounter';

import Cards from '../../Components/Card';
import CardCompra from '../../Components/CardCompra';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import SideBar from '../../Components/SideBar';

function Home() {
  const { homeState } = useCounter();

  

  return (
    <>  
      <div id="main-container">
        <Header />
       <div id="home-container">
        <SideBar />
        {homeState ? <Cards /> : <CardCompra />}
      </div>
      <Footer />
     </div> 
    </>

  );
}

export default Home;
