const { dummyData } = require('../fakeData');

const resolvers = {
    Query: {
        users() {
            return dummyData;
        }
    }
}

module.exports = resolvers