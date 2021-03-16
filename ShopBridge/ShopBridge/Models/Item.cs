using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShopBridge.Models
{
    public class Item
    {
        public int Item_id { get; set; }
        public string Item_Name { get; set; }
        public string Item_Description { get; set; }

        public int Item_Price { get; set; }
    }
}