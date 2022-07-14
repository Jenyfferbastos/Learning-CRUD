let person = [
    {
        name: "Jenyffer",
        age: "18",

    },

]
function create(name, age) {

    person.push({ name, age })
}
function read() {
    //console.log(person)
}
function update(name, age) {
    person[0].name = "Felipe"
    person[0].age = "23"
    console.log(person)
}

create("Jenyffer", "18");

read();

update();