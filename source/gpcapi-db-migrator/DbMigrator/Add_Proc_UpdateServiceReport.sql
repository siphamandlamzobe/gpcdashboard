DROP PROCEDURE [dbo].UpdateServiceReport
GO

CREATE PROCEDURE [dbo].UpdateServiceReport 
@id INT,
@serviceTypeId int,
@attendance INT,
@firsttimers INT,
@soulsSaved INT,
@serviceReview VARCHAR(500),
@serviceDate DATETIME

AS
  BEGIN TRANSACTION
  BEGIN
    UPDATE [dbo].ServiceReport

    SET [serviceTypeId] = @serviceTypeId
       ,[attendance] = @attendance
       ,[firsttimers] = @firsttimers
       ,[soulsSaved] = @soulsSaved
       ,[serviceReview] = @serviceReview
       ,[serviceDate] = @serviceDate
       ,[updatedOn] = GETDATE()

      WHERE id = @id

  END
  COMMIT TRANSACTION
GO