CREATE PROCEDURE UpdateServiceReport 
@id INT,
@serviceType VARCHAR(50),
@attendance INT,
@firsttimers INT,
@soulsSaved INT,
@serviceReview VARCHAR(500),
@serviceDate DATETIME

AS
  BEGIN TRANSACTION
  BEGIN
    UPDATE ServiceReport

    SET [serviceType] = @serviceType
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