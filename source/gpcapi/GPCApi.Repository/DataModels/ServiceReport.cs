namespace GPCApi.Repository.DataModels
{
    public class ServiceReport
    {
        public int Id { get; set; }
        public int Attendance { get; set; }
        public int Firsttimers { get; set; }
        public int SoulsSaved { get; set; }
        public DateTime ServiceDate { get; set; }
        public string? ServiceType { get; set; }
        public string? ServiceReview { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
    }
}