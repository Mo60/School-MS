module.exports = app => {
  const Reports = require("../controllers/report.controller.js");

  var router = require("express").Router();

  // Retrieve all student eith view
  router.get("/view_students", Reports.view_students);   //
  router.get("/due_balance", Reports.due_balance);
  router.get("/student_status", Reports.student_status);
  router.get("/guardian_student_view/:id", Reports.guardian_student_view);
  router.get("/guardian_student_view", Reports.guardian_student_view_all);
  router.get("/course_view/:id", Reports.course_view_byId);
  router.get("/course_view", Reports.course_view_all);
  router.get("/guardian_student_view/studentid/:id", Reports.guardian_student_view_byStudentID);

  app.use('/api/reports', router);
};
