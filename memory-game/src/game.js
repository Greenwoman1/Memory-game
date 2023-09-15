var mainElt = document.querySelector(".main");
var slika1 = ""; // koristimo za spremanje odarane slike u varijable za provjeru identiteta
var slika2 = "";
var click = -1;
var pogodjeniParovi = 0;
var brojPoteza = 0;
var time = 0;
var prikaziKraj = document.querySelector("#prikaziKraj");
var krajElt = document.querySelector("#igraZavrsena");
mainElt.addEventListener("click", logika);
var timer;
function logika(e) {
  //pomocu play rsimo provjeru da li je polje pogodjeno
  //ako je pogodjeno uklanjamo play
  //sa click se osiguravamo da ce samo biti 2 klika u potezu
  if (e.target.classList.contains("play")) {
    e.target.firstChild.classList.remove("hidden");
    if (click < 1) {
      slika1 = e.target;
      if (click === -1) {
        // pocinje odbrojavati vrijeme i ne prestaje dok se ne zavrsi igra
        timer = setInterval(function () {
          time++;
        }, 1000);
      }
      click = 1;
    } // ako je drugi klik provjerava identitet
    else if (e.target !== slika1) {
      slika2 = e.target;

      if (slika1.firstChild.src !== slika2.firstChild.src) {
        // uklanja klik sa mainELt i zatim ga ponovo dodaje nakon 400 ms, tad se opet sakriju slike
        mainElt.removeEventListener("click", logika);
        setTimeout(function () {
          slika1.firstChild.classList.add("hidden");
          slika2.firstChild.classList.add("hidden");
          mainElt.addEventListener("click", logika);
        }, 400);
        if (brojPoteza > 0) {
          brojPoteza += 2;
        }
      } else {
        brojPoteza += 2;
        pogodjeniParovi += 2;
        slika1.classList.remove("play");
        slika2.classList.remove("play");
        if (pogodjeniParovi === 16) {
          clearInterval(timer);
          krajElt.innerHTML =
            "Završili ste igru u " +
            brojPoteza +
            " poteza i " +
            time +
            " sekundi ! ";
          prikaziKraj.classList.remove("hidden");
        }
      }
      click = 0;
    }
  }
}
