let persons = [
    {
        name: "Jenyffer",
        age: "18",

    },

]
function create(name, age) {

    persons.push({ name, age })
};
function read() {
    console.log(persons)
};
function update(name, age) {
    persons[0].name
    persons[0].age
    console.log(persons)
};

function deletePersons(name, age) {
    var index = persons.findIndex((person) => {
        return person === name, age
    })
    console.log(index);

    var removed = persons.splice(0, 1);
    console.log(persons);

};


create("Julia", "11");

read();

update("Felipe", "23");

deletePersons("Jenyffer", "18");