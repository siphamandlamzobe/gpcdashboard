using GPCApi.Controllers;
using GPCApi.Repository;
using GPCApi.Repository.DataModels;
using GPCApi.Tests.Utils;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace GPCApi.Tests;

public class ServiceReportxUnitTests
{
    [Fact]
    public async Task GIVEN_GetAllEndPoint_WHEN_GettingAllServiceReports_RETURN_CorrectCount()
    {
        //Arrange
        var serviceReport = new ServiceReportBuilder().WithRandomProps().WithId(3).Build();
        var serviceReports = new List<ServiceReport>() { serviceReport };
        Mock<IServiceReportRepository> mockServiceReportRepository = new();
        mockServiceReportRepository.Setup(repo => repo.GetAllAsync()).ReturnsAsync(serviceReports).Verifiable();
        var serviceReportController = new ServiceReportController(mockServiceReportRepository.Object);
        var expectedServiceReportCount = 1;

        //Act
        var result = await serviceReportController.GetServiceReports();

        // Assert
        var okObjectResult = Assert.IsType<OkObjectResult>(result);
        var okObjectResultValue = Assert.IsType<List<ServiceReport>>(okObjectResult.Value);
        Assert.Equal(expectedServiceReportCount, actual: okObjectResultValue.Count);
        mockServiceReportRepository.Verify();
    }

    [Fact]
    public async Task GIVEN_ServiceReportId_WHEN_GettingServiceReportById_RETURN_ServiceReport()
    {
        //Arrange
        int serviceReportId = 1;
        ServiceReport serviceReport = new ServiceReportBuilder()
            .WithRandomProps()
            .WithId(1)
            .WithServiceType("Sunday")
            .WithAttendance(12322)
            .WithSoulsSaved(23232)
            .Build();

        Mock<IServiceReportRepository> mockServiceReportRepository = new();
        mockServiceReportRepository.Setup(repo => repo.GetByIdAsync(serviceReportId)).ReturnsAsync(serviceReport).Verifiable();
        var serviceReportController = new ServiceReportController(mockServiceReportRepository.Object);

        var expectedServiceType = "Sunday";
        var expectedServiceAttendance = 12322;
        var expectedServiceSoulsSaved = 23232;
        
        //Act
        var result = await serviceReportController.GetServiceReportById(serviceReportId);

        // Assert
        var okObjectResult = Assert.IsType<OkObjectResult>(result);
        var okObjectResultValue = Assert.IsType<ServiceReport>(okObjectResult.Value);
        Assert.Equal(expectedServiceType, okObjectResultValue.ServiceType);
        Assert.Equal(expectedServiceAttendance, okObjectResultValue.Attendance);
        Assert.Equal(expectedServiceSoulsSaved, okObjectResultValue.SoulsSaved);
        mockServiceReportRepository.Verify();
    }

    [Theory]
    [InlineData(1)]
    [InlineData(2)]
    public async Task GIVEN_ServiceReportId_WHEN_GettingServiceReportById_RETURN_NotFound(int serviceReportId)
    {
        //Arrange
        Mock<IServiceReportRepository> mockServiceReportRepository = new();
        mockServiceReportRepository.Setup(repo => repo.GetByIdAsync(serviceReportId)).ReturnsAsync((ServiceReport?)null);
        var serviceReportController = new ServiceReportController(mockServiceReportRepository.Object);

        //Act
        var result = await serviceReportController.GetServiceReportById(serviceReportId);

        // Assert
        Assert.IsType<NotFoundObjectResult>(result);
    }

    [Fact]
    public async Task GIVEN_NullServiceReportObject_WHEN_AddingServiceReport_RETURN_BadRequestResult()
    {
        //Arrange
        Mock<IServiceReportRepository>? mockServiceReportRepository = new();
        var serviceReportController = new ServiceReportController(mockServiceReportRepository.Object);

        //Act
        var result = await serviceReportController.AddServiceReport(null);

        // Assert
        Assert.IsType<BadRequestObjectResult>(result);
    }

    [Fact]
    public async Task GIVEN_ServiceReportObject_WHEN_AddingServiceReport_RETURN_ServiceReportId()
    {
        //Arrange
        Mock<IServiceReportRepository> mockServiceReportRepository = new();
        var serviceReportController = new ServiceReportController(mockServiceReportRepository.Object);

        //Act
        var result = await serviceReportController.AddServiceReport(new ServiceReportBuilder().WithRandomProps().Build());

        // Assert
        Assert.NotNull(result);
        Assert.IsType<CreatedAtActionResult>(result);
    }

