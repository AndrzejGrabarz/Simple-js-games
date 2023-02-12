const items = [
    {name: 'Bike',     price: 100  },
    {name: 'TV',       price: 200  },
    {name: 'Album',    price: 10   },
    {name: 'Book',     price: 5    },
    {name: 'Phone',    price: 500  },
    {name: 'Computer', price: 1000 },
    {name: 'Keyboard', price: 25   }
]



const filterItems = items.filter((items) => {
    return items.price <= 100;
})

//Zwraca True lub Fales dla każdego elemetu w tablicy. 
//Jeśli True elemet trafai o nowej tablicy jeśli false to nie 

console.log(filterItems);




const itemsNames = items.map((item) => {
    return item.price;
})

console.log(itemsNames);

//Pozwala nam wziąc tablic i przekonwetować ją na 
//nową tablice używamy kiedy chcemy pozyskać np jedną
//informacje o obiekcie jak inddex,nazwa,cena




const foundItem = items.find((item) => {
    return item.price === 500
})

console.log(foundItem);

//Pokaże pierwszy item w tablicy który zwróci True
//dla wyrażenia które przekazujem wewnątrz funckji 


items.forEach((item) => {
    console.log(item.name);
    item.name += "bonk";
})

// Taka dziwna pętla for  



const hasInexpensiveItem = items.some((item) => {
     return item.price <= 10;
})

console.log(hasInexpensiveItem)


// Sprawdzam czy rzeczy w sklepie są niedrogie
// Działa w ten sposób ,ze powiedzmy jezeli sklep
// posiada JEDNO  ubranie kosztujące 100 lub mniej(na tle 100 np)
// wtedy wyrażenie zwraca wartość True czyli 
// sklep jest uznany za niedrogi (funkcja szuka pierwszej wartości która się zgadza)



const hasInexpensiveItems = items.every((item) => {
    return item.price >= 6;
})

console.log(hasInexpensiveItems);

//Sprawdze czy WSZYSTKIE itemy w tym przypadku 
//Są tańszee lub równe 100




const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
},0)

console.log(`%c${total}`, "color:pink");

// Dodaje po kolei  nwm w sumie 




const numbers = [1, 2, 3, 4, 5]

const includesTwo = numbers.includes(0);

console.log(includesTwo);

//Pobiera pojedyńczy argument z funckji i sprawdza 
// czy jest on w tablicy


//<script src = "notatki_tablice.js" defer></script>
// tag defer- "odroczyć "
// Nsze ciało upewnia sie ,że wszystko się ładuje przed
// uruchomieniem któregoś ze skryptów
// ogólnie wszystko ładuje sie szybciej ale to poczytaj od tym jeszcze pls