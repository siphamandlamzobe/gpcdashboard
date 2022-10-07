IF EXISTS(SELECT 1 FROM sys.columns 
          WHERE Name = N'ServiceType'
          AND Object_ID = Object_ID(N'ServiceReport'))
    BEGIN
        ALTER TABLE ServiceReport 
        DROP COLUMN ServiceType
    END