CREATE VIEW [dbo].[count_class_by_faculty]
AS
SELECT dbo.faculty.FacultyID, COUNT(DISTINCT dbo.class.ClassID) AS NoOfClass, dbo.faculty.FirstName, COALESCE (dbo.faculty.MiddleName, '-') AS MiddleName, dbo.faculty.LastName, COALESCE (dbo.faculty.CellNumber, '-') AS CellNumber, 
                  COALESCE (dbo.faculty.PhoneNumber, '-') AS PhoneNumber, dbo.faculty.Email, dbo.faculty.Title, dbo.faculty.FacultyStatusID, dbo.facultyStatus.Status
FROM     dbo.faculty LEFT OUTER JOIN
                  dbo.facultyStatus ON dbo.faculty.FacultyStatusID = dbo.facultyStatus.FacultyStatusID LEFT OUTER JOIN
                  dbo.faculty_class ON dbo.faculty.FacultyID = dbo.faculty_class.FacultyID LEFT OUTER JOIN
                  dbo.class ON dbo.faculty_class.ClassID = dbo.class.ClassID
GROUP BY dbo.faculty.FacultyID, dbo.faculty.FirstName, dbo.faculty.MiddleName, dbo.faculty.LastName, dbo.faculty.CellNumber, dbo.faculty.PhoneNumber, dbo.faculty.Email, dbo.faculty.Title, dbo.faculty.FacultyStatusID, dbo.facultyStatus.Status
--
CREATE VIEW [dbo].[faculty_class_list]
AS
SELECT dbo.faculty.FacultyID, dbo.faculty.FirstName, dbo.faculty.LastName, dbo.facultyStatus.Status AS FacultyStatus, dbo.course.CourseName, dbo.course.CourseID, dbo.day.WeekDay, dbo.timeblock.StartTime, dbo.timeblock.EndTime, dbo.classStatus.Status AS ClassStatus, 
             dbo.count_class_by_faculty.NoOfClass, dbo.semester.Semester, dbo.faculty_class._id, dbo.faculty_class.ClassID
FROM   dbo.faculty LEFT OUTER JOIN
             dbo.faculty_class ON dbo.faculty.FacultyID = dbo.faculty_class.FacultyID INNER JOIN
             dbo.class ON dbo.faculty_class.ClassID = dbo.class.ClassID INNER JOIN
             dbo.semester ON dbo.class.SemesterID = dbo.semester.SemesterID LEFT OUTER JOIN
             dbo.count_class_by_faculty ON dbo.faculty.FacultyID = dbo.count_class_by_faculty.FacultyID LEFT OUTER JOIN
             dbo.course ON dbo.class.CourseID = dbo.course.CourseID LEFT OUTER JOIN
             dbo.classStatus ON dbo.class.ClassStatusID = dbo.classStatus.ClassStatusID LEFT OUTER JOIN
             dbo.timeblock ON dbo.class.TimeBlockID = dbo.timeblock.TimeblockID LEFT OUTER JOIN
             dbo.day ON dbo.class.DayID = dbo.day.DayID LEFT OUTER JOIN
             dbo.facultyStatus ON dbo.faculty.FacultyStatusID = dbo.facultyStatus.FacultyStatusID
--
CREATE VIEW [dbo].[count_in_class_view]
AS
SELECT dbo.class.ClassID, COUNT(dbo.student_class.StudentID) AS EnrollmentTotal
FROM     dbo.class LEFT OUTER JOIN
                  dbo.student_class ON dbo.class.ClassID = dbo.student_class.ClassID
GROUP BY dbo.class.ClassID
--
CREATE VIEW [dbo].[class_view]
AS
SELECT dbo.class.ClassID, dbo.course.CourseName, dbo.semester.Semester, dbo.day.WeekDay, dbo.timeblock.StartTime, dbo.timeblock.EndTime, dbo.classStatus.Status, dbo.day.DayID, dbo.timeblock.TimeblockID, dbo.classStatus.ClassStatusID, dbo.semester.SemesterID, 
             dbo.course.CourseID, dbo.class.Capacity, COALESCE (dbo.count_in_class_view.EnrollmentTotal, 0) AS EnrollmentTotal
