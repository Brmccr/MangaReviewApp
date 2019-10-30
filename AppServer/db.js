const Sequelize = require('sequelize');

const sequelize = new Sequelize('MangaReviewAppServer', 'postgres', 'Postgrespass976213', {
    host: 'localhost',
    dialect: 'postgres'
});

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize
    
    db.users = require('./models/user')(sequelize, Sequelize);
    db.manga = require('./models/manga')(sequelize, Sequelize);
    db.review = require('./models/review')(sequelize, Sequelize);


    //example of a one to one association 
    //manga will have many reviews 
    //review belongs to manga --
    //foreign key will be utilized 

    // School.hasMany(Teacher) 
    // Teacher.belongsTo(School)


    //manga will have many reviews
    //manga will have have one user - 
    // db.users.hasMany(db.words);
    // db.words.belongsTo(db.users);


sequelize.authenticate().then(
    function() {
        console.log('Connected to MangaReview postgres database');
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize;