"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать.
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция  альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albums = [
  {
    title: "Their Greatest Hits",
    artist: "Eagles",
    year: "1976"
  },
  {
    title: "Thriller",
    artist: "Michael Jackson",
    year: "1982"
  },
  {
    title: "Back in Black",
    artist: "AC/DC",
    year: "1980"
  }
];

const musicalCol = {
  albums,
  *[Symbol.iterator] () {
    for (let i = 0; i < this.albums.length; i++) {
      yield this.albums[i];
    }
  }
};

for (const album of musicalCol) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
