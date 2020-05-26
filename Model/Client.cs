using AirsoftBase2.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace AirsoftBase.Model
{
    public class Client
    {
        public Client()
        {
            //this.groups = new HashSet<Groups>();
        }

        [Key]
        public int Id { get; set; }
        public List<ClientGroup> clientsGroups { get; set; }

        [Required(ErrorMessage = "FirstName is Required!")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "LastName is Required!")]
        public string LastName { get; set; }

        [DataType(DataType.Date)]
        [Required(ErrorMessage = "BirthDate is Required!")]
        public DateTime BirthDate { get; set; }
        public String PhoneNumber { get; set; }

        [Required(ErrorMessage = "PostalCode is Required!")]
        public int PostalCode { get; set; }


        public ICollection<AirsoftGun> Airsoft { get; set; }
        [JsonIgnore]
        public ICollection<ClientGroup> ClientsGroups { get; set; }

        //[JsonIgnore]
        //public ICollection<Groups> groups { get; set; }


    }
}
