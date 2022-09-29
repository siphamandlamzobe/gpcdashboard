CREATE PROCEDURE DeleteServiceReport
@id int

AS
BEGIN
DELETE FROM ServiceReport
      WHERE id=@id

END
GO