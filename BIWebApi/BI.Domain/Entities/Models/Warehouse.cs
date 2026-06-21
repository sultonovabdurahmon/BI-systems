using BI.Domain.Entities.Base;
using BI.Domain.Entities.Lookups;
using System;
using System.Collections.Generic;
using System.Text;

namespace BI.Domain.Entities.Models
{
    public class Warehouse : BaseLookup
    {
        public Region Region { get; set; }
        public Guid RegionId { get; set; }
    }
}
