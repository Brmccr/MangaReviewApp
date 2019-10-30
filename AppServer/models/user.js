module.exports = function(sequelize, DataTypes) {

    return sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};