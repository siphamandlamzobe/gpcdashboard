CREATE OR ALTER PROCEDURE AddServiceReport
@attendance int,
@soulsSaved int,
@firsttimers int,
@serviceReview varchar(50),
@serviceType varchar(50),
@serviceDate datetime

AS
BEGIN
	INSERT INTO AddServiceReport(Attendance, SoulsSaved, Firsttimers, ServiceReview, ServiceType, ServiceDate, CreatedOn)
	VALUES(@attendance, @soulsSaved, @firsttimers, @serviceReview, @serviceType, @serviceDate, GetDate())
END
GO