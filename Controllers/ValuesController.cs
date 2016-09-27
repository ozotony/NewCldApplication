using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication4.Controllers
{
    [Authorize]
    public class ValuesController : ApiController
    {
        // GET api/values
        
        String pp = "";
        [AllowAnonymous]
        [Route("GetLogged")]
        public IHttpActionResult Get()
        {


            var user = Request.GetOwinContext().Authentication.User;
            return Ok("Welcome, " + user.Identity.Name);
        }
     

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
