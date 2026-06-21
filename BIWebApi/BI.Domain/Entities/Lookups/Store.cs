using BI.Domain.Entities.Base;
using BI.Domain.Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace BI.Domain.Entities.Lookups
{
    public class Store : BaseLookup
    {
        public string Address { get; set; } = string.Empty;
        public Employee? Agent { get; set; }
        public Guid AgentId { get; set; }
        public Region? Region { get; set; }
        public Guid RegionId { get; set; }
    }
}
