using GPCApi.Repository.DataModels;
using PeanutButter.RandomGenerators;

namespace GPCApi.Tests.Utils;

internal class ServiceReportBuilder : GenericBuilder<ServiceReportBuilder, ServiceReport>
{
    private readonly List<Action<ServiceReport>> _propSetter = new();

    //internal ServiceReportBuilder WithProp(Action<ServiceReport> propSetter)
    //{
    //    _propSetter.Add(propSetter);
    //    return this;
    //}

    internal ServiceReportBuilder WithId(int id)
    {
        return WithProp(x => x.Id = id);
    }

    internal ServiceReportBuilder WithServiceDate(DateTime serviceDate)
    {
        return WithProp(x => x.ServiceDate = serviceDate);
    }

    internal ServiceReportBuilder WithServiceType(string serviceType)
    {
        return WithProp(x => x.ServiceType = serviceType);
    }

    internal ServiceReportBuilder WithServiceReview(string serviceReview)
    {
        return WithProp(x => x.ServiceReview = serviceReview);
    }

    internal ServiceReportBuilder WithCreatedOn(DateTime createdOn)
    {
        return WithProp(x => x.CreatedOn = createdOn);
    }

    internal ServiceReportBuilder WithAttendance(int attendance)
    {
        return WithProp(x => x.Attendance = attendance);
    }

    internal ServiceReportBuilder WithSoulsSaved(int soulsSaved)
    {
        return WithProp(x => x.SoulsSaved = soulsSaved);
    }

    internal ServiceReportBuilder WithFirsttimers(int firsttimers)
    {
        return WithProp(x => x.Attendance = firsttimers);
    }
}
