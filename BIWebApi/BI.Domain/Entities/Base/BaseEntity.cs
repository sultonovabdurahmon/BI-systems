using System;
using System.Collections.Generic;
using System.Text;

namespace BI.Domain.Entities.Base
{
    public class BaseEntity
    {
        public Guid Id { get; set; }
        public Guid ExtId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public bool IsActive { get; set; }
    }
}
