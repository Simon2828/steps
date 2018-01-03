const knex = require('knex')({ client: 'mysql' });

class StepsDataLoader {
    constructor(conn) {
        this.conn = conn;
    }

    query(sql) {
        return this.conn.query(sql);
    }

    getAllLos() {
    
        return this.query(
          knex
          .select('lO_name')
          .from('lOs')
          .toString()
        );
      }
}

module.exports = StepsDataLoader;