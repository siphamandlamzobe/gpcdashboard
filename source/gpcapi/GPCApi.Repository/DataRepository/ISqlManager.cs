
using System.Data;

namespace GPCApi.Repository
{
    public interface ISqlManager
    {
        IDbConnection DbConnection { get; set; }
    }
}