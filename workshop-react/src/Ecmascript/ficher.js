/*const users = [
    {name: 'Mohamed', age: 25},
    {name: 'Salma', age: 22},
    {name: 'Kamel', age: 16},
    {name: 'Mariem' ,age : 50 } ];
    const TesteAdulte = users.map(person =>
    person.age > 18 ? console.log(`${person.name} est un adulte`)
    : console.log(`${person.name} nest pas un adulte`));*/








/*const set = new Set();

set.add(100) ;

set.add(90) ;

set.add(99);

set.add(11);

set.add(15);

set.add(15);

console. log(set) ;

set. forEach(()=> {

if (set.size % 2===0) {

console. log("Le nombre d'éléments dans le Set est pair");

} else {

console. log("Le nombre d'éléments dans le Set est impair")}

});*/

/*const nombres = {"un": 1, "deux": 2, "trois": 3};
for (let n in nombres) {
console. log(nombres [n] ) };*/


const notes = [10, 20, 13,9,0,10];
const newNoteList = [...notes, 4, 5];
const newNoteList2 = [ 4, 5 ,...notes];
console. log(newNoteList) ;

console. log(newNoteList2) ;

/*const map = new Map([['niveau','4'], ['classe', 'twin']]);
map.set('Nom_module','csa2');
map.set('Nom_chapitre','introduction');

console.log(map.get( 'niveau'));
console.log(map.get( 'classe'));
console.log(map.get( 'Nom_module'));
console.log(map.get( 'Nom_chapitre'))*/