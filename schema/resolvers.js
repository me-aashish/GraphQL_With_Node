const { UserList, MovieList } = require('../fakeData');

const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },

        user: (parent, args) => {
            const incomingId = args.id;
            const response = UserList.find((user) => user.id == incomingId);
            return response;
        },

        movies: () => {
            return MovieList
        },

        movie: (parent, args) => {
            const incomingName = args.name;
            const response = MovieList.find((movie) => movie.name == incomingName);
            return response;
        },
    },

    User: {
        favouriteMovies: () => {
            const response =  MovieList.filter((movie) => movie.yearOfPublication <= 2015);
            return response
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const newUser = args.input;
            const lastId = UserList[UserList.length - 1].id;
            const newId = lastId + 1;
            newUser.id = newId;
            UserList.push(newUser);
            return newUser;
        },

        updateUserName: (parent, args) => {
            const { id, newUserName } = args.input;
            let updatedUser;
            UserList.forEach((user) => {
                if(user.id == id){
                    user.name = newUserName;
                    updatedUser = user;
                }
            })
            return updatedUser;
        }
    }
}

module.exports = resolvers