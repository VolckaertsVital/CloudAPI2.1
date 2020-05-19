using AirsoftBase2.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirsoftBase.Model
{
    public class Context : DbContext
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ClientGroup>()
                        .HasKey(t => new { t.ClientId, t.GroupId });

            modelBuilder.Entity<ClientGroup>()
                         .HasOne(pt => pt.Clients)
                         .WithMany(p => p.clientsGroups)
                         .HasForeignKey(pt => pt.ClientId);

            modelBuilder.Entity<ClientGroup>()
                        .HasOne(pt => pt.Groups)
                        .WithMany(p => p.clientsGroups)
                        .HasForeignKey(pt => pt.GroupId);
                        
        }
        public Context(DbContextOptions<Context> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<AirsoftGun> Airsofts { get; set; }
        public DbSet<Client> Clients { get; set; }

        public DbSet<ClientGroup> ClientsGroups { get; set; }
        public DbSet<Group> Groups { get; set; }

        
    }
}
