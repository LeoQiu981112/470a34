module.exports = (sequelize, Sequelize) => {
    const Rectangle = sequelize.define("Rectangle", {
        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        width: {type: Sequelize.INTEGER, allowNull: false},
        height:  {type: Sequelize.INTEGER, allowNull: false},
        color:  {type: Sequelize.STRING, allowNull: false}
    });
    return Rectangle;
}
