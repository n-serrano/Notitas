module.exports = function (sequelize, dataTypes) {
    let alias = "Nota";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: dataTypes.STRING(500),
            NotNull: true
        },
        texto: {
            type: dataTypes.STRING(1000),
            NotNull: true
        }

    }

    let config = {
        tableName: "notas",
        timestamps: true, //upd_at crt_at
        underscored: true, // guión bajo
        paranoid:true
    }

    const Nota = sequelize.define(alias, cols, config)
    return Nota;
}