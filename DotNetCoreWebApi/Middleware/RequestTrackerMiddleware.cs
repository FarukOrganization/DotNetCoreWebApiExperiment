using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreWebApi.Middleware
{
    public class RequestTrackerMiddleware
    {
        private readonly RequestDelegate _next;

        public RequestTrackerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var requestId = Guid.NewGuid();
            Debug.WriteLine($"Request : {requestId} - starttime :{DateTime.UtcNow} ");

            try
            {
                // Call the next delegate/middleware in the pipeline
                await _next(context);
            }
            catch(Exception ex)
            {
                Debug.WriteLine($"Request : {requestId} - Error :{ex.Message} ");
            }

            Debug.WriteLine($"Request : {requestId} - Endtime :{DateTime.UtcNow} ");

        }
    }
}
