﻿CREATE OR ALTER  PROCEDURE [dbo].GetServiceReportById
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
  FROM [dbo].ServiceReport
  WHERE id = @id
END
GO