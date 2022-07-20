const persons = [
  {
    name: "Jenyffer",
    age: "18",
  },
];

function create(requisicao, resposta) {
  persons.push({ name: requisicao.body.name, age: requisicao.body.age });
  return resposta.send(persons);
};

function read(requisicao, resposta) {
  return resposta.send(persons);
};

function update(requisicao, resposta) {
  const posicao = persons.findIndex((person) => {
    return person.name === requisicao.body.currentName;
  }
  )
  persons[posicao].name = requisicao.body.newName;
  persons[posicao].age = requisicao.body.age;
  return resposta.send(persons);
};

function deletePersons(requisicao, resposta) {
  const index = persons.findIndex((person) => {
    return person === requisicao.body.currentName;
  });


  persons.splice(index, 1);
  return resposta.send(persons);

}

export default {
  create,
  read,
  update,
  deletePersons,
};
