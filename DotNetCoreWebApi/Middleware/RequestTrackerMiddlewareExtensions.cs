using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreWebApi.Middleware
{
    public static class RequestTrackerMiddlewareExtensions
    {
        public static IApplicationBuilder UseRequestTracker(
            this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<RequestTrackerMiddleware>();
        }
    }
}
