use Test
select FirstName, LastName from (select t.FirstName, t.LastName, Count(*) as amount from
(SELECT FirstName, LastName, ExamName, Result FROM dbo.Exams JOIN Students ON Exams.StudentId = Students.StudentId
Where Exams.Result <3 ) as t
Group by t.FirstName, t.LastName ) as t2
where t2.amount>2