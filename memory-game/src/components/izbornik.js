import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import OdabirTeme from './odabirTeme';


const Izbornik = ({username}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [odabirVisible, setOdabirVisible] = useState(false);
  const [uputeVisible, setUputeVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
    const user = username;
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const nova = () => {
    setMenuVisible(false);
    setOdabirVisible(true);
  };

  const upute = () => {
    setMenuVisible(false);
    setUputeVisible(true);
  };

  const sakrijupute = () => {
    setUputeVisible(false);
  };

  const oprojektu = () => {
    setMenuVisible(false);
    setInfoVisible(true);
  };

  return (
    <div className="col-md-2">

        
      <section style={{ paddingTop: '100px' }}>
        <button onClick={toggleMenu}>Izbornik</button><br />

        <div className={`menu ${menuVisible ? '' : 'hidden'}`}>
          <button onClick={nova}>Nova igra</button><br />
          <button onClick={upute}>Upute</button><br />
        </div>
        <div className={`odabir ${odabirVisible ? '' : 'hidden'}`}>
            { odabirVisible && (
                <OdabirTeme username = {user} setOdabirVisible= {setOdabirVisible}></OdabirTeme>
            )}
          
          <button onClick={() => setOdabirVisible(false)}>Zatvori</button>
        </div>
        <div className={`upute ${uputeVisible ? '' : 'hidden'}`}>
            { uputeVisible && (
                <div  id="textUpute" >
                  <h1>Kako igrati igru ?</h1>
                  <p>
                    Igrica PMF Memory sastoji se od ploče na kojoj je poredano 2n kartica,
                    gdje je n broj različitih kartica. Svaka od n kartica sadrži neki od
                    motiva Prirodno-matematičkog fakulteta. Kartice su poredane slučajnim
                    redoslijedom. Na slikama mogu biti profesori, asistenti, učionice,
                    slike fakulteta i drugi motivi. Svaka od kartica se na ploči nalazi
                    tačno dva puta. Sve kartice su okrenute licem (slikom) prema ploči.
                    Igrač u svakom potezu bira dvije kartice, te ih okreće. Ukoliko su na
                    izabranim karticama jednaki motivi, kartice ostaju otvorene. Ukoliko
                    su motivi različiti, nakon kraćeg vremena, kartice se opet okreću
                    licem prema ploči i igrač igra novi potez. Igra završava kada igrač
                    ispravno upari (otvori) sve kartice.
                  </p>
                  <button onClick={sakrijupute}>Razumijem !</button>
                </div>
            )}
          
          <button onClick={sakrijupute}>Zatvori</button>
        </div>
        
      </section>
    </div>
  );
};

export default Izbornik;
