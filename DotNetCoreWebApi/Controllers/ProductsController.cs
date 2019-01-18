using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreWebApi.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController:Controller
    {
        public IActionResult Get()
        {
            return Ok(new[] {
            new {
                id=1, name="Computer"
            },
              new   {
                    id=2, name="Laptop"
                }
            });
        }
    }
}
