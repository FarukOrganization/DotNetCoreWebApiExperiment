using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;

namespace Infrastracture
{
    public class Context:DbContext
    {
        public Context():base(@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=dbProduct;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False")
        {

        }
    }
}
