const { QueryTypes } = require('sequelize');
const db = require("../models");



// Retrieve all rows in the view view_student from the database.
// here I ran an sql query that select all rows in the the view
// onother option is to run sql query that returns the same results

// when adding a new methods make sure you update routing in report.routes.js
// and in server.js 
exports.view_students = (req, res) => {

  const view_students = db.sequelize.query("SELECT * FROM view_student ", { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};
exports.view_students_byId = (req, res) => {

  const view_students = db.sequelize.query(`SELECT * FROM view_student WHERE StudentID = ${req.params.StudentID}`, { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};
//due_balance
exports.due_balance = (req, res) => {

  const due_balance = db.sequelize.query("SELECT * FROM due_balance", { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};

exports.student_status = (req, res) => {

  const view_students = db.sequelize.query("SELECT * FROM student_status    ", { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};
// ** get guardian student view **
// get by guardianID
exports.guardian_student_view = (req, res) => {
  const id = req.params.id;
  const guardian_student_view = db.sequelize.query(`SELECT * FROM guardian_student_view WHERE GuardianID = ${id}    `, { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
};

  //// get by StudentID
  exports.guardian_student_view_byStudentID = (req, res) => {
    const id = req.params.id;
    const guardian_student_view = db.sequelize.query(`SELECT * FROM guardian_student_view WHERE StudentID = ${id} AND  IsDeleted = 0`, { type: QueryTypes.SELECT })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving info."
      });
    });
  };
  

// all rows in guat=rian student view
exports.guardian_student_view_all = (req, res) => {
  const guardian_student_view = db.sequelize.query(`SELECT * FROM guardian_student_view    `, { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};
/// methods to retrieve course_view (it includes the status name)
// first by id
exports.course_view_byId = (req, res) => {
  const id = req.params.id;
  const view = db.sequelize.query(`SELECT * FROM course_view WHERE CourseID = ${id}    `, { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};
// and all rows
exports.course_view_all = (req, res) => {
  const view = db.sequelize.query(`SELECT * FROM course_view    `, { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });  
};

/// methods to retrieve faculty_class_list (it includes the status name)
// first by id
exports.faculty_class_list_byFacultyId = (req, res) => {
  const id = req.params.id;
  const view = db.sequelize.query(`SELECT * FROM faculty_class_list WHERE FacultyID = ${id}    `, { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};
// and all rows
exports.faculty_class_list_all = (req, res) => {
  const view = db.sequelize.query(`SELECT * FROM faculty_class_list    `, { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};
/// methods to retrieve class_view (it includes the status name)
// first by id
exports.class_view_byClassID = (req, res) => {
  const id = req.params.id;
  const view = db.sequelize.query(`SELECT * FROM class_view WHERE ClassID = ${id}    `, { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};
// and all rows
exports.class_view_all = (req, res) => {
  const view = db.sequelize.query(`SELECT * FROM class_view    `, { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};
/// class_detail_list1
/// methods to retrieve class_detail_list1 (it includes the status name)
// first by id
exports.class_detail_list1_byClassID = (req, res) => {
  const id = req.params.id;
  const view = db.sequelize.query(`SELECT * FROM class_detail_list1 WHERE ClassID = ${id}    `, { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};
// and all rows
exports.class_detail_list1_all = (req, res) => {
  const view = db.sequelize.query(`SELECT * FROM class_detail_list1    `, { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
};
// student_class_view
/// methods to retrieve student_class_view (it includes the status name)
// first by id
exports.student_class_view_byStudentID = (req, res) => {
  const id = req.params.StudentID;
  const view = db.sequelize.query(`SELECT * FROM student_class_view WHERE StudentID = ${id}    `, { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};
// and all rows in student_class_view
exports.student_class_view_all = (req, res) => {
  const view = db.sequelize.query(`SELECT * FROM student_class_view    `, { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
};
//student_medical_view
/// methods to retrieve student_medical_view (it includes the status name)
// first by id
exports.student_medical_view_byStudentID = (req, res) => {
  const id = req.params.StudentID;
  const view = db.sequelize.query(`SELECT * FROM student_medical_view WHERE StudentID = ${id}    `, { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};
// and all rows in student_medical_view
exports.student_medical_view_all = (req, res) => {
  const view = db.sequelize.query(`SELECT * FROM student_medical_view    `, { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
};