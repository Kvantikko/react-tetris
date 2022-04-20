# Pelin webosoite

https://utu-mike-react-tetris.herokuapp.com/

# React Tetris

React Tetris on MERN stackin teknologioihin perustuva web-peli. MERN Stackilla tarkoitetaan
webteknologioita: MongoDB, Express.js, React ja Node.js (huom. kirjoitushetkellä MongoDB:n
käyttö on vielä epävarmaa, sillä projektin aikaraja alkaa tulla vastaan). Peli isännöidään
Herokun serverillä osoitteessa: https://utu-mike-react-tetris.herokuapp.com/

Node.js on avoimen lähdekoodin alustariippumaton ajoympäristö JavaScript-koodin
suorittamiseen palvelimella. Node.js edustaa "JavaScript kaikkialla" -paradigmaa, joka 
yhdistää verkkosovelluskehityksen yhden ohjelmointikielen ympärille (JavaScript) sen sijaan,
että palvelinpuolella ja asiakaspuolella käytettäisiin eri ohjelmointikieliä.
https://nodejs.org/en/about/

Express.js on palvelinkehys Node.js:lle. Se on suunniteltu verkkosovellusten ja API:iden
rakentamiseen. Express on nykyisin käytännössä Node.js:ssän de facto palvelinkehys.
https://expressjs.com/

MongoDB on tietokantapalvelu, johon peli tallettaa pelaajan pisteet. Pelin osoitteeseen
mentäessä sovellus hakee pisteet tietokannasta ja näyttää ne käyttäjälle
(tämä siis jos aikaraja ei tule vastaan, muutoin pisteet talletetaan vain pelin serverille,
jollloin ne häviävät aina kun severi käynnistyy uudestaan).
https://www.mongodb.com/


React on ilmainen ja avoimen lähdekoodin käyttöliittymän JavaScript-kirjasto 
käyttöliittymäkomponentteihin perustuvien käyttöliittymien rakentamiseen. Sitä ylläpitävät
Meta ja yksittäisten kehittäjien ja yritysten yhteisö.
https://reactjs.org/


# Pelin pelaaminen

Mentäessä sovelluksen osoitteeseen, paineteaan
"Play Tetris" -nappia, jolloin peli alkaa. Pelin aikana peli reagoi seuraaviin 
näppäimistön painikkeisiin:

Q - lopettaa pelin
P - pistää pelin pauselle/pauselta pois
Nuoli ylös - kääntää tetrispalikkaa myötäpäivään
Nuoli alas - vie tetris palikkaa alaspäin
Nuoli oikealle - vie tetrispalikkaa oikealle
Nuoli vasemmalle - vie tetrispalikkaa vasemmalle

Tetris on hyvin suosittu peli, mutta mikäli se ei ole tuttu, niin kerrataan pelin kulku.
Pelin tarkoitus on asetella tippuvat tetrispalikat niin, että yksi tai useampi rivi on
täynnä tetris palikoita. Kun tämä tapahtuu, niin rivi poistuu ja pelaaja saa pisteitä.
Jos päädytään tilanteesee, jossa jo sijoitetut tetrispalikat saavuttavat peliruudun yläosan,
niin peli päättyy.

Pelin päätyttyä pelaaja voi tallentaa saamansa pisteet antamalla nimimerkin. Tämä ei ole
pakollista. Parhaimmat talletetut pisteet näytetään pelin alkuruudussa.


# Testaus

Testauksesta


# CI/CD

Github actions