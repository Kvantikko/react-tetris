# Pelin verkko-soite

https://utu-mike-react-tetris.herokuapp.com/

# React Tetris

React Tetris on MERN stackin teknologioihin perustuva web-peli. MERN Stackilla tarkoitetaan
webteknologioita: MongoDB, Express.js, React ja Node.js. Peli isännöidään
Herokun serverillä yllä olevassa osoitteessa.

Node.js on avoimen lähdekoodin alustariippumaton ajoympäristö JavaScript-koodin
suorittamiseen palvelimella. Node.js edustaa "JavaScript kaikkialla" -paradigmaa, joka 
yhdistää verkkosovelluskehityksen yhden ohjelmointikielen ympärille (JavaScript) sen sijaan,
että palvelinpuolella ja asiakaspuolella käytettäisiin eri ohjelmointikieliä. Node.js
muodostaa pelin backendin yhdessä Express kehyksen kanssa.
https://nodejs.org/en/about/

Express.js on palvelinkehys Node.js:lle. Se on suunniteltu verkkosovellusten ja API:en
rakentamiseen. Express on nykyisin käytännössä Node.js:ssän de facto palvelinkehys. Express
hoitaa pelissä pistetaulukon datan noutamisen Mongon tietokannasta ja tarjoaa sen
frontendille. Samoin se vastaanottaa dataa frontendiltä ja tallettaa sen Mongoon.
https://expressjs.com/

MongoDB on tietokantapalvelu, johon peli backend tallettaa pelaajan pisteet. Pelin
osoitteeseen mentäessä sovellus hakee pisteet tietokannasta ja näyttää ne käyttäjälle.
MongoDB on niin sanottu NoSQL-tietokanta, eli se ei ole relaatiotietokanta, vaan tässä
tapauksessa dokumenttitietokanta. Dokumenttitietokanta voidaan nähdä helppokäyttöisempänä
kuin relaatiotietokanta.
https://www.mongodb.com/

React on ilmainen avoimen lähdekoodin JavaScript-kirjasto käyttöliittymäkomponentteihin
perustuvien käyttöliittymien rakentamiseen. Sitä ylläpitävät Meta ja yksittäisten
kehittäjien ja yritysten yhteisö. React on nykyisin yksi yleisimmistä JavaScript kehyksistä
webmaailmassa. Sen suosiota selittää muun muassa virtuaalinen DOM, joka tekee isosta
sovelluksesta nopeamman.
https://reactjs.org/


# Pelin pelaaminen

Mentäessä sovelluksen osoitteeseen, painetaan
"Play Tetris" -nappia, jolloin peli alkaa. Pelin aikana peli reagoi seuraaviin 
näppäimistön painikkeisiin:

Q - lopettaa pelin\
P - pistää pelin pauselle/pauselta pois\
Nuoli ylös - kääntää tetris-palikkaa myötäpäivään\
Nuoli alas - vie tetrispalikkaa alaspäin\
Nuoli oikealle - vie tetris-palikkaa oikealle\
Nuoli vasemmalle - vie tetris-palikkaa vasemmalle

Tetris on hyvin suosittu peli, mutta mikäli se ei ole tuttu, niin kerrataan pelin kulku.
Pelin tarkoitus on asetella tippuvat tetris-palikat niin, että yksi tai useampi rivi on
täynnä tetris-palikoita. Kun tämä tapahtuu, niin rivi poistuu ja pelaaja saa pisteitä.
Jos päädytään tilanteeseen, jossa jo sijoitetut tetris-palikat saavuttavat peliruudun yläosan,
niin peli päättyy.

Pelin päätyttyä pelaaja voi tallentaa saamansa pisteet antamalla nimimerkin. Tämä ei ole
pakollista. Parhaimmat talletetut pisteet näytetään pelin alkuruudussa.


# Testaus

Sovelluksen React-komponentteja testataan Jest ja React Testing Library -kirjastoilla.
Testit on sijoitettu Create React App:lla konfiguroitujen sovellusten konvention mukaisesti
samaan kansioon missä itse React-komponentit ovat. Testit ovat siis kansiossa components, ja 
niitä voi ajaa komennolla "npm test" ollessa projektin juurikansiossa (tai client kansiossa).


# CI/CD

Projektiin on asennettu CI/CD putki, joka toimii käyttäen GitHubin Action-toimintoja.
Putki ja sen toiminnot on määritelty pipeline.yml tiedostossa, joka sijaitsee kansiossa
.github/workflows. Aina kun paikallisella koneella päätetään tehdä työntö repositorion
master haaraan, niin putken automatisoidut toiminnot käynnistyvät. Putki asentaa
tarvittavat riippuvuudet, tekee ohjelmistosta production build -version, ja suorittaa
testit. Mikäli kaikki menee suunnitellusti, lopuksi putki julkaisee pelin uuden version
herokuun. Näin ollen Peli on jatkuvasti saatavilla.