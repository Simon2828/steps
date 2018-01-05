const knex = require('knex')({ client: 'mysql' });

class StepsDataLoader {
    constructor(conn) {
        this.conn = conn;
    }

    query(sql) {
        return this.conn.query(sql);
    }

    getAllLos() {

        // return this.query(
        //     knex('lOsAndSteps')
        //         .insert(
        //         knex.join('steps', 'lO_id', 'step_id')
        //         .select('lO_id', 'lO_name', 'step_name')
        //         .from('lOs')
        //         .toString())
        // );
        return this.query(
            knex.raw(`SELECT lO_name AS lO, GROUP_CONCAT(step_name) AS stepsToSuccess FROM lOsAndSteps GROUP BY lO_name`)
            .toString())
    }
}

module.exports = StepsDataLoader;

// this worked but output not as wanted
// knex('lOs')
// .join('steps', 'lO_id', 'step_id')
// .select('lO_id', 'lO_name', 'step_name')
// .toString()


// .join('steps','lOs_id','=','step_id')
// .select('lO_id','lO_name','step_name')
// .toString()

