const ICrud = require("./interfaces/interfaceCrud");

class Postgres extends ICrud {
    constructor() {
        super();
    }

    create(item) {
        console.log("O item foi salvo com sucesso no postgres!");
    }
}

module.exports = Postgres;