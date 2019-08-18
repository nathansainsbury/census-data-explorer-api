const getTopics = (app, connection) => {

    app.get('/topics', (req, res) => {

        const { ID, MNU } = req.query;

        const queryFieldsArray = [];
        const queryValuesArray = [];

        let query = 'SELECT * FROM codelist_def';

        if(ID){
            queryFieldsArray.push('ID');
            queryValuesArray.push(ID);
        }

        if(MNU){
            queryFieldsArray.push('MNU');
            queryValuesArray.push(MNU);
        }

        if(queryFieldsArray.length > 0){
            query += ` WHERE ${queryFieldsArray.map(field => `${field} = ?`).join(' AND ')}`;
        }

        connection.query(query, queryValuesArray, (err, results) => {
            res.json({results});
        })

    });
    
};

module.exports = getTopics;