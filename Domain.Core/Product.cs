﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Core
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Manufacturer { get; set; }
    }
}
