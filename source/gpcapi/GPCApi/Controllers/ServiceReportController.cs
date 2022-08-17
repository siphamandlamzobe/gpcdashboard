using Microsoft.AspNetCore.Mvc;
using GPCApi.Repository;
using GPCApi.Repository.DataModels;

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
        try
        {
            var serviceReports = await _serviceReportRepository.GetAll();

            return Ok(serviceReports);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        }
    }

    [HttpPost]
    public async Task<ActionResult> AddServiceReport(ServiceReport serviceReport)
    {
        try
        {
            if (serviceReport == null)
            {
                return BadRequest();
            }

            var addedServiceReportId = await _serviceReportRepository.Add(serviceReport: serviceReport);

            return CreatedAtAction(nameof(GetServiceReportById), new { id = serviceReport.Id }, serviceReport);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        }
    }
    [HttpGet("{*id}")]
    public async Task<ActionResult> GetServiceReportById(int id)
    {
        try
        {
            var serviceReport = await _serviceReportRepository.GetById(id);

            if (serviceReport == null)
            {
                return NotFound();
            }

            return Ok(serviceReport);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        }
    }

    [HttpDelete("{*id}")]
    public async Task<ActionResult> DeleteServiceReportById(int id)
    {
        try
        {
            var serviceReport = await _serviceReportRepository.GetById(id);
            if (serviceReport == null)
            {
                return NotFound($"Service report with id = {id} not found");
            }

            await _serviceReportRepository.Delete(id);

            return Ok("Deleted successfully!");
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError,
            "Error deleting data");
        }
    }

    [HttpPut("{*id}")]
    public async Task<ActionResult> UpdateServiceReport(int id, ServiceReport serviceReport)
    {
        try
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
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        }
    }
}