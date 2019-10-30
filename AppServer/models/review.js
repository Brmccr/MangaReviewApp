module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('review', {
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        paragraph: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        // Will need to be associated with MangaID on certain view 
    })
    return Review;
}