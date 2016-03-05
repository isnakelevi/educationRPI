var express = require('express'), // Webserver
    app = express(), // Instance
    fs = require('fs'); // File System - fájl műveletek kezelésére

var copy = function(oldName, newName) {
    fs.createReadStream(oldName).pipe(fs.createWriteStream(newName));
};
var levi = fs.readFileSync('levi.csv', 'utf8');
copy('levi2.csv', 'levi4.csv');

/*app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(8080);*/

var Ember = function(id, kor, magassag, superero, suly) { //osztály létrehozás - nagybetűvel kell kezdeni
    // this - ember osztály ezeket tartalmazza
    // null - nincs meghatározva egyenlőre
    this.id = id;
    this.kor = kor;
    this.magassag = magassag;
    this.superero = superero;
    this.suly = suly;
};

// Ember.prototype.set = function(kor, magassag, superero, suly) {
//     this.kor = kor;
//     this.magassag = magassag;
//     this.superero = superero;
//     this.suly = suly;
// };

var ember = new Ember(0, 12, 160, 1, 50); // létrehoztunk egy embert ezekkel a jellemzőkkel

var tomb = []; // tömb létrehozás
//tomb.push(new Ember(0, 12, 160, 1, 50)); //tömbhöz való hozzáadás
//tomb.push(new Ember(1, 24, 200, 0, 90));

function random(start, end) {
    return Math.floor((Math.random() * end) + start);
}
/*
    Random számokkal való tömbfeltöltés, Ember egyedekkel
*/
for (var i = 0; i < 10; i++) {
    if (i === 8) {
        tomb.push(new Ember(
            88,
            random(1, 100),
            random(1, 100),
            random(1, 100),
            random(1, 100))
        );
    } else {
        tomb.push(new Ember(
            random(1, 100),
            random(1, 100),
            random(1, 100),
            random(1, 100),
            random(1, 100))
        );
    }
}

for (var i = 0; i < tomb.length; i++) {
    if (tomb[i].id === 88) {
        tomb[i].suly = 190;
    }
}

console.log(tomb);
