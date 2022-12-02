IF EXISTS(SELECT 1 FROM sys.columns 
          WHERE Name = N'ServiceReview'
          AND Object_ID = Object_ID(N'ServiceReport'))
    BEGIN
        ALTER TABLE ServiceReport
        ALTER COLUMN ServiceReview VARCHAR(300) NULL
    END