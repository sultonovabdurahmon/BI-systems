using BI.Domain.Entities.Base;
using BI.Domain.Entities.Lookups;
using System;
using System.Collections.Generic;
using System.Text;

namespace BI.Domain.Entities.Models
{
    public class Employee : BaseEntity
    {
        public string FullName { get; set; } = string.Empty;
        public enum RoleType
        {
            Admin,
            Manager,
            Employee
        }
        public Employee? Parent { get; set; }
        public Guid ParentId { get; set; }
        public Region? Region { get; set; }
        public Guid RegionId { get; set; }
    }
}
