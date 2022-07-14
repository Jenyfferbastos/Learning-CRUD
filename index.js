let person = [
    {
        "nome": "Jenyffer",
        "idade": "18",

    },

]
function create(nome, idade) {
    
    person.push({ nome, idade})
}
function read() {
    console.log(person)
}

create("Kelvem", "15");

read()