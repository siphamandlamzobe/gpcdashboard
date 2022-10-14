CREATE OR ALTER  PROCEDURE [dbo].GetAllServiceReports

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
  INNER JOIN LUTServiceType st ON st.Id = sr.serviceTypeId ORDER BY 1 DESC 
END
GO