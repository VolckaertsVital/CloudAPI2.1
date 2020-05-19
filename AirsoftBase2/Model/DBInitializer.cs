using AirsoftBase2.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirsoftBase.Model
{
    public class DBInititializer
    {
        public static void Init(Context ctxt)
        {
            ctxt.Database.EnsureCreated();

            
            if (!ctxt.Airsofts.Any() && !ctxt.Clients.Any() && !ctxt.Groups.Any() && !ctxt.ClientsGroups.Any())
            {
                
                var client1 = new Client()
                {
                    FirstName = "patrick",
                    LastName = "Pauwels",
                    BirthDate = new DateTime(1994, 03, 06),
                    PhoneNumber = "+32487654567",
                    PostalCode = 2980,
                    Airsoft = null,
                    //groups = null

                };
                var client2 = new Client()
                {
                    FirstName = "bert",
                    LastName = "hendricks",
                    BirthDate = new DateTime(2000, 07, 12),
                    PhoneNumber = "+32423541560",
                    PostalCode = 2930,
                    Airsoft = null
                   

                };

                var Group1 = new Group()
                {
                    GroupName = "U21",
                    MinAge = 19,
                    MaxAge = 21,
                    GameType = "free-for-all",
                    
                };

                var air1 = new AirsoftGun()
                {
                    Brand = "ARES",
                    Type = "submachine",
                    Name = "MP5",
                    MagazineSize = 100,
                    FPS = 250,
                    Caliber = 6,
                    Joule = 1,
                    GearBox = "Gas",
                    Lenght = 66,
                    Weight = 2.8,
                    Battery = false,
                    Description = "This submachine is compact and full metal.",
                    Price = 480,
                    clients = client2
                    
                    

                };

                var air2 = new AirsoftGun()
                {
                    Brand = "AEG",
                    Type = "Rifle",
                    Name = "M14",
                    MagazineSize = 400,
                    FPS = 350,
                    Caliber = 6,
                    Joule = 1.4,
                    GearBox = "version 3",
                    Lenght = 140,
                    Weight = 3.5,
                    Battery = true,
                    Description = "This Rifle is very accurate at long distance.",
                    Price = 199,
                    clients = client2

                };
                var air3 = new AirsoftGun()
                {
                    Brand = "AEG",
                    Type = "LMG",
                    Name = "M60",
                    MagazineSize = 3000,
                    FPS = 400,
                    Caliber = 6,
                    Joule = 1.2,
                    GearBox = "version 3",
                    Lenght = 110,
                    Weight = 7.5,
                    Battery = true,
                    Description = "This LMG has a verry large magazine size.",
                    Price = 850,
                    clients = client2

                };
                var air4 = new AirsoftGun()
                {
                    Brand = "Lancer Tactical",
                    Type = "Sniper",
                    Name = "Barret .50",
                    MagazineSize = 300,
                    FPS = 500,
                    Caliber = 6,
                    Joule = 1.5,
                    GearBox = "version 3",
                    Lenght = 140,
                    Weight = 3,
                    Battery = true,
                    Description = "This sniper is a semi-automatic and has a lot of power.",
                    Price = 640,
                    clients = client1,
                    
                    
                    

                };

                



                ctxt.Clients.Add(client1);
                ctxt.Clients.Add(client2);
                

                ctxt.Airsofts.Add(air1);
                ctxt.Airsofts.Add(air2);
                ctxt.Airsofts.Add(air3);
                ctxt.Airsofts.Add(air4);

                ctxt.Groups.Add(Group1);

                ctxt.SaveChanges();
            };

            
        }
    }
}

