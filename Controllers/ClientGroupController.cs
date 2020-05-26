using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AirsoftBase.Model;
using AirsoftBase2.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AirsoftBase2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientGroupController : ControllerBase
    {
        private readonly Context ctxt;
        public ClientGroupController(Context ctxt)
        {
            this.ctxt = ctxt;
        }

        public ActionResult<ClientGroup[]> Get()
        {
            if (this.ctxt.ClientsGroups == null)
            {
                return NotFound("no data found");
            }

            return this.ctxt.ClientsGroups.ToArray();
        }
    }
}