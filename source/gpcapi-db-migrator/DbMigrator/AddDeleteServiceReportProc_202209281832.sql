CREATE PROCEDURE [dbo].DeleteServiceReport
@id int

AS
BEGIN
DELETE FROM [dbo].ServiceReport
      WHERE id=@id

END
GO