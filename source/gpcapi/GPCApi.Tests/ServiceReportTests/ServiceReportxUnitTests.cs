using GPCApi.Controllers;
using GPCApi.Repository;
using GPCApi.Repository.DataModels;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace GPCApi.Tests
{
    public class ServiceReportxUnitTests
    {
        [Fact]
        public async Task GIVEN_GetAllEndPoint_WHEN_GettingAllServiceReports_RETURN_CorrectCount()
        {
            //Arrange
            Mock<IServiceReportRepository> mockServiceReportRepository = new();
            mockServiceReportRepository.Setup(repo => repo.GetAll()).ReturnsAsync(GetTestServiceReports).Verifiable();
            var serviceReportController = new ServiceReportController(mockServiceReportRepository.Object);
            var expectedServiceReportCount = 2;

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
            ServiceReport serviceReport = GetTestServiceReports().First(s => s.Id == serviceReportId);
            Mock<IServiceReportRepository> mockServiceReportRepository = new();
            mockServiceReportRepository.Setup(repo => repo.GetById(serviceReportId)).ReturnsAsync(serviceReport).Verifiable();
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

        [Fact]
        public async Task GIVEN_ServiceReportId_WHEN_GettingServiceReportById_RETURN_NotFound()
        {
            //Arrange
            int serviceReportId = 1;
            Mock<IServiceReportRepository> mockServiceReportRepository = new();
            mockServiceReportRepository.Setup(repo => repo.GetById(serviceReportId)).ReturnsAsync((ServiceReport?)null);
            var serviceReportController = new ServiceReportController(mockServiceReportRepository.Object);

            //Act
            var result = await serviceReportController.GetServiceReportById(serviceReportId);

            // Assert
            Assert.IsType<NotFoundResult>(result);
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
            var result = await serviceReportController.AddServiceReport(new ServiceReport());

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
            mockServiceReportRepository.Setup(repo => repo.GetById(serviceReportId)).ReturnsAsync((ServiceReport?)null);
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
            ServiceReport serviceReport = GetTestServiceReports().First(s => s.Id == serviceReportId);
            Mock<IServiceReportRepository> mockServiceReportRepository = new();
            mockServiceReportRepository.Setup(expression: repo => repo.GetById(serviceReportId)).ReturnsAsync(serviceReport).Verifiable();
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
            ServiceReport serviceReport = GetTestServiceReports().First(s => s.Id == serviceReportId);
            ServiceReport updateServiceReport = GetTestUpdateServiceReport();
            Mock<IServiceReportRepository> mockServiceReportRepository = new();
            mockServiceReportRepository.Setup(expression: repo => repo.GetById(serviceReportId)).ReturnsAsync(serviceReport).Verifiable();
            var serviceReportController = new ServiceReportController(mockServiceReportRepository.Object);

            //Act
            var result = await serviceReportController.UpdateServiceReport(serviceReportId, updateServiceReport);

            // Assert
            Assert.IsType<NotFoundObjectResult>(result);
            mockServiceReportRepository.Verify();
        }

        [Fact]
        public async Task GIVEN_ValidServiceReportIdAndServiceReportObject_WHEN_updatingServiceReport_RETURN_NotFoundObjectResult()
        {
            //Arrange
            int serviceReportId = 3;
            ServiceReport updateServiceReport = GetTestUpdateServiceReport();
            Mock<IServiceReportRepository> mockServiceReportRepository = new();
            mockServiceReportRepository.Setup(expression: repo => repo.GetById(serviceReportId)).ReturnsAsync((ServiceReport?)null).Verifiable();
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
            ServiceReport updateServiceReport = GetTestUpdateServiceReport();
            ServiceReport? serviceReport = GetTestServiceReports().FirstOrDefault(s => s.Id == serviceReportId);
            Mock<IServiceReportRepository> mockServiceReportRepository = new();
            var serviceReportController = new ServiceReportController(mockServiceReportRepository.Object);

            //Act
            var result = await serviceReportController.UpdateServiceReport(serviceReportId, updateServiceReport);

            // Assert
            Assert.IsType<BadRequestObjectResult>(result);
        }

        private IEnumerable<ServiceReport> GetTestServiceReports()
        {
            var serviceReports = new List<ServiceReport>();
            serviceReports.Add(new ServiceReport()
            {
                ServiceDate = new DateTime(2022, 8, 18),
                Id = 1,
                ServiceType = "Sunday",
                ServiceReview = "This is the review.",
                Attendance = 12322,
                CreatedOn = new DateTime(2022, 8, 18),
                SoulsSaved = 23232,
                Firsttimers = 4232
            });

            serviceReports.Add(new ServiceReport()
            {
                ServiceDate = new DateTime(2022, 6, 20),
                Id = 2,
                ServiceType = "Wednesday",
                ServiceReview = "This is the review.",
                Attendance = 12323232,
                CreatedOn = new DateTime(2022, 6, 20),
                SoulsSaved = 3343,
                Firsttimers = 433
            });

            return serviceReports;
        }

        private ServiceReport GetTestUpdateServiceReport()
        {
            return new ServiceReport()
            {
                ServiceDate = new DateTime(2022, 8, 18),
                Id = 3,
                ServiceType = "Wednesday",
                ServiceReview = "This is the review.",
                Attendance = 13322,
                CreatedOn = new DateTime(2022, 8, 18),
                SoulsSaved = 43232,
                Firsttimers = 4232
            };
        }

    }
}