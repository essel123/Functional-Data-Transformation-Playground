const person = {
  firstname: "Essel",
  lastname: "Apusiga Abraham",
  age: 16
};

const people = [
  {
    firstname: "Essel",
    lastname: "Apusiga Abraham",
    age: 34
  },
  {
    firstname: "Amara",
    lastname: "Nwosu",
    age: 28
  },
  {
    firstname: "Kwame",
    lastname: "Mensah",
    age: 42
  },
  {
    firstname: "Zara",
    lastname: "Oluwaseun",
    age: 30
  },
  {
    firstname: "Tariq",
    lastname: "Hassan",
    age: 25
  },
  {
    firstname: "Lina",
    lastname: "Khan",
    age: 37
  },
  {
    firstname: "Ravi",
    lastname: "Patel",
    age: 40
  },
  {
    firstname: "Sofia",
    lastname: "Martinez",
    age: 31
  },
  {
    firstname: "Emeka",
    lastname: "Okafor",
    age: 29
  },
  {
    firstname: "Leila",
    lastname: "Kouadio",
    age: 33
  }
];

// FUNCTION TO RETURN FULLNAME
function fullName(person) {
  let { firstname, lastname } = person;

  return `${firstname} ${lastname}`;
}

// FUNCTION TO
function isAdult(person) {
  let age = person.age;
  if (age >= 18) {
    return "Older";
  } else {
    return "Younger";
  }
}

console.log("----------------------------------------------");

console.log(`full name : ${fullName(person)}`);
console.log(`You're ${isAdult(person)}`);

// FUNCTION TO FILTER PERSON BY AGE

function filterByAge(people, minAge) {
  console.log("----------------------------------------------");
  people.forEach(person => {
    if (person.age >= minAge) {
      console.log(
        ` |Fullname: ${person.firstname} ${person.lastname}, Age: ${person.age}|`
      );
    }
  });
  console.log("-----------------------------------------------");
}

//change minAge to filter out people with less age of minAge out
filterByAge(people, 40);
