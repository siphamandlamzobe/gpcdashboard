CREATE OR ALTER  PROCEDURE [dbo].GetAllServiceReports

AS
BEGIN
	SELECT [id]
      ,[serviceTypeId]
      ,[attendance]
      ,[firsttimers]
      ,[soulsSaved]
      ,[serviceReview]
      ,[serviceDate]
      ,[createdOn]
      ,[updatedOn]
  FROM [dbo].[ServiceReport] ORDER BY 1 DESC 
END
GO