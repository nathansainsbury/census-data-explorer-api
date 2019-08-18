const getFilters = (app, connection) => {

    app.get('/filters', (req, res) => {

        const { CLID, ID } = req.query;

        const queryFieldsArray = [];
        const queryValuesArray = [];

        let query = 'SELECT * FROM codes';

        if(CLID){
            queryFieldsArray.push('CLID');
            queryValuesArray.push(CLID);
        }

        if(ID){
            queryFieldsArray.push('ID');
            queryValuesArray.push(ID);
        }

        if(queryFieldsArray.length > 0){
            query += ` WHERE ${queryFieldsArray.map(field => `${field} = ?`).join(' AND ')}`;
        }

        connection.query(query, queryValuesArray, (err, results) => {
            res.json({results});
        });

    });
};

module.exports = getFilters;