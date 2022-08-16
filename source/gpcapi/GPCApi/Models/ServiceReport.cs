namespace GPCApi.Models;

public class ServiceReportDto
{
    public int id { get; set; }
    public int attandance { get; set; }
    public int firsttimers { get; set; }
    public int soulsSaved { get; set; }
    public string? serviceType { get; set; }
    public DateTime serviceDate { get; set; }
    public string? serviceReview { get; set; }
    public DateTime createdOn { get; set; }
    public DateTime updatedOn { get; set; }
}


