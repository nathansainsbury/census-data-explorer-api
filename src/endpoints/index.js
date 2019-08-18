const getFilters = require('./getFilters');
const getTopics = require('./getTopics');
const getFilterCombinations = require('./getFilterCombinations');

const endpoints = (app, connection) => {
    getFilters(app, connection);
    getTopics(app, connection);
    getFilterCombinations(app, connection);
};

module.exports = endpoints;
