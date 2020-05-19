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
    public class GroupsController : ControllerBase
    {
        private readonly Context ctxt;
        public GroupsController(Context ctxt)
        {
            this.ctxt = ctxt;
        }

        public ActionResult<Group[]> Get()
        {
            if (this.ctxt.Groups == null)
            {
                return NotFound("no data found");
            }

            return this.ctxt.Groups.ToArray();
        }
        public ActionResult<Group> Details(int id)
        {

            var result = ctxt.Groups
                .SingleOrDefault(c => c.GroupId == id);
            if (result != null)
            {
                return (result);

            }
            else return NotFound($"Id {id} not found");
        }
        [HttpPost]
        public IActionResult AddGroup([FromBody] Group g)
        {
            ctxt.Groups.Add(g);
            ctxt.SaveChanges();

            return Created("", g);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Group>> Delete(int id)
        {
            var result = await ctxt.Groups.FindAsync(id);
            if (result == null)
            {
                return NotFound($"Id {id} not found");
            }

            ctxt.Groups.Remove(result);
            await ctxt.SaveChangesAsync();

            return result;
        }
    }
}