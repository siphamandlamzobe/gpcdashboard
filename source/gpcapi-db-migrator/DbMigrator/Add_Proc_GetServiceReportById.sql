CREATE OR ALTER  PROCEDURE [dbo].GetServiceReportById
@id int

AS
BEGIN
SELECT sr.id
      ,serviceTypeId
      ,attendance
      ,firsttimers
      ,soulsSaved
      ,serviceReview
      ,serviceDate
      ,createdOn
      ,updatedOn
      ,st.ServiceType
  FROM [dbo].ServiceReport sr
  INNER JOIN LUTServiceType st ON st.Id = sr.serviceTypeId
  WHERE sr.id = @id
END
GO