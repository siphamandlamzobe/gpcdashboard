CREATE TABLE [dbo].ServiceReport(
	Id int identity(1,1) Primary Key,
	Attendance int not null,
	SoulsSaved int not null,
	Firsttimers int not null,
	ServiceReview varchar(50) not null,
	ServiceType varchar(50) not null,
	ServiceDate datetime not null,
	CreatedOn datetime not null,
	UpdatedOn datetime null
);