import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Izbornik from "../components/izbornik";

const Home = () => {
  const [username, setUsername] = useState("");
  const [sacuvano, setSacuvano] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <h1>Dobro došli u PMF memory igricu !</h1>

      {!sacuvano && (
        <div>
          <label htmlFor="username">Korisničko ime:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Unesite korisničko ime"
          />
          <button
            onClick={() => {
              setSacuvano(true);
              console.log(username);
            }}
          >
            Sačuvaj
          </button>
        </div>
      )}
      <p>Korisničko ime: {username}</p>
      <Izbornik username={username}></Izbornik>
    </div>
  );
};

export default Home;
