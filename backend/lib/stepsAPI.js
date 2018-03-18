const knex = require('knex')({ client: 'mysql' });

class StepsDataLoader {
    constructor(conn) {
        this.conn = conn;
    }

    query(sql) {
        return this.conn.query(sql);
    }
    // first lO_name not being returned from database...
    getAllLos() {
        return this.query(
            knex.raw(`SELECT lO_name AS lO, GROUP_CONCAT(step_name) AS stepsToSuccess FROM lOsAndSteps GROUP BY lO_name`)
            .toString())
    }

    editLo(lO) {
        let originalLO = lO.originalLO.substring(5)
        return this.query(
            knex('lOsAndSteps')
                .where('lO_name', '=', originalLO)
                .update('lO_name', lO.lO)
                .select()
                .toString()
        )
    }
        // select updated LO 
}

module.exports = StepsDataLoader;


