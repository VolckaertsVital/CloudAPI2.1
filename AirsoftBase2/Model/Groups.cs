using AirsoftBase.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace AirsoftBase2.Model
{
    public class Groups
    {
        [Key]
        public string GroupName { get; set; }

        public int MinAge { get; set; }

        public int MaxAge { get; set; }

        public string GameType { get; set; }

        
        public int ClientID { get; set; }
        //[JsonIgnore]
        //public ICollection<Clients> clients { get; set; }
    }
}
