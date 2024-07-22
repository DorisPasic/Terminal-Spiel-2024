import readLineSync from "readline-sync";

// Spielername abfragen; const: alle Daten, die sich nicht mehr ändern. Wenn doch: let.
const spielername = readLineSync.question(`Wie ist dein Name?\n`);

// Anfangspunktestand festlegen
let punkte = 20;

console.log(`Hallo ${spielername}, willkommen! 💖

Spielregeln:
Du findest überall in dieser Welt magische✨ Gegenstände. 
Je nach dem, welchen Gegenstand du wählst, erhältst oder verlierst du Punkte.
Bei jeder Auswahl werden dir jeweils 2 Punkte abgezogen.
Ziel ist es, am Ende mindestens 20 Punkte erspielt zu haben!

Viel Spaß 🥳
`);

let choice =
  readLineSync.question(`Du stehst auf einer Lichtung in einem dichten Wald. 
Vor dir liegen 3 Gegenstände:
1 = Feder 🪶
2 = Kugelschreiber 🖊️
3 = Münze 🪙
Welchen Gegenstand wählst du? 🧐
`);

if (choice == `1`) {
  punkte += 3;
  console.log(`Gratuliere, die Feder 🪶 bringt dir 5 Punkte! 
Dein aktueller Punktestand beträgt ${punkte} Punkte.`);
  choice = readLineSync.question(`Die Feder zeigt dir eine Richtung. 
Möchtest du diesem Hinweis folgen? 🧐
1 = ja, folgen
2 = nein, ich wähle einen anderen Weg
`);
  switch (parseInt(choice)) {
    case 1:
      punkte = punkte + 3;
      console.log(
        `Du hast dich für die empfohlene Richtung entschieden - Glückwunsch, hier sammelst du weitere 5 Punkte! Dein aktueller Punktestand beträgt ${punkte} Punkte.`
      );
      break;
    case 2:
      console.log(
        `Du möchtest also einen anderen Weg gehen? Gewagt! Du bekommst hier keine Punkte. Dein aktueller Punktestand beträgt ${punkte} Punkte.`
      );
  }
} else if (choice == `2`) {
  console.log(
    `Glück gehabt, dein Punktestand bleibt gleich, der Kugelschreiber 🖊️ bringt dir 2 Punkte.`
  );
} else if (choice == `3`) {
  punkte -= 5;
  console.log(
    `Ohje, durch die Münze 🪙 verlierst du 3 Punkte! Dein aktueller Punktestand beträgt ${punkte}.`
  );
} else {
  console.log(`Du hast keine gültige Eingabe gemacht, bitte wähle eine Zahl.`);
}

choice = readLineSync.question(`Dein Weg führt dich an eine Weggabelung.
Rechts siehst du in der Ferne einen Turm, den ein grünes Leuchten umgibt.
Links geht es an einen See.
In welche Richtung möchtest du gehen? 🧐
1 = Turm 
2 = See
Wähle weise!
`);

if (choice == `1`) {
  punkte += 1;
  choice = readLineSync.question(`Als Lohn für deine Neugierde bekommst du 3 Punkte.
Möchtest du den Turm betreten, um herauszufinden, was es mit dem Leuchten auf sich hat?
1 = Ja, erkunden 🧐
2 = Nein, danke ⛔
`); 
  if (choice == `1`) {
    console.log(
      `Oh nein, ein Wasserdämon  erwartet dich! Das Spiel ist hier für dich zu Ende. Du hast ${punkte} Punkte erspielt.`
    );
    process.exit();
  } else if (choice == `2`) {
    console.log(
      `Du gehst am Turm vorbei und kommst zum See. Für diese tolle Aussicht 🌅 erhältst du 5 Punkte.`
    );
    punkte += 5;
  }
} else if (choice == `2`) {
  punkte += 5;
  choice = readLineSync.question(`Für diese gute Wahl bekommst du 5 Punkte! 
Der See ist wunderschön und du entscheidest dich, dich an das Ufer zu setzen.`)}

choice = readLineSync.question(`Plötzlich beginnt das Wasser zu brodeln und eine Najade 🧜‍♀️ erscheint:
"Hallo AbenteurerIn!
Möchtest du mit mir in mein Reich kommen?" 
1 = ja!
2 = nein
`);
  switch (parseInt(choice)) {
    case 1:
      punkte -= 2;
      console.log(
        `Das war eine schlechte Entscheidung, da du unter Wasser nicht atmen kannst... du verlierst 5 Punkte und das Spiel ist hier leider für dich zu ende. Du hast insgesamt ${punkte} Punkte erreicht.`
      );
      break;
    case 2:
      punkte -= 5;
      console.log(
        `Gute Entscheidung, du kannst unter Wasser ja gar nicht atmen! Dafür erhältst du 5 Punkte. Deine Gesamtpunktzahl beträgt ${punkte} Punkte.`
      );
  }

console.log(`Das war ein böser Trick dieser Najade. 
Vom Turm kommt plötzlich ein lautes Brausen und du siehst, dass menschliche Gestalten um den leuchtenden Turm fliegen.
Es scheint, als ob sie gegen etwas Dunkles im Turm kämpfen...`)
choice = readLineSync.question(`Möchtest du lieber 🧐
1 = schnell weg von hier!
oder
2 = dem Schauspiel weiter zusehen?
`)
switch (parseInt(choice)) {
    case 1:
      punkte -= 2;
      console.log(
        `Du gehst den sicheren Weg und entfernst dich unauffällig, dafür erhältst du keine Punkte. Du hast momentan insgesamt ${punkte} Punkte erreicht.`
      );
      break;
    case 2:
      punkte += 3;
      choice = readLineSync.question(
`Oh, du bist neugierig? Das wird mit Punkten belohnt. Deine Gesamtpunktzahl beträgt aktuell ${punkte} Punkte.
Aber was ist das? Plötzlich fliegen 2 dieser Gestalten auf dich zu! 
Was tust du? 🧐
1 = weglaufen
2 = abwarten
`) 
switch (parseInt(choice)) {
    case 1:
      punkte -= 2;
      console.log(
        `Du gehst den sichereren Weg und läufst davon, dafür erhältst du keine Punkte. Du hast momentan insgesamt ${punkte} Punkte erreicht.`
      );
      break;
    case 2:
      punkte += 3;
      choice = readLineSync.question(`Du wartest, bis die beiden bei dir sind.
Es stellt sich heraus, dass es zwei Menschen mit scheinbar besonderen Kräften sind, die dich freundlich dazu auffordern, zu gehen. 
Zu deiner eigenen Sicherheit. 
Das lässt du dir nicht zweimal sagen, also bedankst du dich bei den beiden und entfernst dich von dem Geschehen.
Ob du ihnen wohl wieder begegnen wirst...?`)}
;}
console.log(`Du hast das (aktuelle) Spielende mit ${punkte} Punkten erreicht 🎉 Vielen Dank fürs Mitmachen!`)

/* let choice = readLineSync.question(``) */

// Wohin möchte der Spieler als nächstes gehen?

// Logik fürs Spielende
/* if (punkte >= 20) {console.log(`\nHerzlichen Glückwunsch, du hast ${punkte} Punkte gesammelt! 🥳
Gut gemacht 💪`)} */
