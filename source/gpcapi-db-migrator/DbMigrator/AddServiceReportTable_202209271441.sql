CREATE TABLE AddServiceReport(
	Id int Primary Key,
	Attendance int,
	SoulsSaved int,
	Firsttimers int,
	ServiceReview varchar(50),
	ServiceType varchar(50),
	ServiceDate datetime,
	CreatedOn datetime,
	UpdatedOn datetime null
);