const UserList = [
    {
        id: 1,
        name: "Aashish",
        age: 21,
        nationality: "INDIAN",
        friends: [
            {
                id: 2,
                name: "Radhey",
                age: 22,
                nationality: "AMERICAN"
            }
        ]
    },
    {
        id: 2,
        name: "Radhey",
        age: 22,
        nationality: "AMERICAN"
    },
    {
        id: 3,
        name: "Krishna",
        age: 20,
        nationality: "British"
    },
    {
        id: 4,
        name: "Tanveer",
        age: 23,
        nationality: "INDIAN"
    },
    {
        id: 5,
        name: "Anmol",
        age: 22,
        nationality: "PAKISTANI"
    },
    

];

const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2015,
        isInTheatres: false
    },
    {
        id: 2,
        name: "Superbad",
        yearOfPublication: 2009,
        isInTheatres: false
    },
    {
        id: 1,
        name: "After",
        yearOfPublication: 2020,
        isInTheatres: false
    },
    {
        id: 1,
        name: "Javaan",
        yearOfPublication: 2023,
        isInTheatres: true
    },
];

module.exports = { UserList, MovieList };