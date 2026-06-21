using BI.Domain.Entities.Base;
using BI.Domain.Entities.Lookups;
using System;
using System.Collections.Generic;
using System.Text;

namespace BI.Domain.Entities.Models
{
    public class Nomenclature : BaseLookup
    {
        public Brand? Brand { get; set; }
        public Guid BrandId { get; set; }
        public double Weight { get; set; }
        public string Unit { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
    }
}
