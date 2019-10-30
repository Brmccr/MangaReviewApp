module.exports = (sequelize, DataTypes) => {
    const Manga = sequelize.define('manga', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagemain: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imagemult: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Manga;
}