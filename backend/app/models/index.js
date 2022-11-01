const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.parent = require("./parent.model.js")(sequelize, Sequelize);
db.student = require("./student.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.enrollment = require("./enrollment.model.js")(sequelize, Sequelize);
db.invoice = require("./invoice.model.js")(sequelize, Sequelize);
db.teacher = require("./teacher.model.js")(sequelize, Sequelize);
db.class = require("./class.model.js")(sequelize, Sequelize);
db.payment = require("./payment.model.js")(sequelize, Sequelize);
//new tables
db.guardian_student = require("./guardian_student.model")(sequelize, Sequelize);
db.guardian = require("./guardian.model")(sequelize, Sequelize);
// db.guardianrelationship = require("./guardianrelationship.model")(sequelize, Sequelize);
// db.guardianStatus = require("./guardianStatus.model")(sequelize, Sequelize);
// db.semester = require("./semester.model")(sequelize, Sequelize);
// db.timeblock = require("./timeblock.model")(sequelize, Sequelize);
// db.days = require("./days.model")(sequelize, Sequelize);
// db.course = require("./course.model")(sequelize, Sequelize);
// db.classStatus = require("./classStatus.model")(sequelize, Sequelize);
// db.studentStatus = require("./studentStatus.model")(sequelize, Sequelize);
// db.courseStatus = require("./courseStatus.model")(sequelize, Sequelize);
// db.faculty_class = require("./faculty_class.model")(sequelize, Sequelize);
// db.faculty = require("./faculty.model")(sequelize, Sequelize);
// db.facultyStatus = require("./facultyStatus.model")(sequelize, Sequelize);
// db.student_medical = require("./student_medical.model")(sequelize, Sequelize);
// db.student_class = require("./student_class.model")(sequelize, Sequelize);
// db.medical = require("./medical.model")(sequelize, Sequelize);
// db.student_classStatus = require("./student_classStatus.model")(sequelize, Sequelize);
// db.class_room = require("./class_room.model")(sequelize, Sequelize);
// db.room = require("./room.model")(sequelize, Sequelize);
// db.location = require("./location.model")(sequelize, Sequelize);
// db.locationStatus = require("./locationStatus.model")(sequelize, Sequelize);
// db.roomStatus = require("./roomStatus.model")(sequelize, Sequelize);




















// relationships
db.student.belongToMany((db.guardian, { through: this.guardian_student }));
db.guardian.belongToMany((db.student,{through: this.guardian_student}));
db.student.hasMany(db.guardian_student);
db.guardian_student.belongsTo(db.student);
db.guardian.hasMany(db.guardian_student);
db.guardian_student.belongsTo(db.guardian);

console.log("this is in index")

module.exports = db;
