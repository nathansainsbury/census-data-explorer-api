const getFilterCombinations = (app, connection) => {

    app.get('/filter_combinations', (req, res) => {

        const { CODES } = req.query;

        if(!CODES){
            return res.status(422).send('Please provides a CODES array, similar to: 124,56...');
        }

        const codesArray = CODES.split(',').map(el => `:${el},`);

        const query = `SELECT  * FROM codelist_cube_description WHERE ${codesArray.map(CODE => `CL_CODE LIKE '%?%'`).join(' AND ')}`;
        console.log(query);
        console.log(codesArray);
        connection.query(query, codesArray, (err, results) => {

            res.json({results});

        });

    });

}

module.exports = getFilterCombinations;