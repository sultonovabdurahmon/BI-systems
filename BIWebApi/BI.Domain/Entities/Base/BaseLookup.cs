using System;
using System.Collections.Generic;
using System.Text;

namespace BI.Domain.Entities.Base
{
    public class BaseLookup : BaseEntity 
    {
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;

    }
}
