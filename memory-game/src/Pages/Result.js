import axios from "axios";
import { useState, useEffect } from "react";

const Result = ({ username, pogodjeniParovi, time, cat }) => {
  const [result, setResults] = useState([]);

  const category = cat;

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/result/get_all_result/${category}/`)
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => {
        console.error("Greška prilikom dohvaćanja rezultata:", error);
      });
  }, [category]);

  return (
    <div>
      <div>
        <h2>Rezultati za kategoriju {category}</h2>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Broj sekundi</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.username}</td>
                <td>{result.seconds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1>pobijedili ste u vremenu od {time} sekundi </h1>
    </div>
  );
};

export default Result;
