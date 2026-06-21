using BI.Domain.Entities.Lookups;
using System;
using System.Collections.Generic;
using System.Text;

namespace BI.Domain.Entities.Models
{
    public class Sale
    {
        public DateTime SaleDate { get; set; }
        public Store? Store { get; set; }
        public Guid StoreId { get; set; }
        public Nomenclature? Nomenclature { get; set; }
        public Guid NomenclatureId { get; set; }
        public Employee? Agent { get; set; }
        public Guid AgentId { get; set; }
        public Warehouse? Warehouse { get; set; }
        public Guid WarehouseId { get; set; }
        public double Quantity { get; set; }
        public double PriceNetto { get; set; }
        public double TotalSum { get; set; }
    }
}
