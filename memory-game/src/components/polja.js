import React, { useState, useEffect, useRef } from "react";
import Result from "../Pages/Result";
import axios from "axios";

const Polja = ({ username, slike, dimenzija }) => {
  const [click, setClick] = useState(-1);
  const [slika1, setSlika1] = useState(null);
  const [slika2, setSlika2] = useState(null);
  const [brojPoteza, setBrojPoteza] = useState(0);
  const [time, setTime] = useState(0);
  const [prikaziKraj, setPrikaziKraj] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [pogodjeniParovi, setPogodjeniParovi] = useState(0);
  const user = username;

  const handleCardClick = (e) => {
    if (e.target.classList.contains("play")) {
      e.target.firstChild.classList.remove("hidden");

      setBrojPoteza((prevBrojPoteza) => prevBrojPoteza + 1);
      console.log(brojPoteza, pogodjeniParovi, time);

      if (click < 1) {
        setClick(1);
        setSlika1(e.target);

        if (click === -1) {
          const timer = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
          }, 1000);
          setTimerId(timer);
        }
      } else {
        setClick(0);
        setSlika2(e.target);

        if (slika1.firstChild.src !== e.target.firstChild.src) {
          setTimeout(() => {
            slika1.firstChild.classList.add("hidden");
            e.target.firstChild.classList.add("hidden");
          }, 400);
        } else {
          setPogodjeniParovi((prevPogodjeniParovi) => prevPogodjeniParovi + 2);
          slika1.classList.remove("play");
          e.target.classList.remove("play");
        }
      }
    }
  };

  useEffect(() => {
    if (pogodjeniParovi === 16) {
      clearInterval(timerId);
      saveUser();
      setPrikaziKraj(true);
    }
  }, [pogodjeniParovi, brojPoteza, time]);

  const saveUser = () => {
    const data = {
      username: username,
      category: dimenzija,
      seconds: timerId,
    };
    console.log(data);

    axios
      .post("http://127.0.0.1:8000/result/save_result/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Uspješno spremljen rezultat:", response.data);
      })
      .catch((error) => {
        console.error("Greška prilikom spremanja rezultata:", error);
      });
  };

  const dime = 16;
  const brojKolona = dime === 16 ? 4 : 8;

  return (
    <div className="col-md-10">
      <h6>{username}</h6>
      <section className="main">
        {!prikaziKraj && (
          <div className="col-md-10">
            <section className="main">
              <div className={`row bg-white pb-3 }`}>
                {slike.map((slika, index) => (
                  <div className={`col-md-${12 / brojKolona}`} key={index}>
                    <div className="polje play" onClick={handleCardClick}>
                      <img
                        src={slika}
                        alt={`Slika ${index}`}
                        className="hidden"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </section>
      {prikaziKraj && (
        <Result
          username={username}
          pogodjeniParovi={pogodjeniParovi}
          time={time}
          cat={dimenzija}
        ></Result>
      )}
    </div>
  );
};

export default Polja;
