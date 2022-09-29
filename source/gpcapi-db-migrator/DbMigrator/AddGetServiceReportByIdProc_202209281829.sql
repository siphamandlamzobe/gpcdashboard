CREATE PROCEDURE GetServiceReportById
@id int

AS
BEGIN
SELECT id
      ,serviceType
      ,attendance
      ,firsttimers
      ,soulsSaved
      ,serviceReview
      ,serviceDate
      ,createdOn
      ,updatedOn
  FROM ServiceReport
  WHERE id = @id
END
GO