using System;
using System.Collections.Generic;
using System.Text;

namespace BI.Domain.Entities.Models
{
    public class Payment
    {
        public DateTime PaymentDate { get; set; }
        public Store? Store { get; set; }
        public Guid StoreId { get; set; }
        public Employee? Agent { get; set; }
        public Guid AgentId { get; set; }
        public double Amount { get; set; }
    }
}
