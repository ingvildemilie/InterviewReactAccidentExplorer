# HomeTask: Accident Explorer

Dette prosjektet er basert på  [Create React App](https://github.com/facebook/create-react-app). Kjenner du ikke til CRA, så les *[README CREATE REACT APP.md](./README%20CREATE%20REACT%20APP.md)* for hvordan starte web applikasjonen osv.

Det anbefales å benytte [Visual Studio Code](https://code.visualstudio.com/)(gratis), evt annen IDE du kjenner.

*Du bør ikke bruke mer enn 4 timer, så du rekker kasnkje ikke alt eller alt du hadde tenkt du skulle gjøre. Men du kan gjerne ha tenkt igjennom de resterende oppgavene, slik at du kan forklare hvordan du ville ha løst dem.*

## Bakgrunn

Du skal bygge videre på en allerede kjørende react web applikasjon.
Applikasjon består av 2 deler, en kartdel og datavisningsdel. 
Kartet er basert på Esri ArcGIS Javascript API.
Oppgaven består i å lage datavisningsdelen.

Data i er hentet fra Nasjonal Vegdatabase (NVDB). Punktene viser ulykker registert hos (NVDB) i perioden 2019-2020. Disse er ulykkene er vist som rød punkter i kartet. Når kartet oppdateres(panorere, zooom osv), hentes det ut data for alle punkter i kartet og disse sendes til datavisningskomponenten.

## Kom i gang
Last ned/clone repository til deg lokalt:

`git clone https://..... (url kommer)`


Start løsningen og gjør deg kjent med koden.
Det forventes ikke at du skal forstå bruk av ArcGIS JS API.

Ikke bruk ferdige komponenter, bibliotek eller design rammeverk for å løse oppgaven.

Du styrer selv hvordan du vil lage datavisningsdelen. Fokuser på funksjonalitet, før design. Men vis oss gjerne at du klarer å lage et godt UI også.

### Eksempel:
![example_solution](example%20solution.png)


## Oppgave 1 - Listevisning
Lag en liste med visning av ulykkesdata.

Data skal være alltid være sortert på dato for ulykken, siste ulykke først.

Hver ulykke bør vise f.eks ulykkeskatergori og dato for ulykken.

## Oppgave 2 - Expand/Collapse
Ved å klikke på en ulykke skal man kunne se resterende data for ulykken. Lag en collapse/expand ("vis"/"skjul" data for ulykke) funksjonalitet når bruker klikke på tittelen du opprettet.

## Oppgave 3 - Filtrering
Det kan bli mye data dersom du zoom deg ut i kartet, så bruker ænsker å kunne filtrere lista basert på feltet "alvorligste_skadegrad". F.eks bare kunne se ulykker med "Letter skadd" i lista.
Det bør også være et eget alternativ for å se alle data, altså ufiltrert (default). 

## Oppgave 4 - Første ulykke alltid expanded
Når nye data hentes, altså kartområdet endres, skal første ulykke alltid være expanded(oppslått). Alle andre ulykker er collapsed.

Bruker vil også at den kun er en ulykke som kan være expanded om gangen, så klikker bruker på en ulykke for å se alle ulykkesdata må evt andre lukkes.

## Oppgave 5 - Knapp: "Zoom til lokasjon"
Lag en knapp som skal kunne zoome til en lokasjon i kartet.
__MapContainer.js__ komponenten kan ta imot et objekt __location__. Når bruker trykker på knappen, skal lokasjonsobjektet sendes til kartkomponenten. Kartet vil da selv zoome til aktuell lokasjon.

`const location = {x:263157, y:6649000}`

## Oppgave 6 - Test av filtreringslogikk
Det eksisterer allerede en enkel test __HomeTask.test.js__. Lag en en ny testfil med en test av fitreringslogikken du lagde i oppgave 3.
Applikasjonen er basert på Create-react-app, så "jest" er allerede lastet inn.

<br>
<br>

>#### NB: 
>Last opp din kode i GitHub eller lignende i et *private repo*. Husk å dele ditt repository med oss senest kl 09 dagen før intervjuet med oss.