using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AirsoftBase.Model
{
    public class Clients
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "FirstName is Required!")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "LastName is Required!")]
        public string LastName { get; set; }

        [DataType(DataType.Date)]
        [Required(ErrorMessage = "BirthDate is Required!")]
        public DateTime BirthDate { get; set; }

        [Required(ErrorMessage = "PostalCode is Required!")]
        public int PostalCode { get; set; }

        //public AirsoftGun Airsoft { get; set; }


    }
}
