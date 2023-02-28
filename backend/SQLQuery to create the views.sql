USE [web_app]
GO

/****** Object:  View [dbo].[count_class_by_faculty]    Script Date: 11/16/2022 4:50:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[count_class_by_faculty]
AS
SELECT dbo.faculty.FacultyID, COUNT(DISTINCT dbo.class.ClassID) AS NoOfClass, dbo.faculty.FirstName, COALESCE (dbo.faculty.MiddleName, '-') AS MiddleName, dbo.faculty.LastName, COALESCE (dbo.faculty.CellNumber, '-') AS CellNumber, 
                  COALESCE (dbo.faculty.PhoneNumber, '-') AS PhoneNumber, dbo.faculty.Email, dbo.faculty.Title, dbo.faculty.FacultyStatusID, dbo.facultyStatus.Status
FROM     dbo.faculty LEFT OUTER JOIN
                  dbo.facultyStatus ON dbo.faculty.FacultyStatusID = dbo.facultyStatus.FacultyStatusID LEFT OUTER JOIN
                  dbo.faculty_class ON dbo.faculty.FacultyID = dbo.faculty_class.FacultyID LEFT OUTER JOIN
                  dbo.class ON dbo.faculty_class.ClassID = dbo.class.ClassID
GROUP BY dbo.faculty.FacultyID, dbo.faculty.FirstName, dbo.faculty.MiddleName, dbo.faculty.LastName, dbo.faculty.CellNumber, dbo.faculty.PhoneNumber, dbo.faculty.Email, dbo.faculty.Title, dbo.faculty.FacultyStatusID, dbo.facultyStatus.Status
GO

/****** Object:  View [dbo].[faculty_class_list]    Script Date: 11/16/2022 4:50:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

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
GO

/****** Object:  View [dbo].[count_in_class_view]    Script Date: 11/16/2022 4:50:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[count_in_class_view]
AS
SELECT dbo.class.ClassID, COUNT(dbo.student_class.StudentID) AS EnrollmentTotal
FROM     dbo.class LEFT OUTER JOIN
                  dbo.student_class ON dbo.class.ClassID = dbo.student_class.ClassID
GROUP BY dbo.class.ClassID
GO

/****** Object:  View [dbo].[class_view]    Script Date: 11/16/2022 4:50:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

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
GO

/****** Object:  View [dbo].[students_in_class_view]    Script Date: 11/16/2022 4:50:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[students_in_class_view]
AS
SELECT dbo.class.ClassID, dbo.classStatus.Status, dbo.student_classStatus.Status AS Expr1, dbo.student.FirstName, dbo.student.StudentID, dbo.student.LastName, dbo.student.DOB, dbo.count_in_class_view.EnrollmentTotal
FROM     dbo.class LEFT OUTER JOIN
                  dbo.classStatus ON dbo.class.ClassStatusID = dbo.classStatus.ClassStatusID INNER JOIN
                  dbo.student_class ON dbo.class.ClassID = dbo.student_class.ClassID INNER JOIN
                  dbo.student_classStatus ON dbo.student_class.StudentClassStatusID = dbo.student_classStatus.StudentClassStatusID INNER JOIN
                  dbo.student ON dbo.student_class.StudentID = dbo.student.StudentID INNER JOIN
                  dbo.count_in_class_view ON dbo.class.ClassID = dbo.count_in_class_view.ClassID
GO

/****** Object:  View [dbo].[class_detail_list1]    Script Date: 11/16/2022 4:50:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[class_detail_list1]
AS
SELECT dbo.class.ClassID, dbo.course.CourseName, dbo.classStatus.Status, dbo.day.WeekDay, dbo.timeblock.StartTime, dbo.timeblock.EndTime
FROM     dbo.class LEFT OUTER JOIN
                  dbo.course ON dbo.class.CourseID = dbo.course.CourseID LEFT OUTER JOIN
                  dbo.day ON dbo.class.DayID = dbo.day.DayID LEFT OUTER JOIN
                  dbo.classStatus ON dbo.class.ClassStatusID = dbo.classStatus.ClassStatusID LEFT OUTER JOIN
                  dbo.timeblock ON dbo.class.TimeBlockID = dbo.timeblock.TimeblockID
GO

/****** Object:  View [dbo].[count_students_by_semester]    Script Date: 11/16/2022 4:50:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[count_students_by_semester]
AS
SELECT TOP (15) dbo.semester.Semester, COUNT(dbo.student_class.StudentID) AS TotalStudents
FROM     dbo.semester LEFT OUTER JOIN
                  dbo.class ON dbo.semester.SemesterID = dbo.class.SemesterID LEFT OUTER JOIN
                  dbo.student_class ON dbo.class.ClassID = dbo.student_class.ClassID
GROUP BY dbo.semester.Semester
ORDER BY dbo.semester.Semester DESC
GO

/****** Object:  View [dbo].[count_students_course_view]    Script Date: 11/16/2022 4:50:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[count_students_course_view]
AS
SELECT TOP (5) dbo.course.CourseName, COUNT(dbo.student_class.StudentID) AS TotalStudents
FROM     dbo.course INNER JOIN
                  dbo.class ON dbo.course.CourseID = dbo.class.CourseID INNER JOIN
                  dbo.student_class ON dbo.class.ClassID = dbo.student_class.ClassID
GROUP BY dbo.course.CourseName
ORDER BY TotalStudents DESC
GO

/****** Object:  View [dbo].[course_view]    Script Date: 11/16/2022 4:50:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[course_view]
AS
SELECT dbo.course.CourseID, dbo.course.CourseName, dbo.course.Description, dbo.courseStatus.Status
FROM     dbo.course LEFT OUTER JOIN
                  dbo.courseStatus ON dbo.course.CourseStatusID = dbo.courseStatus.CourseStatusID
GO

/****** Object:  View [dbo].[guardian_student_view]    Script Date: 11/16/2022 4:50:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[guardian_student_view]
AS
SELECT dbo.student.FirstName, dbo.student.LastName, guardian_student_1.CanPickup, guardian_student_1.IsEmergency, dbo.guardianRelationship.Relationship, dbo.guardian.FirstName AS gFName, dbo.guardian.MiddleName AS gMName, dbo.guardian.LastName AS gLName, 
             dbo.student.MiddleName, guardian_student_1.GuardianID, dbo.student.StudentID, dbo.guardianStatus.GuardianStatusID, dbo.guardianStatus.Status
FROM   dbo.student INNER JOIN
             dbo.guardian_student AS guardian_student_1 ON dbo.student.StudentID = guardian_student_1.StudentID INNER JOIN
             dbo.guardian ON guardian_student_1.GuardianID = dbo.guardian.GuardianID INNER JOIN
             dbo.guardianRelationship ON guardian_student_1.RelationshipID = dbo.guardianRelationship.RelationshipID LEFT OUTER JOIN
             dbo.guardianStatus ON dbo.guardian.GuardianStatusID = dbo.guardianStatus.GuardianStatusID
GO

/****** Object:  View [dbo].[student_class_view]    Script Date: 11/16/2022 4:50:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

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
GO

/****** Object:  View [dbo].[student_medical_view]    Script Date: 11/16/2022 4:50:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[student_medical_view]
AS
SELECT dbo.medical.Condition, dbo.medical.MedicalID, dbo.student.StudentID, dbo.student.LastName, dbo.student_medical.Description, dbo.student.FirstName, dbo.student_medical._id, dbo.student_medicalStatus.Status, dbo.student_medicalStatus.StudentMedicalStatusID
FROM   dbo.student_medical INNER JOIN
             dbo.student ON dbo.student_medical.StudentID = dbo.student.StudentID INNER JOIN
             dbo.medical ON dbo.student_medical.MedicalID = dbo.medical.MedicalID LEFT OUTER JOIN
             dbo.student_medicalStatus ON dbo.student_medical.StudentMedicalStatusID = dbo.student_medicalStatus.StudentMedicalStatusID
GO

/****** Object:  View [dbo].[student_status]    Script Date: 11/16/2022 4:50:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[student_status]
AS
SELECT dbo.student.FirstName AS student_name, dbo.student.LastName, dbo.studentStatus.status, dbo.student.DOB
FROM     dbo.student INNER JOIN
                  dbo.studentStatus ON dbo.student.StudentStatusID = dbo.studentStatus.StudentStatusID
GO

/****** Object:  View [dbo].[view_student]    Script Date: 11/16/2022 4:50:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[view_student]
AS
SELECT dbo.student.StudentID, dbo.student.FirstName AS student_first_name, dbo.student.LastName AS student_last_name, dbo.studentStatus.Status, dbo.student.DOB, dbo.student.MiddleName AS student_middle_name, dbo.student.AddressLine1, dbo.student.AddressLine2, 
             dbo.student.City, dbo.student.State, dbo.student.Zip
FROM   dbo.student LEFT OUTER JOIN
             dbo.studentStatus ON dbo.student.StudentStatusID = dbo.studentStatus.StudentStatusID
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[46] 4[15] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "class"
            Begin Extent = 
               Top = 5
               Left = 8
               Bottom = 168
               Right = 202
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "course"
            Begin Extent = 
               Top = 0
               Left = 344
               Bottom = 163
               Right = 539
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "day"
            Begin Extent = 
               Top = 141
               Left = 582
               Bottom = 260
               Right = 776
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "classStatus"
            Begin Extent = 
               Top = 181
               Left = 58
               Bottom = 300
               Right = 252
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "timeblock"
            Begin Extent = 
               Top = 7
               Left = 824
               Bottom = 148
               Right = 1018
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'class_detail_list1'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'class_detail_list1'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'class_detail_list1'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[36] 4[23] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4[30] 2[40] 3) )"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = -120
         Left = -1375
      End
      Begin Tables = 
         Begin Table = "class"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 251
               Right = 242
            End
            DisplayFlags = 280
            TopColumn = 2
         End
         Begin Table = "count_in_class_view"
            Begin Extent = 
               Top = 147
               Left = 1085
               Bottom = 266
               Right = 1286
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "course"
            Begin Extent = 
               Top = 7
               Left = 290
               Bottom = 170
               Right = 485
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "semester"
            Begin Extent = 
               Top = 7
               Left = 533
               Bottom = 126
               Right = 727
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "timeblock"
            Begin Extent = 
               Top = 0
               Left = 1010
               Bottom = 141
               Right = 1204
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "day"
            Begin Extent = 
               Top = 41
               Left = 775
               Bottom = 160
               Right = 969
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "classStatus"
            Begin Extent = 
               Top = 184
               Left = 537
               Bottom = 303
               Right = 731
            End
            ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'class_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'DisplayFlags = 280
            TopColumn = 1
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 18
         Width = 284
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1180
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1360
         SortOrder = 1420
         GroupBy = 1350
         Filter = 1360
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'class_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'class_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[43] 4[21] 2[23] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "faculty"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 260
               Right = 260
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "facultyStatus"
            Begin Extent = 
               Top = 122
               Left = 846
               Bottom = 241
               Right = 1058
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "faculty_class"
            Begin Extent = 
               Top = 7
               Left = 308
               Bottom = 148
               Right = 518
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "class"
            Begin Extent = 
               Top = 7
               Left = 566
               Bottom = 170
               Right = 776
            End
            DisplayFlags = 280
            TopColumn = 3
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 12
         Width = 284
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 12
         Column = 1440
         Alias = 900
         Table = 1176
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1356
         SortOrder = 1416
         GroupBy = 1350
         Filter =' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'count_class_by_faculty'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N' 1356
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'count_class_by_faculty'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'count_class_by_faculty'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "class"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 170
               Right = 258
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "student_class"
            Begin Extent = 
               Top = 7
               Left = 306
               Bottom = 170
               Right = 556
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1200
         Width = 2208
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 12
         Column = 1440
         Alias = 900
         Table = 1176
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1356
         SortOrder = 1416
         GroupBy = 1356
         Filter = 1356
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'count_in_class_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'count_in_class_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "semester"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 126
               Right = 242
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "class"
            Begin Extent = 
               Top = 13
               Left = 292
               Bottom = 176
               Right = 486
            End
            DisplayFlags = 280
            TopColumn = 2
         End
         Begin Table = "student_class"
            Begin Extent = 
               Top = 0
               Left = 587
               Bottom = 163
               Right = 821
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1428
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 12
         Column = 1440
         Alias = 900
         Table = 1176
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1356
         SortOrder = 1416
         GroupBy = 1350
         Filter = 1356
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'count_students_by_semester'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'count_students_by_semester'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[41] 4[25] 2[16] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "course"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 170
               Right = 243
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "student_class"
            Begin Extent = 
               Top = 6
               Left = 712
               Bottom = 169
               Right = 946
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "class"
            Begin Extent = 
               Top = 9
               Left = 377
               Bottom = 172
               Right = 571
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 12
         Column = 1440
         Alias = 900
         Table = 1176
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1356
         SortOrder = 1416
         GroupBy = 1356
         Filter = 1356
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'count_students_course_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'count_students_course_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "course"
            Begin Extent = 
               Top = 21
               Left = 104
               Bottom = 184
               Right = 299
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "courseStatus"
            Begin Extent = 
               Top = 41
               Left = 425
               Bottom = 160
               Right = 620
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1176
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1356
         SortOrder = 1416
         GroupBy = 1350
         Filter = 1356
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'course_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'course_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[54] 4[11] 2[15] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "faculty"
            Begin Extent = 
               Top = 9
               Left = 5
               Bottom = 172
               Right = 201
            End
            DisplayFlags = 280
            TopColumn = 5
         End
         Begin Table = "faculty_class"
            Begin Extent = 
               Top = 4
               Left = 257
               Bottom = 145
               Right = 451
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "class"
            Begin Extent = 
               Top = 6
               Left = 531
               Bottom = 169
               Right = 725
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "semester"
            Begin Extent = 
               Top = 396
               Left = 612
               Bottom = 539
               Right = 834
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "count_class_by_faculty"
            Begin Extent = 
               Top = 7
               Left = 1072
               Bottom = 126
               Right = 1266
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "course"
            Begin Extent = 
               Top = 2
               Left = 829
               Bottom = 165
               Right = 1024
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "classStatus"
            Begin Extent = 
               Top = 270
               Left = 701
               Bottom = 389
               Right = 895
            End
          ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'faculty_class_list'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'  DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "timeblock"
            Begin Extent = 
               Top = 209
               Left = 983
               Bottom = 350
               Right = 1177
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "day"
            Begin Extent = 
               Top = 280
               Left = 361
               Bottom = 399
               Right = 555
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "facultyStatus"
            Begin Extent = 
               Top = 283
               Left = 75
               Bottom = 402
               Right = 271
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 12
         Width = 284
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1180
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1360
         SortOrder = 1420
         GroupBy = 1350
         Filter = 1360
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'faculty_class_list'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'faculty_class_list'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[60] 4[4] 2[32] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "student"
            Begin Extent = 
               Top = 9
               Left = 57
               Bottom = 206
               Right = 290
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "guardian_student_1"
            Begin Extent = 
               Top = 7
               Left = 472
               Bottom = 280
               Right = 694
            End
            DisplayFlags = 280
            TopColumn = 2
         End
         Begin Table = "guardian"
            Begin Extent = 
               Top = 0
               Left = 846
               Bottom = 197
               Right = 1088
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "guardianRelationship"
            Begin Extent = 
               Top = 278
               Left = 215
               Bottom = 421
               Right = 437
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "guardianStatus"
            Begin Extent = 
               Top = 9
               Left = 1145
               Bottom = 152
               Right = 1387
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
      ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'guardian_student_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'   Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'guardian_student_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'guardian_student_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[88] 4[4] 2[4] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "class"
            Begin Extent = 
               Top = 13
               Left = 321
               Bottom = 210
               Right = 543
            End
            DisplayFlags = 280
            TopColumn = 3
         End
         Begin Table = "student_class"
            Begin Extent = 
               Top = 13
               Left = 663
               Bottom = 210
               Right = 936
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "student"
            Begin Extent = 
               Top = 18
               Left = 970
               Bottom = 215
               Right = 1203
            End
            DisplayFlags = 280
            TopColumn = 7
         End
         Begin Table = "course"
            Begin Extent = 
               Top = 9
               Left = 57
               Bottom = 206
               Right = 283
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "student_classStatus"
            Begin Extent = 
               Top = 216
               Left = 57
               Bottom = 359
               Right = 330
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "timeblock"
            Begin Extent = 
               Top = 301
               Left = 429
               Bottom = 471
               Right = 651
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "day"
            Begin Extent = 
               Top = 216
               Left = 666
               Bottom = 359
               Right = 888
            End
            Display' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'student_class_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'Flags = 280
            TopColumn = 0
         End
         Begin Table = "semester"
            Begin Extent = 
               Top = 216
               Left = 945
               Bottom = 359
               Right = 1167
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'student_class_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'student_class_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[56] 4[5] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "student_medical"
            Begin Extent = 
               Top = 9
               Left = 57
               Bottom = 206
               Right = 279
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "student"
            Begin Extent = 
               Top = 9
               Left = 336
               Bottom = 206
               Right = 569
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "medical"
            Begin Extent = 
               Top = 9
               Left = 626
               Bottom = 144
               Right = 835
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "student_medicalStatus"
            Begin Extent = 
               Top = 202
               Left = 407
               Bottom = 345
               Right = 701
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'student_medical_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'student_medical_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "student"
            Begin Extent = 
               Top = 29
               Left = 79
               Bottom = 192
               Right = 280
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "studentStatus"
            Begin Extent = 
               Top = 42
               Left = 526
               Bottom = 161
               Right = 727
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1176
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1356
         SortOrder = 1416
         GroupBy = 1350
         Filter = 1356
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'student_status'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'student_status'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "class"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 170
               Right = 242
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "classStatus"
            Begin Extent = 
               Top = 7
               Left = 290
               Bottom = 126
               Right = 484
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "student_class"
            Begin Extent = 
               Top = 7
               Left = 532
               Bottom = 170
               Right = 766
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "student_classStatus"
            Begin Extent = 
               Top = 174
               Left = 285
               Bottom = 293
               Right = 519
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "student"
            Begin Extent = 
               Top = 158
               Left = 49
               Bottom = 321
               Right = 250
            End
            DisplayFlags = 280
            TopColumn = 7
         End
         Begin Table = "count_in_class_view"
            Begin Extent = 
               Top = 175
               Left = 572
               Bottom = 294
               Right = 773
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1200' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'students_in_class_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1176
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1356
         SortOrder = 1416
         GroupBy = 1350
         Filter = 1356
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'students_in_class_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'students_in_class_view'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[36] 4[4] 2[23] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "student"
            Begin Extent = 
               Top = 7
               Left = 548
               Bottom = 170
               Right = 749
            End
            DisplayFlags = 280
            TopColumn = 8
         End
         Begin Table = "studentStatus"
            Begin Extent = 
               Top = 9
               Left = 806
               Bottom = 152
               Right = 1039
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 10
         Width = 284
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1180
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1360
         SortOrder = 1420
         GroupBy = 1350
         Filter = 1360
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'view_student'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'view_student'
GO


