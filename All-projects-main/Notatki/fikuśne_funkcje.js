
function calculatePrice (price, taxes, description){
 
 taxes = taxes ?? 0.05
 description = description ?? "Default item" 
 const total = price * (1 + taxes)
 console.log(`%c${description} With Tax:%c $${total}`,
 "background-color: red;font-size:10px;",
 "background-color: green;font-size:10px;")
}

calculatePrice(100, 0.07, "My item")
calculatePrice(100, 0, "My other item")
calculatePrice(100, undefined, undefined)


// Podwójny znak zapytania "??" ==> sprawdza czy pierwsza
// wartość jest jest zerowa lub niezdefiniowana jeśli tak
// to używa drugiej wartości w przeciwnym razie używa
// oryginalnej wartości 

// %c ==> można upiększać console  


class Person {
    constructor(name, address, hobbies){
        this.name = name;
        this.address = address;
        this.hobbies = hobbies;
    }
    print(){
        console.log(this)
    }
}

function printPersonStreet (person){
    console.log(person?.address?.street)
}

const Homar = new Person (
    "Homar",//name
    {street: "12345 main st",city: "Walebutle"},//address
    ["EAT" , "Sleep"]//hobbies
)

Homar.print?.()

printPersonStreet(Homar)

// Znak zapytania przed parametrem sprawdza
// person?.  Sprawdza czy osoba istniej 
// Jeśli istnieje i nie jest  null, pusta lub niezdefiniowana
// kontynnuj potem sprawdzamy czy address istnieje 

// Jeśli print?. istniej i jest funckją wtedy ją wywołaj 
//jeśli nie istniej zwróć undefined i nic nie rób 
console.log(Homar.hobbies?.[0].toLowerCase())


// ?. ==> działa też z tablicami 
// toLowerCase() --> konwertuje znaki na małe litery


const name = "Byk";
const favoriteFood = "Apple";


const Andrzej = {
    name,
    favoriteFood,
}

console.log(Andrzej)