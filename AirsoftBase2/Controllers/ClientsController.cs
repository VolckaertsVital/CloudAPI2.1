using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AirsoftBase.Model;
using Microsoft.AspNetCore.Mvc;

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
        public ActionResult<Clients[]> Get()
        {
            if (this.ctxt.Clients == null)
            {
                return NotFound("no data found");
            }

            return this.ctxt.Clients.ToArray();
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<Clients> Details(int id)
        {

            var result = ctxt.Clients.FirstOrDefault(c => c.Id == id);
            if (result != null)
            {
                return (result);

            }
            else return NotFound($"Id {id} not found");
        }
    }
}