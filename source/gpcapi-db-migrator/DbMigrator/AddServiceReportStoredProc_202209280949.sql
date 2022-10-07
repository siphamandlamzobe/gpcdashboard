DROP PROCEDURE [dbo].AddServiceReport
GO

CREATE OR ALTER PROCEDURE [dbo].AddServiceReport
@attendance int,
@soulsSaved int,
@firsttimers int,
@serviceReview varchar(50),
@serviceType varchar(50),
@serviceDate datetime

AS
BEGIN TRANSACTION
DECLARE @returnServiceReportId  int
BEGIN
	INSERT INTO [dbo].ServiceReport(Attendance, SoulsSaved, Firsttimers, ServiceReview, ServiceType, ServiceDate, CreatedOn)
	VALUES(@attendance, @soulsSaved, @firsttimers, @serviceReview, @serviceType, @serviceDate, GetDate())
	SET @returnServiceReportId = SCOPE_IDENTITY()
END
SELECT @returnServiceReportId;
COMMIT TRANSACTION
GO