FROM   dbo.class LEFT OUTER JOIN
             dbo.count_in_class_view ON dbo.class.ClassID = dbo.count_in_class_view.ClassID LEFT OUTER JOIN
             dbo.course ON dbo.class.CourseID = dbo.course.CourseID LEFT OUTER JOIN
             dbo.semester ON dbo.class.SemesterID = dbo.semester.SemesterID LEFT OUTER JOIN
             dbo.timeblock ON dbo.class.TimeBlockID = dbo.timeblock.TimeblockID LEFT OUTER JOIN
             dbo.day ON dbo.class.DayID = dbo.day.DayID LEFT OUTER JOIN
             dbo.classStatus ON dbo.class.ClassStatusID = dbo.classStatus.ClassStatusID
--
CREATE VIEW [dbo].[students_in_class_view]
AS
SELECT dbo.class.ClassID, dbo.classStatus.Status, dbo.student_classStatus.Status AS Expr1, dbo.student.FirstName, dbo.student.StudentID, dbo.student.LastName, dbo.student.DOB, dbo.count_in_class_view.EnrollmentTotal
FROM     dbo.class LEFT OUTER JOIN
                  dbo.classStatus ON dbo.class.ClassStatusID = dbo.classStatus.ClassStatusID INNER JOIN
                  dbo.student_class ON dbo.class.ClassID = dbo.student_class.ClassID INNER JOIN
                  dbo.student_classStatus ON dbo.student_class.StudentClassStatusID = dbo.student_classStatus.StudentClassStatusID INNER JOIN
                  dbo.student ON dbo.student_class.StudentID = dbo.student.StudentID INNER JOIN
                  dbo.count_in_class_view ON dbo.class.ClassID = dbo.count_in_class_view.ClassID
--
CREATE VIEW [dbo].[class_detail_list1]
AS
SELECT dbo.class.ClassID, dbo.course.CourseName, dbo.classStatus.Status, dbo.day.WeekDay, dbo.timeblock.StartTime, dbo.timeblock.EndTime
FROM     dbo.class LEFT OUTER JOIN
                  dbo.course ON dbo.class.CourseID = dbo.course.CourseID LEFT OUTER JOIN
                  dbo.day ON dbo.class.DayID = dbo.day.DayID LEFT OUTER JOIN
                  dbo.classStatus ON dbo.class.ClassStatusID = dbo.classStatus.ClassStatusID LEFT OUTER JOIN
                  dbo.timeblock ON dbo.class.TimeBlockID = dbo.timeblock.TimeblockID
--
CREATE VIEW [dbo].[count_students_by_semester]
AS
SELECT TOP (15) dbo.semester.Semester, COUNT(dbo.student_class.StudentID) AS TotalStudents
FROM     dbo.semester LEFT OUTER JOIN
                  dbo.class ON dbo.semester.SemesterID = dbo.class.SemesterID LEFT OUTER JOIN
                  dbo.student_class ON dbo.class.ClassID = dbo.student_class.ClassID
GROUP BY dbo.semester.Semester
ORDER BY dbo.semester.Semester DESC
--
CREATE VIEW [dbo].[count_students_course_view]
AS
SELECT TOP (5) dbo.course.CourseName, COUNT(dbo.student_class.StudentID) AS TotalStudents
FROM     dbo.course INNER JOIN
                  dbo.class ON dbo.course.CourseID = dbo.class.CourseID INNER JOIN
                  dbo.student_class ON dbo.class.ClassID = dbo.student_class.ClassID
GROUP BY dbo.course.CourseName
ORDER BY TotalStudents DESC
--
CREATE VIEW [dbo].[course_view]
AS
SELECT dbo.course.CourseID, dbo.course.CourseName, dbo.course.Description, dbo.courseStatus.Status
FROM     dbo.course LEFT OUTER JOIN
                  dbo.courseStatus ON dbo.course.CourseStatusID = dbo.courseStatus.CourseStatusID
