const persons = [
  {
    name: "Jenyffer",
    age: "18",
  },
];

function create(requisicao, resposta) {
  persons.push({ name: requisicao.name, age: requisicao.age });
  return resposta.send();
}

function read(requisicao, resposta) {
  return resposta.send(persons);
}

function update(name, age) {
  persons[0].name = name;
  persons[0].age = age;
  console.log(persons);
}

function deletePersons(name, age) {
  var index = persons.findIndex((person) => {
    return person === { name, age };
  });
  console.log(index);

  persons.splice(index, 1);
  console.log(persons);
}

export default {
  create,
  read,
  update,
  deletePersons,
};
