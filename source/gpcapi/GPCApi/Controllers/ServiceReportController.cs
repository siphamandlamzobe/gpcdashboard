using GPCApi.Repository;
using GPCApi.Repository.DataModels;
using Microsoft.AspNetCore.Mvc;

namespace GPCApi.Controllers;

[ApiController]
[Route("/api/serviceReports")]
public class ServiceReportController : ControllerBase
{
    private readonly IServiceReportRepository _serviceReportRepository;

    public ServiceReportController(IServiceReportRepository serviceReportRepository)
    {
        _serviceReportRepository = serviceReportRepository;
    }
    [HttpGet]
    public async Task<ActionResult> GetServiceReports()
    {
        var serviceReports = await _serviceReportRepository.GetAll();

        return Ok(serviceReports);
    }

    [HttpPost]
    public async Task<ActionResult> AddServiceReport(ServiceReport serviceReport)
    {
        if (serviceReport == null)
        {
            return BadRequest("Could not add the service report");
        }

        var addedServiceReportId = await _serviceReportRepository.Add(serviceReport: serviceReport);

        return CreatedAtAction(nameof(GetServiceReportById), new { id = serviceReport.Id }, serviceReport);
    }

    [HttpGet("{*id}")]
    public async Task<ActionResult> GetServiceReportById(int id)
    {
        var serviceReport = await _serviceReportRepository.GetById(id);

        if (serviceReport == null)
        {
            return NotFound("Could not find the service report");
        }

        return Ok(serviceReport);
    }

    [HttpDelete("{*id}")]
    public async Task<ActionResult> DeleteServiceReportById(int id)
    {
        var serviceReport = await _serviceReportRepository.GetById(id);
        if (serviceReport == null)
        {
            return NotFound($"Service report with id = {id} not found");
        }

        await _serviceReportRepository.Delete(id);

        return Ok("Deleted successfully!");
    }

    [HttpPut("{*id}")]
    public async Task<ActionResult> UpdateServiceReport(int id, ServiceReport serviceReport)
    {
        if (id != serviceReport.Id)
        {
            return BadRequest("Service Report ID mismatch");
        }

        var serviceReportDto = await _serviceReportRepository.GetById(id);

        if (serviceReportDto == null)
        {
            return NotFound($"Service report with id = {id} not found");
        }

        await _serviceReportRepository.Update(serviceReport);

        return Ok("Updated successfully!");
    }
}