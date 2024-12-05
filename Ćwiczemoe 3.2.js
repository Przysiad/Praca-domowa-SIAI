
let listaZakupow = [];
listaZakupow.push("Mleko", "Pieczywo", "Jabłka");
let indexPieczywo = listaZakupow.indexOf("Pieczywo");
listaZakupow.splice(indexPieczywo, 1, "Banan", "Jajka");
listaZakupow.pop();
console.log("Zawartość tablicy po usunięciu ostatniego elementu:", listaZakupow);
listaZakupow.sort();
console.log("Posortowana lista:", listaZakupow);
let indexMleko = listaZakupow.indexOf("Mleko");
console.log("Indeks elementu 'Mleko':", indexMleko);
let indexBanan = listaZakupow.indexOf("Banan");
listaZakupow.splice(indexBanan + 1, 0, "Marchew", "Sałata");
let nowaLista = ["Sok", "Pop"];
listaZakupow = listaZakupow.concat(nowaLista, nowaLista);
let ostatniIndeksPop = listaZakupow.lastIndexOf("Pop");
console.log("Indeks ostatniego wystąpienia 'Pop':", ostatniIndeksPop);
console.log("Ostateczna wersja listy zakupów:", listaZakupow);