const fs = require('fs');

//Odczytaj plik...
fs.readFile('../app/data/zadanie02/file.txt', 'utf8', (err, data) => {//...kiedy skończysz uruchom naszą funkcję callback
    if (err === null){ //Sprawdzamy czy obiekt błędu jest null-em - jeżeli tak - wyświetlamy zawartość pliku
        console.log('Poprawnie odczytano plik.', data);
    } else { //Jeżeli obiekt błędu nie był null-em, to pojawił się błąd - np. plik nie istniał
        console.log('Błąd podczas odczytu pliku!', err);
    }
});

fs.readFile('../app/data/zadanie02/data.json', 'utf8', (err, data) => {//...kiedy skończysz uruchom naszą funkcję callback
    if (err === null){ //Sprawdzamy czy obiekt błędu jest null-em - jeżeli tak - wyświetlamy zawartość pliku
        console.log('Poprawnie odczytano plik.', data);
    } else { //Jeżeli obiekt błędu nie był null-em, to pojawił się błąd - np. plik nie istniał
        console.log('Błąd podczas odczytu pliku!', err);
    }
});