    [Fact]
    public async Task GIVEN_InValidServiceReportId_WHEN_DeletingServiceReportById_RETURN_NotFoundObjectResult()
    {
        //Arrange
        int serviceReportId = 1;
        Mock<IServiceReportRepository> mockServiceReportRepository = new();
        mockServiceReportRepository.Setup(repo => repo.GetByIdAsync(serviceReportId)).ReturnsAsync((ServiceReport?)null);
        var serviceReportController = new ServiceReportController(mockServiceReportRepository.Object);

        //Act
        var result = await serviceReportController.DeleteServiceReportById(serviceReportId);

        // Assert
        Assert.IsType<NotFoundObjectResult>(result);
    }

    [Fact]
    public async Task GIVEN_ValidServiceReportId_WHEN_DeletingServiceReportById_RETURN_OkObjectResult()
    {
        //Arrange
        int serviceReportId = 1;
        ServiceReport serviceReport = new ServiceReportBuilder().WithRandomProps().WithId(1).Build();

        Mock<IServiceReportRepository> mockServiceReportRepository = new();
        mockServiceReportRepository.Setup(expression: repo => repo.GetByIdAsync(serviceReportId)).ReturnsAsync(serviceReport).Verifiable();
        var serviceReportController = new ServiceReportController(mockServiceReportRepository.Object);

        //Act
        var result = await serviceReportController.DeleteServiceReportById(serviceReportId);

        // Assert
        Assert.IsType<OkObjectResult>(result);
        mockServiceReportRepository.Verify();
    }

    [Fact]
    public async Task GIVEN_ValidServiceReportIdAndServiceReportObject_WHEN_updatingServiceReport_RETURN_OkObjectResult()
    {
        //Arrange
        int serviceReportId = 3;
        ServiceReport serviceReport = new ServiceReportBuilder().WithRandomProps().WithId(3).Build();
        ServiceReport updateServiceReport = new ServiceReportBuilder().WithRandomProps().WithId(3).Build();
        Mock<IServiceReportRepository> mockServiceReportRepository = new();
        mockServiceReportRepository.Setup(expression: repo => repo.GetByIdAsync(serviceReportId)).ReturnsAsync(serviceReport).Verifiable();
        var serviceReportController = new ServiceReportController(mockServiceReportRepository.Object);

        //Act
        var result = await serviceReportController.UpdateServiceReport(serviceReportId, updateServiceReport);

        // Assert
        Assert.IsType<OkObjectResult>(result);
        mockServiceReportRepository.Verify();
    }

    [Fact]
    public async Task GIVEN_ValidServiceReportIdAndServiceReportObject_WHEN_updatingServiceReport_RETURN_NotFoundObjectResult()
    {
        //Arrange
        int serviceReportId = 3;
        ServiceReport updateServiceReport = new ServiceReportBuilder().WithRandomProps().WithId(3).Build();
        Mock<IServiceReportRepository> mockServiceReportRepository = new();
        mockServiceReportRepository.Setup(expression: repo => repo.GetByIdAsync(serviceReportId)).ReturnsAsync((ServiceReport?)null).Verifiable();
        var serviceReportController = new ServiceReportController(mockServiceReportRepository.Object);

        //Act
        var result = await serviceReportController.UpdateServiceReport(serviceReportId, updateServiceReport);

        // Assert
        Assert.IsType<NotFoundObjectResult>(result);
        mockServiceReportRepository.Verify();
    }

    [Fact]
    public async Task GIVEN_InValidServiceReportIdAndServiceReportObject_WHEN_updatingServiceReport_RETURN_BadRequestObjectResult()
    {
        //Arrange
        int serviceReportId = 1;
        ServiceReport updateServiceReport = new ServiceReportBuilder().WithRandomProps().WithId(2).Build();
        Mock<IServiceReportRepository> mockServiceReportRepository = new();
        var serviceReportController = new ServiceReportController(mockServiceReportRepository.Object);

        //Act
        var result = await serviceReportController.UpdateServiceReport(serviceReportId, updateServiceReport);

        // Assert
        Assert.IsType<BadRequestObjectResult>(result);
    }
}