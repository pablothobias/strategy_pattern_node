const ICrud = require("./interfaces/interfaceCrud");

class MongoDB extends ICrud {
    constructor() {
        super();
    }

    create(item) {
        console.log("O item foi salvo com sucesso no mongodb!");
    }
}

module.exports = MongoDB;