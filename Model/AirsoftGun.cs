using AirsoftBase.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace AirsoftBase
{
    public class AirsoftGun
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Brand is Required!")]
        public string Brand { get; set; }

        [Required(ErrorMessage = "Type is Required!")]
        public string Type { get; set; }

        [Required(ErrorMessage = "Name is Required!")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Magazine size is Required!")]
        [Range(0, 1000, ErrorMessage = "Magazine size is out of range!")]
        public int MagazineSize { get; set; }

        [Required(ErrorMessage = "FPS is Required!")]
        [Range(0, 1000, ErrorMessage = "FPS is out of range!")]
        public int FPS { get; set; }

        [Required(ErrorMessage = "Caliber is Required!")]
        [Range(0, 50, ErrorMessage = "Caliber is out of range!")]
        public double Caliber { get; set; }

        [Required(ErrorMessage = "Joule is Required!")]
        [Range(0, 20, ErrorMessage = "Joule is out of range!")]
        public double Joule { get; set; }

        [Required(ErrorMessage = "Gearbox is Required!")]
        public string GearBox { get; set; }

        [Range(10, 400, ErrorMessage = "Lenght is out of range!")]
        public int Lenght { get; set; }

        [Range(1, 100, ErrorMessage = "Weight is out of range!")]
        public double Weight { get; set; }

        public bool Battery { get; set; }

        [Required(ErrorMessage = "Description is Required!")]
        [StringLength(1000)]
        public string Description { get; set; }

        [Range(0, 5000, ErrorMessage = "wrong price!")]
        public double Price { get; set; }

        [JsonIgnore]
        public Clients clients { get; set; }


    }
}