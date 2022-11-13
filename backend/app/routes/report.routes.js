module.exports = app => {
  const Reports = require("../controllers/report.controller.js");

  var router = require("express").Router();

  // Retrieve all student eith view
  router.get("/view_students", Reports.view_students);
     // by STudentid
     router.get("/view_students/:StudenID", Reports.view_students);
  router.get("/due_balance", Reports.due_balance);
  router.get("/student_status", Reports.student_status);
  router.get("/guardian_student_view/:id", Reports.guardian_student_view);// by GuardianID
  router.get("/guardian_student_view", Reports.guardian_student_view_all);
  router.get("/course_view/:id", Reports.course_view_byId);
  router.get("/course_view", Reports.course_view_all);
  router.get("/guardian_student_view/studentid/:id", Reports.guardian_student_view_byStudentID);
  router.get("/faculty_class_list/:id", Reports.faculty_class_list_byFacultyId);
  router.get("/faculty_class_list", Reports.course_view_all);

  router.get("/class_view/:id", Reports.class_view_byClassID);
  router.get("/class_view", Reports.class_view_all);
  //class_detail_list1
  router.get("/class_detail_list1/:id", Reports.class_detail_list1_byClassID);
  router.get("/class_detail_list1", Reports.class_detail_list1_all);
  // student_class_view
  // pass the StudentID
  router.get("/student_class_view/:StudentID", Reports.student_class_view_byStudentID);
  router.get("/student_class_view", Reports.student_class_view_all);
  //student_medical_view
  router.get("/student_medical_view/:StudentID", Reports.student_medical_view_byStudentID);
  router.get("/student_medical_view", Reports.student_medical_view_all);
  
  app.use('/api/reports', router);
};
