CREATE OR ALTER PROCEDURE [dbo].AddServiceReport
@attendance int,
@soulsSaved int,
@firsttimers int,
@serviceReview varchar(200),
@serviceTypeId int,
@serviceDate datetime

AS
BEGIN TRANSACTION
DECLARE @returnServiceReportId  int
BEGIN
	INSERT INTO [dbo].ServiceReport(Attendance, SoulsSaved, Firsttimers, ServiceReview, ServiceTypeId, ServiceDate, CreatedOn)
	VALUES(@attendance, @soulsSaved, @firsttimers, @serviceReview, @serviceTypeId, @serviceDate, GetDate())
	SET @returnServiceReportId = SCOPE_IDENTITY()
END
SELECT @returnServiceReportId;
COMMIT TRANSACTION
GO