console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)

let sayi1 = 10;
sayi1= "Ebru"
let student ={id:1, name:"Ebru"}
console.log(sayi1);
//console.log(student);

function save(puan=10,ogrenci) {
    console.log(ogrenci.name + ":" + puan)
}
save(undefined,student);

let students = ["Ebru Acar","Beren Acar","Hakan Acar"]
console.log(students)

let students2 =[student, {id:2 , name:"Ebru Acar"},"Ankara",{city:"İstanbul"}]
console.log(students2)


