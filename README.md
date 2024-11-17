# README för Projektinlämning

## Projektöversikt
Detta projekt syftar till att skapa en **responsiv** och **användarvänlig** webbsida med funktioner som:
- Mörk-/ljusläge
- API-integration för FAQ och testimonials
- Modulär komponentstruktur

---

## Kända problem

- **Responsivitet:**
  - Contact-sektionen fungerar bra på mobil men har layoutproblem (fungerar inte alls) på tablet och desktop.
    
  - **Gissning:** Problemet hänger ihop med `.container`-klassen.
  - **Lösning:** I framtida projekt planerar jag att använda @extend eller mixins för att skapa en mer modulär och isolerad layoutstruktur.
  
- **Tid och resurser:**
  - **Problem:** Jag började med Contact-sektionen senare eftersom VG inte var ett initialt mål, och sjukdom under sista spurten gjorde att jag inte hann prioritera den delen fullt ut. Speciellt responsiviteten.
  - **Lärdom:** Viktigt att prioritera och planera tidigare i projektet för att undvika tidsbrist.

- **Karusell:**
  - **Problem:** Layouten är inte totalt färdig, och responsiviteten är inte helt testad.
  - **Utmaning:** Jag tyckte det var svårt att göra ändringar i karusellen eftersom jag aldrig tidigare använt Swiper och inte hade tid att fullt ut sätta mig in i dokumentationen.

- **Länkar:**
  - **Problem:** Vissa länkar, som \"Contact Us\" i FAQ-sektionen, leder för tillfället ingenstans.
  - **Lösning:** Att se till att alla länkar är funktionella och korrekt implementerade är ett mål för framtida iterationer.

---

## Tankar och reflektioner
Överlag har det varit en väldigt rolig kurs. React var ett spännande ramverk att lära sig och arbeta med, men det var utmanande att förstå `useEffect`, `useContext` och **API-integrationer**. JavaScript har varit svårt att tackla överlag, och jag har använt mycket hjälp och stöd från ChatGPT, mycket mer än under den förra kursen.

Trots det så har jag lärt mig mycket och är stolt över mina framsteg och det känns väldigt bra att få instant feedback att saker och ting fungerar på webbsidan.
En viktig insikt är att jag inte ska påbörja för många delar samtidigt. Jag hade tjänat på att till större delen göra klart sektion för sektion innan jag började på något nytt.

För framtiden vill jag bli bättre på att skriva korta och tydliga kommentarer till *mig själv* medan jag arbetar. Jag är säker på att det skulle ge mig en bättre översikt och hjälpa mig att organisera koden bättre. När projektet är klart kan de personliga kommentarerna tas bort och ersättas med mer professionella  och informativa.

---
