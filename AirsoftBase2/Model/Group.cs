using AirsoftBase.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace AirsoftBase2.Model
{
    public class Group
    {

        /*public Groups()
        {
            this.Clients = new HashSet<Clients>();
        }*/

        [Key]
        public int GroupId { get; set; }
        [JsonIgnore]
        public ICollection<ClientGroup> clientsGroups { get; set; }

       
        public string GroupName { get; set; }

        public int MinAge { get; set; }

        public int MaxAge { get; set; }

        public string GameType { get; set; }

        //public ICollection<Clients> Clients { get; set; }
    }
}
