using System;
using System.Collections.Generic;
using System.Text;

namespace BI.Domain.Entities.Models
{
    public class Stock
    {
        public DateTime StockDate { get; set; }
        public Nomenclature? Nomenclature { get; set; }
        public Guid NomenclatureId { get; set; }
        public Warehouse? Warehouse { get; set; }
        public Guid WarehouseId { get; set; }
        public double Quantity { get; set; }
    }
}