--
CREATE VIEW [dbo].[guardian_student_view]
AS
SELECT dbo.student.FirstName, dbo.student.LastName, guardian_student_1.CanPickup, guardian_student_1.IsEmergency, dbo.guardianRelationship.Relationship, dbo.guardian.FirstName AS gFName, dbo.guardian.MiddleName AS gMName, dbo.guardian.LastName AS gLName, 
             dbo.student.MiddleName, guardian_student_1.GuardianID, dbo.student.StudentID, dbo.guardianStatus.GuardianStatusID, dbo.guardianStatus.Status
FROM   dbo.student INNER JOIN
             dbo.guardian_student AS guardian_student_1 ON dbo.student.StudentID = guardian_student_1.StudentID INNER JOIN
             dbo.guardian ON guardian_student_1.GuardianID = dbo.guardian.GuardianID INNER JOIN
             dbo.guardianRelationship ON guardian_student_1.RelationshipID = dbo.guardianRelationship.RelationshipID LEFT OUTER JOIN
             dbo.guardianStatus ON dbo.guardian.GuardianStatusID = dbo.guardianStatus.GuardianStatusID
--
CREATE VIEW [dbo].[student_class_view]
AS
SELECT dbo.course.CourseName, dbo.student_classStatus.Status, dbo.class.SemesterID, dbo.timeblock.StartTime, dbo.timeblock.EndTime, dbo.day.WeekDay, dbo.student.StudentID, dbo.student.FirstName, dbo.student.MiddleName, dbo.student.LastName, dbo.student_class._id, 
             dbo.semester.Semester
FROM   dbo.class INNER JOIN
             dbo.student_class ON dbo.class.ClassID = dbo.student_class.ClassID INNER JOIN
             dbo.student ON dbo.student_class.StudentID = dbo.student.StudentID INNER JOIN
             dbo.course ON dbo.class.CourseID = dbo.course.CourseID INNER JOIN
             dbo.student_classStatus ON dbo.student_class.StudentClassStatusID = dbo.student_classStatus.StudentClassStatusID INNER JOIN
             dbo.timeblock ON dbo.class.TimeBlockID = dbo.timeblock.TimeblockID INNER JOIN
             dbo.day ON dbo.class.DayID = dbo.day.DayID INNER JOIN
             dbo.semester ON dbo.class.SemesterID = dbo.semester.SemesterID
--
CREATE VIEW [dbo].[student_medical_view]
AS
SELECT dbo.medical.Condition, dbo.medical.MedicalID, dbo.student.StudentID, dbo.student.LastName, dbo.student_medical.Description, dbo.student.FirstName, dbo.student_medical._id, dbo.student_medicalStatus.Status, dbo.student_medicalStatus.StudentMedicalStatusID
FROM   dbo.student_medical INNER JOIN
             dbo.student ON dbo.student_medical.StudentID = dbo.student.StudentID INNER JOIN
             dbo.medical ON dbo.student_medical.MedicalID = dbo.medical.MedicalID LEFT OUTER JOIN
             dbo.student_medicalStatus ON dbo.student_medical.StudentMedicalStatusID = dbo.student_medicalStatus.StudentMedicalStatusID
--
CREATE VIEW [dbo].[student_status]
AS
SELECT dbo.student.FirstName AS student_name, dbo.student.LastName, dbo.studentStatus.status, dbo.student.DOB
FROM     dbo.student INNER JOIN
                  dbo.studentStatus ON dbo.student.StudentStatusID = dbo.studentStatus.StudentStatusID
--
CREATE VIEW [dbo].[view_student]
AS
SELECT dbo.student.StudentID, dbo.student.FirstName AS student_first_name, dbo.student.LastName AS student_last_name, dbo.studentStatus.Status, dbo.student.DOB, dbo.student.MiddleName AS student_middle_name, dbo.student.AddressLine1, dbo.student.AddressLine2, 
             dbo.student.City, dbo.student.State, dbo.student.Zip
FROM   dbo.student LEFT OUTER JOIN
             dbo.studentStatus ON dbo.student.StudentStatusID = dbo.studentStatus.StudentStatusID
