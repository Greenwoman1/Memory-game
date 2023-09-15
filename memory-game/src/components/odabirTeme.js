import React, { useEffect, useState } from "react";
import Polja from "./polja";
import { biblioteka } from "../Data/data";

import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
const OdabirTeme = ({ username, setOdabirVisible }) => {
  const [slike, setSlike] = useState([]);
  const [temeVisible, setTemeVisible] = useState(true);
  const [dim, setDim] = useState(0);
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [polja, setPolja] = useState(false);
  const [tema, setTema] = useState("");
  const user = username;

  const shuffleArray = (array) => {
    console.log(array);
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const odaberiTemu = (tema) => {
    setTema(tema);

    setTemeVisible(false);
    setButtonsVisible(false);
  };

  const odaberiDim = (num) => {
    const slikeZaTemu = biblioteka[`${tema}${num}`];
    const shuffledSlike = shuffleArray(slikeZaTemu);
    setSlike(shuffledSlike);
    setDim(num);
    setButtonsVisible(true);
    setPolja(true);
  };

  return (
    <div>
      {temeVisible && (
        <section id="odabir" className={temeVisible ? "odabir" : "hidden"}>
          <div id="teme">
            <h2>Izaberi temu!</h2>
            <p
              id="nastavnici"
              className="tema"
              onClick={() => odaberiTemu("nastavnici")}
            >
              Nastavnici
            </p>
            <p
              id="fakultet"
              className="tema"
              onClick={() => odaberiTemu("fakultet")}
            >
              Fakultet
            </p>
            <p id="razno" className="tema" onClick={() => odaberiTemu("razno")}>
              Razno
            </p>
          </div>
        </section>
      )}
      {!buttonsVisible && (
        <section id="odabir" className={!buttonsVisible ? "odabir" : "hidden"}>
          <div id="teme">
            <h2>Izaberi dimenziju!</h2>
            <p className="tema" onClick={() => odaberiDim(16)}>
              16
            </p>
            <p className="tema" onClick={() => odaberiDim(32)}>
              32
            </p>
          </div>
        </section>
      )}
      {slike && (
        <div>
          <Polja username={user} slike={slike} dimenzija={dim}></Polja>
        </div>
      )}
    </div>
  );
};

export default OdabirTeme;
