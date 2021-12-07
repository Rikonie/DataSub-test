use Test
Select GroupName from
(select GroupName, Count(*) as amounStudent from (select t.FirstName, t.LastName, t.GroupName, Count(*) as amount from
(SELECT GroupName, FirstName, LastName FROM dbo.Exams JOIN Students ON Exams.StudentId = Students.StudentId
Where Exams.Result <3 ) as t
Group by t.FirstName, t.LastName, t.GroupName ) as t2
where t2.amount>2 
Group by GroupName) as t3
where t3.amounStudent>10
