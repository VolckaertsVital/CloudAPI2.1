using AirsoftBase.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AirsoftBase2.Model
{
    public class ClientGroup
    {
        [ForeignKey("client")]
        public int ClientId { get; set; }
        public Client Clients { get; set; }

        [ForeignKey("Group")]
        public int GroupId { get; set; }
        public Group Groups { get; set; }
    }
}
