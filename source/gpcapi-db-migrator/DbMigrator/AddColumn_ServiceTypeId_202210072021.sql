IF NOT EXISTS(SELECT 1 FROM sys.columns 
          WHERE Name = N'ServiceTypeId'
          AND Object_ID = Object_ID(N'ServiceReport'))
    BEGIN
        ALTER TABLE ServiceReport 
        ADD ServiceTypeId INT NOT NULL
    END