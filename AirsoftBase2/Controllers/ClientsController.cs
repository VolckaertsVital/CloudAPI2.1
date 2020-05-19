using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AirsoftBase.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AirsoftBase.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientsController : ControllerBase
    {
        private readonly Context ctxt;
        public ClientsController(Context ctxt)
        {
            this.ctxt = ctxt;
        }

        [HttpGet]
        public ActionResult<Client[]> Get()
        {
            if (this.ctxt.Clients == null)
            {
                return NotFound("no data found");
            }

            return this.ctxt.Clients.ToArray();
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<Client> Details(int id)
        {

            var result = ctxt.Clients
                .Include(a => a.Airsoft)
                .SingleOrDefault(c => c.ClientId == id);
            if (result != null)
            {
                return (result);

            }
            else return NotFound($"Id {id} not found");
        }

        [HttpPost]
        public IActionResult AddClient([FromBody] Client C)
        {
            ctxt.Clients.Add(C);
            ctxt.SaveChanges();

            return Created("", C);
        }
        [HttpGet]
        [Route("{id}/airsoft")]
        public Client getAirsoftsForClient(int Id)
        {
            return ctxt.Clients
                        .Include(c => c.Airsoft)
                        .SingleOrDefault(c => c.ClientId == Id);
        }
    }
}