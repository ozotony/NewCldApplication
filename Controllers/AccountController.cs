using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using WebApplication4.Models;
using WebApplication4.Providers;
using WebApplication4.Results;
using Newtonsoft.Json.Linq;
using System.Web.Http.Description;
using System.Net.Http.Formatting;
using Newtonsoft.Json;
using System.Text;
using System.Linq;
using WebApplication4.Classes;
using System.Net;
using System.Threading;
using System.Xml;
using System.Net.Security;
using System.IO;
using System.Security.Cryptography.X509Certificates;
using System.Net.Mail;
using System.Data.Entity.Core.Objects;
using System.Data.OleDb;
using System.Data;
using System.Xml.Linq;
using System.Xml.Schema;
using System.Data.Entity;
using iTextSharp.text;
using iTextSharp.text.pdf;
using System.Web.UI;
using System.Net.Http.Headers;
using iTextSharp.text.html.simpleparser;
using System.Configuration;
using System.Web.Util;
using System.Security.Principal;
using WebApplication4.Model2;
using WebApplication4.Model3;

namespace WebApplication4.Controllers
{
    [Authorize]
    [RoutePrefix("api/Account")]
  
    public class AccountController : ApiController
    {
        private const string LocalLoginProvider = "Local";
        private ApplicationUserManager _userManager;
        private ApplicationDbContext db;
       
        //  private  ba2xai_xhome_backupEntities db2 ;

        // private ba2xai_xpay_backupEntities db3;

        private Model1 db4;

        private Model4 db2;


        public AccountController()
        {
             db = new ApplicationDbContext();
           // db2 = new  ba2xai_xhome_backupEntities();
          // db3 = new ba2xai_xpay_backupEntities();
            db4 = new Model1();
            db2 = new Model4();



        }

        public AccountController(ApplicationUserManager userManager,
            ISecureDataFormat<AuthenticationTicket> accessTokenFormat)
        {
            UserManager = userManager;
            AccessTokenFormat = accessTokenFormat;
        }

        [AllowAnonymous]
        [Route("GetLogged")]
        public IHttpActionResult Get()
        {
          string pp=  Request.GetOwinContext().Get<String>("client_id");

           

            var user = Request.GetOwinContext().Authentication.User;
           


            return Ok("Welcome, " + user.Identity.Name);
        }
     


        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? Request.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }

        public ISecureDataFormat<AuthenticationTicket> AccessTokenFormat { get; private set; }

        // GET api/Account/UserInfo

        private ApplicationRoleManager _AppRoleManager = null;
 
	protected ApplicationRoleManager AppRoleManager
	{
		get
		{
			return _AppRoleManager ?? Request.GetOwinContext().GetUserManager<ApplicationRoleManager>();
		}
	}

      
        [HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        [Route("UserInfo")]
        public UserInfoViewModel GetUserInfo()
        {
            ExternalLoginData externalLogin = ExternalLoginData.FromIdentity(User.Identity as ClaimsIdentity);

            

            return new UserInfoViewModel
            {
                


                Email = User.Identity.GetUserName(),
                HasRegistered = externalLogin == null,
                LoginProvider = externalLogin != null ? externalLogin.LoginProvider : null
            };
        }
    

       


        // POST api/Account/AddExternalLogin
        [Route("AddExternalLogin")]
        public async Task<IHttpActionResult> AddExternalLogin(AddExternalLoginBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Authentication.SignOut(DefaultAuthenticationTypes.ExternalCookie);

            AuthenticationTicket ticket = AccessTokenFormat.Unprotect(model.ExternalAccessToken);

            if (ticket == null || ticket.Identity == null || (ticket.Properties != null
                && ticket.Properties.ExpiresUtc.HasValue
                && ticket.Properties.ExpiresUtc.Value < DateTimeOffset.UtcNow))
            {
                return BadRequest("External login failure.");
            }

            ExternalLoginData externalData = ExternalLoginData.FromIdentity(ticket.Identity);

            if (externalData == null)
            {
                return BadRequest("The external login is already associated with an account.");
            }

            IdentityResult result = await UserManager.AddLoginAsync(User.Identity.GetUserId(),
                new UserLoginInfo(externalData.LoginProvider, externalData.ProviderKey));

            if (!result.Succeeded)
            {
                return GetErrorResult(result);
            }

            return Ok();
        }

        // POST api/Account/RemoveLogin
        [Route("RemoveLogin")]
        public async Task<IHttpActionResult> RemoveLogin(RemoveLoginBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IdentityResult result;

            if (model.LoginProvider == LocalLoginProvider)
            {
                result = await UserManager.RemovePasswordAsync(User.Identity.GetUserId());
            }
            else
            {
                result = await UserManager.RemoveLoginAsync(User.Identity.GetUserId(),
                    new UserLoginInfo(model.LoginProvider, model.ProviderKey));
            }

            if (!result.Succeeded)
            {
                return GetErrorResult(result);
            }

            return Ok();
        }

        // GET api/Account/ExternalLogin
        [OverrideAuthentication]
        [HostAuthentication(DefaultAuthenticationTypes.ExternalCookie)]
        [AllowAnonymous]
        [Route("ExternalLogin", Name = "ExternalLogin")]
        public async Task<IHttpActionResult> GetExternalLogin(string provider, string error = null)
        {
            if (error != null)
            {
                return Redirect(Url.Content("~/") + "#error=" + Uri.EscapeDataString(error));
            }

            if (!User.Identity.IsAuthenticated)
            {
                return new ChallengeResult(provider, this);
            }

            ExternalLoginData externalLogin = ExternalLoginData.FromIdentity(User.Identity as ClaimsIdentity);

            if (externalLogin == null)
            {
                return InternalServerError();
            }

            if (externalLogin.LoginProvider != provider)
            {
                Authentication.SignOut(DefaultAuthenticationTypes.ExternalCookie);
                return new ChallengeResult(provider, this);
            }

            ApplicationUser user = await UserManager.FindAsync(new UserLoginInfo(externalLogin.LoginProvider,
                externalLogin.ProviderKey));

            bool hasRegistered = user != null;

            if (hasRegistered)
            {
                Authentication.SignOut(DefaultAuthenticationTypes.ExternalCookie);
                
                 ClaimsIdentity oAuthIdentity = await user.GenerateUserIdentityAsync(UserManager,
                    OAuthDefaults.AuthenticationType);
                ClaimsIdentity cookieIdentity = await user.GenerateUserIdentityAsync(UserManager,
                    CookieAuthenticationDefaults.AuthenticationType);

                AuthenticationProperties properties = ApplicationOAuthProvider.CreateProperties(user.UserName);
                Authentication.SignIn(properties, oAuthIdentity, cookieIdentity);
            }
            else
            {
                IEnumerable<Claim> claims = externalLogin.GetClaims();
                ClaimsIdentity identity = new ClaimsIdentity(claims, OAuthDefaults.AuthenticationType);
                Authentication.SignIn(identity);
            }

            return Ok();
        }

        // GET api/Account/ExternalLogins?returnUrl=%2F&generateState=true
        [AllowAnonymous]
        [Route("ExternalLogins")]
        public IEnumerable<ExternalLoginViewModel> GetExternalLogins(string returnUrl, bool generateState = false)
        {
            IEnumerable<AuthenticationDescription> descriptions = Authentication.GetExternalAuthenticationTypes();
            List<ExternalLoginViewModel> logins = new List<ExternalLoginViewModel>();

            string state;

           

            if (generateState)
            {
                const int strengthInBits = 256;
                state = RandomOAuthStateGenerator.Generate(strengthInBits);
            }
            else
            {
                state = null;
            }

            foreach (AuthenticationDescription description in descriptions)
            {
                ExternalLoginViewModel login = new ExternalLoginViewModel
                {
                    Name = description.Caption,
                    Url = Url.Route("ExternalLogin", new
                    {
                        provider = description.AuthenticationType,
                        response_type = "token",
                        client_id = Startup.PublicClientId,
                        redirect_uri = new Uri(Request.RequestUri, returnUrl).AbsoluteUri,
                        state = state
                    }),
                    State = state
                };
                logins.Add(login);
            }

            return logins;
        }
       //[Authorize]
       // [Route("Register2")]
       // [HttpGet]
       // public async Task<IHttpActionResult> Register2(RegisterBindingModel model)
       // {
       //     return Ok();
       // }


        [HttpGet]
        [AllowAnonymous]
      
  public IHttpActionResult GetExternalLogin2()
  {

            db.Configuration.ProxyCreationEnabled = false;


            bool kk = User.Identity.IsAuthenticated;
     // return new ChallengeResult("Facebook", this);

    
    //  return new ChallengeResult("Facebook", Url.Action("ExternalLoginCallback", "Account", new { ReturnUrl = returnUrl }));
      return new ChallengeResult2("Facebook", "/api/Account/GetLogged", this.Request);
  }

        // POST api/Account/Register
      

        
      


       

        


        

        





      
        









        

        


       

        


 

        protected override void Dispose(bool disposing)
        {
            if (disposing && _userManager != null)
            {
                _userManager.Dispose();
                _userManager = null;
            }

            base.Dispose(disposing);
        }

        #region Helpers

        private IAuthenticationManager Authentication
        {
            get { return Request.GetOwinContext().Authentication; }
        }

        private IHttpActionResult GetErrorResult(IdentityResult result)
        {
            if (result == null)
            {
                return InternalServerError();
            }

            if (!result.Succeeded)
            {
                if (result.Errors != null)
                {
                    foreach (string error in result.Errors)
                    {
                        ModelState.AddModelError("", error);
                    }
                }

                if (ModelState.IsValid)
                {
                    // No ModelState errors are available to send, so just return an empty BadRequest.
                    return BadRequest();
                }

                return BadRequest(ModelState);
            }

            return null;
        }

        private class ExternalLoginData
        {
            public string LoginProvider { get; set; }
            public string ProviderKey { get; set; }
            public string UserName { get; set; }

            public IList<Claim> GetClaims()
            {
                IList<Claim> claims = new List<Claim>();
                claims.Add(new Claim(ClaimTypes.NameIdentifier, ProviderKey, null, LoginProvider));

                if (UserName != null)
                {
                    claims.Add(new Claim(ClaimTypes.Name, UserName, null, LoginProvider));
                }

                return claims;
            }

            public static ExternalLoginData FromIdentity(ClaimsIdentity identity)
            {
                if (identity == null)
                {
                    return null;
                }

                Claim providerKeyClaim = identity.FindFirst(ClaimTypes.NameIdentifier);

                if (providerKeyClaim == null || String.IsNullOrEmpty(providerKeyClaim.Issuer)
                    || String.IsNullOrEmpty(providerKeyClaim.Value))
                {
                    return null;
                }

                if (providerKeyClaim.Issuer == ClaimsIdentity.DefaultIssuer)
                {
                    return null;
                }

                return new ExternalLoginData
                {
                    LoginProvider = providerKeyClaim.Issuer,
                    ProviderKey = providerKeyClaim.Value,
                    UserName = identity.FindFirstValue(ClaimTypes.Name)
                };
            }
        }

        private static class RandomOAuthStateGenerator
        {
            private static RandomNumberGenerator _random = new RNGCryptoServiceProvider();

            public static string Generate(int strengthInBits)
            {
                const int bitsPerByte = 8;

                if (strengthInBits % bitsPerByte != 0)
                {
                    throw new ArgumentException("strengthInBits must be evenly divisible by 8.", "strengthInBits");
                }

                int strengthInBytes = strengthInBits / bitsPerByte;

                byte[] data = new byte[strengthInBytes];
                _random.GetBytes(data);
                return HttpServerUtility.UrlTokenEncode(data);
            }
        }


        #endregion

        static object locker2 = new object();
        static string Generate15UniqueDigits2()
        {
            lock (locker2)
            {
                Thread.Sleep(100);
                return "SX" + DateTime.Now.ToString("yyyyMMddHHmmssf");
            }
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("CreateMenu")]
        public async Task<IHttpActionResult> CreateMenu(Model2.TopMenu model)
        {
            model.Menu_Code = Generate15UniqueDigits2();
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}



           // var _db = new ApplicationDbContext();

            db4.TopMenu.Add(model);
            db4.SaveChanges();
            // Uri locationHeader = new Uri(Url.Link("GetRoleById", new { id = role.Id }));
            return Ok();

            //  return Created(locationHeader, TheModelFactory.Create(role));

        }

        [AllowAnonymous]
        [Route("CreateRole")]
        [HttpPost]
        public async Task<IHttpActionResult> CreateRole(GetMenu model)
        {
            var pp = "";

            var role = new IdentityRole { Name = model.bb.Name };

            var result = await this.AppRoleManager.CreateAsync(role);

            if (!result.Succeeded)
            {


                return GetErrorResult(result);
            }

            else
            {
               // var _db = new ApplicationDbContext();
                foreach (var pp2 in model.cc)
                {
                    var dd = model.bb;
                   // var ccd = (from c in db4.RolesPriviledges where c.RoleName == pp2.RoleName select c).ToList();
                    var ccd = (from c in db4.RolesPriviledges where c.RoleName == dd.Name select c).ToList();

                    if (ccd.Count > 0)
                    {
                        db4.RolesPriviledges.RemoveRange(ccd);
                        db4.SaveChanges();

                    }


                }

                foreach (var pp2 in model.cc)
                {
                    if (pp2.CreateNew == null)
                    {
                        pp2.CreateNew = "false";

                    }

                    if (pp2.DeleteNew == null)
                    {
                        pp2.DeleteNew = "false";

                    }

                    if (pp2.UpadateNew == null)
                    {
                        pp2.UpadateNew = "false";

                    }
                    if (pp2.View == null)
                    {
                        pp2.View = "false";

                    }

                    db4.RolesPriviledges.Add(pp2);


                }

                db4.SaveChanges();
            }


            return Ok();



        }


        [Authorize]
        [Route("AssignUserRole")]
        [HttpPost]
        public async Task<IHttpActionResult> AssignUserRole(UserRole model)
        //public async Task<HttpResponseMessage>  Register2()
        {


          //  ApplicationUser vv2 = UserManager.FindByEmail(model.username);



            // string currentUserId = User.Identity.GetUserId();

            //IList<String> vv3 = UserManager.GetRoles(vv2.Id);
            //if (vv3.Count > 0)
            //{
            //    UserManager.RemoveFromRoles(vv2.Id, vv3.ToArray());
            //}

            //foreach (var xxx in vv3)
            //{

            //    DeleteRole44(xxx);
            //}



            ApplicationUser vv = await UserManager.FindByEmailAsync(model.username);




            IdentityResult result = await UserManager.AddToRoleAsync(vv.Id, model.rolename);



            return Ok();

        }

        [Route("GetRoles3")]
        [Authorize]

        public IList<String> GetRoles3([FromUri] String property1)
        {
            var _db = new ApplicationDbContext();

            ApplicationUser vv2 = UserManager.FindByEmail(property1);



            // string currentUserId = User.Identity.GetUserId();

            IList<String> vv = UserManager.GetRoles(vv2.Id);





            return vv;
        }


        [Authorize]
        [Route("GetAllRoles2")]
        [HttpGet]
        public List<String> GetAllRoles2()
        {
            var _db = new ApplicationDbContext();
            _db.Configuration.ProxyCreationEnabled = false;

            var pp = System.Web.HttpContext.Current.Request["RegisterBindingModel"];

           // ProductParam foo = Newtonsoft.Json.JsonConvert.DeserializeObject<ProductParam>(pp) as ProductParam;

            //   int vproductId = Convert.ToInt32(foo.ProductId);

              string currentUserId = User.Identity.GetUserId();
            List<String> dd = new List<String>();
            dd.Add(currentUserId);

           // var ccd = (from c in _db.Roles select c.Name).ToList();





            return dd;
        }


       


        [Route("DeleteRole")]
        [HttpGet]
        [Authorize]
        public async Task<IHttpActionResult> DeleteRole([FromUri] String property1)
        {


            var role = await this.AppRoleManager.FindByNameAsync(property1);

            if (role != null)
            {
                IdentityResult result = await this.AppRoleManager.DeleteAsync(role);

                if (!result.Succeeded)
                {
                    return GetErrorResult(result);
                }

                return Ok();
            }

            return NotFound();

        }


        [Route("GetFee")]
        [AllowAnonymous]
        [HttpGet]
        public List<FeeListReport> GetFee()
        {

            var pp4 = User.Identity.Name;
            var itemcode = new[] { "T003", "T008" };
            var ccd = (from c in db2.fee_list where c.xcategory == "tm" && !itemcode.Contains(c.item_code) select c).ToList();
            List<FeeListReport> ff = new List<FeeListReport>();
            int vcount = 0;

            foreach (var pp in ccd)
            {
                vcount = vcount + 1;

                FeeListReport xxs = new FeeListReport();

                xxs.init_amt = pp.init_amt;
                xxs.item = pp.item;
                xxs.item_code = pp.item_code;
                xxs.qt_code = "";
                xxs.tech_amt = pp.tech_amt;
                xxs.xcategory = pp.xcategory;
                xxs.xdesc = pp.xdesc;
                xxs.xid = pp.xid;
                xxs.amt = pp.init_amt + pp.tech_amt;

                xxs.sn = vcount;

                xxs.showbtn = true;
                xxs.showbtn2 = false;

                ff.Add(xxs);

            }


          





            return ff;
        }

        [Route("GetTopMenu")]
        [AllowAnonymous]
        [HttpGet]
        public List<Model2.TopMenu> GetTopMenu()
        {
            var _db = new ApplicationDbContext();

            // string currentUserId = User.Identity.GetUserId();
            //  IdentityRole cc = new IdentityRole();
            var ccd = (from c in db4.TopMenu select c).ToList();

            //   ApplicationUser currentUser = _db.Users.FirstOrDefault(x => x.Id == currentUserId);





            return ccd;
        }

        [Route("GetTopMenu2")]
        [AllowAnonymous]
        [HttpGet]
        public List<Model2.RolesPriviledges> GetTopMenu2([FromUri] String property1)
        {
            var _db = new ApplicationDbContext();

            // string currentUserId = User.Identity.GetUserId();
            //  IdentityRole cc = new IdentityRole();
            var ccd = (from c in db4.RolesPriviledges    
                     //  join p in db4.TopMenu    on new { a = c.Menu_Code } equals new { a = p.Menu_Code }
                       join p in db4.TopMenu on new { a = c.Menu_Code } equals new { a = p.Menu_Code }
                      into ps
                       from p   in ps.DefaultIfEmpty()
                       where (c.RoleName == property1)
                     
                       select new { p.Menu_Name, c.CreateNew, c.DeleteNew, c.UpadateNew, c.View, c.RoleName }).ToList();

            List<Model2.RolesPriviledges> dp = new List<Model2.RolesPriviledges>();
            foreach (var ddp in ccd)
            {
                Model2.RolesPriviledges pp2 = new Model2.RolesPriviledges();
                pp2.CreateNew = ddp.CreateNew;
                pp2.DeleteNew = ddp.DeleteNew;
                pp2.Menu_Code = ddp.Menu_Name;
                pp2.UpadateNew = ddp.UpadateNew;
                pp2.View = ddp.View;
                pp2.RoleName = ddp.RoleName;
                dp.Add(pp2);

            }

            //   ApplicationUser currentUser = _db.Users.FirstOrDefault(x => x.Id == currentUserId);





            return dp;
        }

        public void DeletePriveleges(string vrolesname)
        {
           // var _db = new ApplicationDbContext();
            var ccd = (from c in db4.RolesPriviledges where c.RoleName == vrolesname select c).ToList();
            db4.RolesPriviledges.RemoveRange(ccd);

            db4.SaveChanges();
        }


        public String GetMenuName(string menucode)
        {
            //var _db = new ApplicationDbContext();
            var ccd = (from c in db4.TopMenu where c.Menu_Name == menucode select c).FirstOrDefault();
            return ccd.Menu_Code;
        }

        [Authorize]
        [Route("CreateRole2")]
        [HttpPost]
        public async Task<IHttpActionResult> CreateRole2(GetMenu model)
        {
            var pp = "";

           // DeletePriveleges(model.bb.Name);
            var _db = new ApplicationDbContext();

            // var _db = new ApplicationDbContext();
            var dc = model.bb;
            foreach (var pp2 in model.cc)
            {
                var ccd = (from c in db4.RolesPriviledges where c.RoleName == dc.Name select c).ToList();

                if (ccd.Count > 0)
                {
                    db4.RolesPriviledges.RemoveRange(ccd);
                    db4.SaveChanges();

                }


            }
            foreach (var pp2 in model.cc)
            {
                if (pp2.CreateNew == null)
                {
                    pp2.CreateNew = "false";

                }

                if (pp2.DeleteNew == null)
                {
                    pp2.DeleteNew = "false";

                }

                if (pp2.UpadateNew == null)
                {
                    pp2.UpadateNew = "false";

                }
                if (pp2.View == null)
                {
                    pp2.View = "false";

                }
                pp2.Menu_Code = GetMenuName(pp2.Menu_Code);
                db4.RolesPriviledges.Add(pp2);


            }
            try
            {
                db4.SaveChanges();

            }

            catch (Exception ee)
            {
                var dx = ee.Message;
            }



            return Ok();



        }

        [Route("GetRoles")]
        [AllowAnonymous]
        public List<String> GetRoles()
        {
            var _db = new ApplicationDbContext();

            string currentUserId = User.Identity.GetUserId();
            IdentityRole cc = new IdentityRole();
            var ccd = (from c in _db.Roles select c.Name).ToList();


            //   ApplicationUser currentUser = _db.Users.FirstOrDefault(x => x.Id == currentUserId);





            return ccd;
        }

        [Route("GetFee2")]
        [AllowAnonymous]
        [HttpGet]
        public List<FeeListReport> GetFee2()
        {

            var itemcode = new[] { "T003", "T008" };
            var ccd = (from c in db2.fee_list where c.xcategory == "pt" select c).ToList();
            List<FeeListReport> ff = new List<FeeListReport>();
            int vcount = 0;

            foreach (var pp in ccd)
            {
                vcount = vcount + 1;

                FeeListReport xxs = new FeeListReport();

                xxs.init_amt = pp.init_amt;
                xxs.item = pp.item;
                xxs.item_code = pp.item_code;
                xxs.qt_code = "";
                xxs.tech_amt = pp.tech_amt;
                xxs.xcategory = pp.xcategory;
                xxs.xdesc = pp.xdesc;
                xxs.xid = pp.xid;
                xxs.amt = pp.init_amt + pp.tech_amt;

                xxs.sn = vcount;

                xxs.showbtn = true;
                xxs.showbtn2 = false;

                ff.Add(xxs);

            }


            //   Model2.ApplicationUser currentUser = _db.Users.FirstOrDefault(x => x.Id == currentUserId);





            return ff;
        }

        [Route("GetFee3")]
        [AllowAnonymous]
        [HttpGet]
        public List<FeeListReport> GetFee3()
        {

            var itemcode = new[] { "T003", "T008" };
            var ccd = (from c in db2.fee_list where c.xcategory == "ds" select c).ToList();
            List<FeeListReport> ff = new List<FeeListReport>();
            int vcount = 0;

            foreach (var pp in ccd)
            {
                vcount = vcount + 1;

                FeeListReport xxs = new FeeListReport();

                xxs.init_amt = pp.init_amt;
                xxs.item = pp.item;
                xxs.item_code = pp.item_code;
                xxs.qt_code = "";
                xxs.tech_amt = pp.tech_amt;
                xxs.xcategory = pp.xcategory;
                xxs.xdesc = pp.xdesc;
                xxs.xid = pp.xid;
                xxs.amt = pp.init_amt + pp.tech_amt;

                xxs.sn = vcount;

                xxs.showbtn = true;
                xxs.showbtn2 = false;

                ff.Add(xxs);

            }


            //   Model2.ApplicationUser currentUser = _db.Users.FirstOrDefault(x => x.Id == currentUserId);





            return ff;
        }



        [Route("PaymentDetail")]
        [AllowAnonymous]
        [HttpPost]
        public XObjs.InterSwitchPostFields PaymentDetail(Shopping_card2 pp4)
        {
            XObjs.InterSwitchPostFields xispf = pp4.ff;
            Registration reg = new Registration();

            int tw_cnt = 0; Retriever ret = new Retriever();
            tw_cnt = ret.getTransIDCnt(xispf.txn_ref.Trim());

            int vcount3 = ret.getCountTrans(xispf.txn_ref.Trim());
            if (vcount3 > 0)
            {

                return null; ;
            }
            int addIsw_succ = reg.addInterSwitchRecords(xispf);

            if (addIsw_succ > 0)
            {
                int update_twallxgt_succ = reg.updateTwalletXgt(xispf.txn_ref, "xpay_isw", pp4.dd.xid);

            }
            var session = HttpContext.Current.Session;
            session["Shopping_card2"] = pp4;
            session["TransactionidID"] = xispf.txn_ref.Trim();
           
            return xispf;

        }

        [Route("AddFeeList")]
        [AllowAnonymous]
        [HttpPost]
        public XObjs.Twallet AddFeeList(Shopping_card2 pp4)
        {
            var cc = "";

  

           
              var   c_app = pp4.bb;
            Registration reg = new Registration();
            int num = reg.addApplicant(c_app);
            XObjs.Registration c_reg = pp4.dd;
            var lt_cart = pp4.cc;
          var   fullname = c_reg.Firstname + " " + c_reg.Surname;
          var   email = c_reg.Email;
           var  mobile = c_reg.PhoneNumber;
            Retriever ret = new Retriever();
            List<XObjs.Twallet> lt_twall = new List<XObjs.Twallet>();
            XObjs.Twallet twall = new XObjs.Twallet();
            XObjs.Fee_details f_dets = new XObjs.Fee_details();
            XObjs.Hwallet c_hwall = new XObjs.Hwallet();
            int xtotal_amt = 0;
            string transID = "";
            string ref_no = "";
            string xreg_date = DateTime.Now.ToString("yyyy-MM-dd");
            if ((num > 0) )
            {
             
             //   scard = ret.getRandomScard();
                string vtransid = Generate15UniqueDigits(); ;
                //  lt_twall = ret.getTwalletByMemberID(adminID, scard.xnum, Session["AgentType"].ToString());
                lt_twall = ret.getTwalletByMemberID(c_reg.xid, vtransid, "agent");
                if (lt_twall.Count == 0)
                {

                    // transID = scard.xnum.ToUpper();
                    transID = vtransid;
                    int num2 = 0;
                    int num3 = 0;
                    // twall.ref_no = "X" + adminID + "-" + DateTime.Now.ToString("yyyy") + "-" + scard.xnum;

                    twall.ref_no = "X" + c_reg.xid + "-" + DateTime.Now.ToString("yyyy") + "-" + transID;
                    ref_no = twall.ref_no;
                    //   twall.transID = scard.xnum;
                    twall.transID = transID;
                    twall.xbankerID = "0";
                    twall.xgt = "xpay";
                    twall.xmemberID = c_reg.xid;
                    twall.xmembertype = "agent";
                    twall.xpay_status = "2";
                    twall.applicantID = num.ToString();
                    twall.xreg_date = xreg_date;
                    twall.xsync = "0";
                    twall.xvisible = "1";
                    num2 = reg.addTwallet(twall);
                    twall.xid =Convert.ToString(num2);
                    if (num2 > 0)
                    {
                       
                        int num4 = 0;
                        foreach (var _card in lt_cart)
                        {
                            f_dets.twalletID = num2.ToString();
                            f_dets.fee_listID =Convert.ToString(_card.xid);
                            f_dets.xlogstaff = c_reg.xid;
                            f_dets.xqty = Convert.ToString(_card.qty);
                            f_dets.xused = "0";
                            f_dets.tot_amt = _card.amt.ToString();
                            xtotal_amt += Convert.ToInt32(_card.amt);
                            f_dets.init_amt = Convert.ToString(_card.init_amt) ;
                            f_dets.tech_amt =Convert.ToString(_card.tech_amt) ;
                            f_dets.xreg_date = xreg_date;
                            f_dets.xsync = "0";
                            f_dets.xvisible = "1";
                            num3 = reg.addFee_details(f_dets);
                            num4++;
                            for (int i = 0; i < Convert.ToInt32(_card.qty); i++)
                            {
                                int num6 = 0;
                                c_hwall.transID = transID;// scard.xnum;
                                c_hwall.used_status = "Not Used";
                                c_hwall.product_title = "";
                                c_hwall.xreg_date = xreg_date;
                                c_hwall.used_date = "";
                                c_hwall.fee_detailsID = num3.ToString();
                                num6 = reg.addHwallet(c_hwall);
                            }
                        }
                        //if (num4 == lt_cart.Count<XObjs.Shopping_card>())
                        //{
                           

                        //    base.Response.Redirect("./m_invoicex.aspx?mx=" + adminID + "&tx=" + transID);
                        //}
                    }
                }
                else
                {
                   // AddFeeList();
                }
            }

            var session = HttpContext.Current.Session;

            session["Shopping_card2"] = pp4;
            return twall;

        }


      






        [Route("getAgentRoles")]
        [Authorize]
        [HttpGet]
        public Int32 getAgentRoles([FromUri] String property1)
        {
            var kk = "";
            var dd = User.Identity.Name;
            Retriever pp = new Retriever();
            int vcount = pp.getAgentRole(property1);

            return vcount;

        }


        [Route("getState")]
        [AllowAnonymous]
        [HttpGet]
        public List<State> getState([FromUri] String property1)
        {
            var kk = "";

            Retriever pp = new Retriever();
            return  pp.GetState(property1);

           // return vcount;

        }

        [Route("getCountry")]
        [AllowAnonymous]
        [HttpGet]
        public List<Country> getCountry()
        {
            Retriever ppx = new Retriever();
            AppStatus ddx = new AppStatus();


            return ppx.GetCountry();


        }

        [Route("getClass")]
        [AllowAnonymous]
        [HttpGet]
        public List<NClass> getClass()
        {
            Retriever ppx = new Retriever();
            AppStatus ddx = new AppStatus();


            return ppx.getJNationalClasses();


        }
        [Route("getApplicationStatus")]
        [AllowAnonymous]
        [HttpGet]
        public ApplicationStatus  getApplicationStatus([FromUri] String property1)
        {
            Retriever ppx = new Retriever();
            AppStatus ddx = new AppStatus();
            try
            {
                List<Stage> lt_pw = ppx.getStageByClientIDAcc(property1);
                List<MarkInfo> lt_mi = ppx.getMarkInfoByUserID(property1);

                SortedList<string, string> x = ddx.showTmStatus(lt_pw[0].status, lt_pw[0].data_status);

                ApplicationStatus dd = new ApplicationStatus();
                dd.ppx = x;
                dd.lt_pw = lt_pw;
                dd.vcount = lt_pw.Count;

                return dd;

            }

            catch(Exception ee)
            {
                ApplicationStatus dd = new ApplicationStatus();
                dd.ppx = null;
                dd.lt_pw = null;
                dd.vcount = 0;

                return dd;
            }



          


        }


        [Route("getApplicationStatus2")]
        [AllowAnonymous]
        [HttpGet]
        public ApplicationStatus getApplicationStatus2([FromUri] String property1)
        {
            Retriever ppx = new Retriever();
            AppStatus ddx = new AppStatus();
            try
            {

                List<MarkInfo> lt_mi = ppx.getMarkInfoByRegno(property1);
               Stage lt_pw2 = ppx.getStageClassByUserID(lt_mi[0].log_staff);
                List<Stage> lt_pw = ppx.getStageByClientIDAcc(lt_pw2.validationID);
               // List<MarkInfo> lt_mi = ppx.getMarkInfoByUserID(property1);

                SortedList<string, string> x = ddx.showTmStatus(lt_pw[0].status, lt_pw[0].data_status);

                ApplicationStatus dd = new ApplicationStatus();
                dd.ppx = x;
                dd.lt_pw = lt_pw;
                dd.vcount = lt_pw.Count;

                return dd;

            }

            catch (Exception ee)
            {
                ApplicationStatus dd = new ApplicationStatus();
                dd.ppx = null;
                dd.lt_pw = null;
                dd.vcount = 0;

                return dd;
            }






        }


        [Route("getAgentRole2")]
        [AllowAnonymous]
        [HttpGet]
        public Agent_Role2 getAgentRole2([FromUri] String property1 , [FromUri] String property2)
        {
            Retriever ppx = new Retriever();
            Agent_Role2 ww = new Agent_Role2();

            var cc = (from c in db4.Xrole_Granted

                      where c.Agent_Code == property1
                      select c

                    ).ToList();


            List<Agents> ak = new List<Agents>();
           
            ww.SuperAdmin = false;
            ww.Agent = false;
            ww.Payment = false;

            foreach (var pp in cc)
            {
                if (pp.Role_Name == "Super Admin")
                {
                    ww.SuperAdmin = true;
                }

                if (pp.Role_Name == "Agent")
                {
                    ww.Agent = true;
                }

                if (pp.Role_Name == "Payment")
                {
                    ww.Payment = true;
                }



            }

            int kk5 = GetPayStatus(property2);

            if (kk5 > 0)
            {
                ww.Payment = true;

            }



            return ww;

        }


        [Route("GetAgentStatus")]
        [AllowAnonymous]
        [HttpGet]
        public List<Agents> GetAgentStatus()
        {
            Retriever ppx = new Retriever();
            var cc = (from c in db4.registrations


                      where c.xstatus != "REFUSED" && c.Sys_ID == null || !(from o in db4.Xrole_Granted
                                                                            where o.Agent_Code == c.Sys_ID
                                                                            select o.Role_Name).Contains("Agent")

                      select new

                      {
                          c.Sys_ID,
                          c.Firstname,
                          c.Surname,
                          c.Certificate,
                          c.Introduction,
                          c.Principal,
                          c.logo,
                          c.xid,
                          c.xstatus


                      }).ToList();

            List<Agents> ak = new List<Agents>();

            foreach (var ab in cc)
            {
                Agents aa = new Agents();
                aa.Agent_Code = ab.Sys_ID;
                aa.FirstName = ab.Firstname;
                aa.SurName = ab.Surname;
                aa.Certificate = ab.Certificate;
                aa.Introduction = ab.Introduction;
                if (ab.Sys_ID != null)
                {
                    aa.Paid_Status = "Paid";

                }
                else
                {

                    aa.Paid_Status = "Not Paid";
                }

                aa.Principal = ab.Principal;

                aa.Logo = ab.logo;
                aa.Xid = Convert.ToString(ab.xid);

                // var ps = GetPayStatus(ab.xid.ToString()).ToString();

                if ((GetPayStatus(ab.xid.ToString()) > 0 && ab.xstatus != "3"))
                {
                    aa.Paid_Status = "Paid";

                    ak.Add(aa);

                }
            }



            return ak;

        }


        [Route("getApplicationStatus3")]
        [AllowAnonymous]
        [HttpGet]
        public ApplicationStatus getApplicationStatus3([FromUri] String property1)
        {
            Retriever ppx = new Retriever();
            AppStatus ddx = new AppStatus();
            try
            {

                List<Stage> lt_pw = ppx.getStageByUserIDAcc(property1);
                // Stage stage = ppx.getStatusIDByvalidationID(property1);
                List<MarkInfo> lt_mi = ppx.getMarkInfoByRegno(property1);
                List<PtInfo>  lt_mix = ppx.getPtInfoByPwalletID(lt_pw[0].ID);
              //  Stage lt_pw2 = ppx.getStageClassByUserID(lt_mi[0].log_staff);
             //   List<Stage> lt_pw = ppx.getStageByClientIDAcc(lt_pw2.validationID);
                // List<MarkInfo> lt_mi = ppx.getMarkInfoByUserID(property1);

                SortedList<string, string> x = ddx.showTmStatus(lt_pw[0].status, lt_pw[0].data_status);

                ApplicationStatus dd = new ApplicationStatus();
                dd.ppx = x;
                dd.lt_pw2 = lt_mix;
                dd.vcount = lt_mix.Count;
                dd.lt_stage = lt_pw;

                return dd;

            }

            catch (Exception ee)
            {
                ApplicationStatus dd = new ApplicationStatus();
                dd.ppx = null;
                dd.lt_pw = null;
                dd.vcount = 0;

                return dd;
            }






        }

        [Route("getApplicationStatus4")]
        [AllowAnonymous]
        [HttpGet]
        public ApplicationStatus getApplicationStatus4([FromUri] String property1)
        {
            Retriever ppx = new Retriever();
            AppStatus ddx = new AppStatus();
            try
            {

                List<Stage> lt_pw = ppx.getStageByUserIDAcc2(property1);
                // Stage stage = ppx.getStatusIDByvalidationID(property1);
                List<MarkInfo> lt_mi = ppx.getMarkInfoByRegno(property1);
                List<PtInfo> lt_mix = ppx.getPtInfoByPwalletID2(lt_pw[0].ID);
                //  Stage lt_pw2 = ppx.getStageClassByUserID(lt_mi[0].log_staff);
                //   List<Stage> lt_pw = ppx.getStageByClientIDAcc(lt_pw2.validationID);
                // List<MarkInfo> lt_mi = ppx.getMarkInfoByUserID(property1);

                SortedList<string, string> x = ddx.showTmStatus(lt_pw[0].status, lt_pw[0].data_status);

                ApplicationStatus dd = new ApplicationStatus();
                dd.ppx = x;
                dd.lt_pw2 = lt_mix;
                dd.vcount = lt_mix.Count;
                dd.lt_stage = lt_pw;

                return dd;

            }

            catch (Exception ee)
            {
                ApplicationStatus dd = new ApplicationStatus();
                dd.ppx = null;
                dd.lt_pw = null;
                dd.vcount = 0;

                return dd;
            }






        }
      
        [Route("getPaymentStatus")]
        [AllowAnonymous]
        [HttpGet]
        public ApplicationStatus2 getPaymentStatus([FromUri] String property1 , [FromUri] String property2)
        {
            Retriever ppx = new Retriever();
            AppStatus ddx = new AppStatus();
            List<XObjs.PaymentReciept> lt_pr = new List<XObjs.PaymentReciept>();




            try
            {

                XObjs.Twallet c_twall = ppx.getTwalletByTransIDAdminID(property1, property2, "agent");
               
                XObjs.Applicant c_app = ppx.getApplicantByID(c_twall.applicantID);
            List< XObjs.Hwallet> lt_hwall = ppx.getHwalletByTransID(property1);
                List < XObjs.Fee_details >  lt_fdets = ppx.getFee_detailsByTwalletID(c_twall.xid);
                XObjs.InterSwitchPostFields isw_fields = ppx.getISWtransactionByTransactionID(property1);


                int num = 1;
                int num2 = 0;
                foreach (XObjs.Hwallet current in lt_hwall)
                {
                    XObjs.PaymentReciept paymentReciept = new XObjs.PaymentReciept();
                    XObjs.Fee_list fee_list = new XObjs.Fee_list();
                    fee_list = ppx.getFee_listByID(ppx.getFee_detailsByID(current.fee_detailsID).fee_listID);
                    paymentReciept.sn = num.ToString();
                    paymentReciept.item_code = fee_list.item_code;
                    paymentReciept.item_desc = fee_list.xdesc;
                    int num3 = Convert.ToInt32(fee_list.init_amt) + Convert.ToInt32(fee_list.tech_amt);
                    paymentReciept.amount = string.Format("{0:n}", num3);
                    paymentReciept.transID = string.Concat(new string[]
                    {
                        current.transID,
                        "-",
                        current.fee_detailsID,
                        "-",
                        current.xid
                    });
                    num2 += Convert.ToInt32(num3);
                    lt_pr.Add(paymentReciept);
                    num++;
                }
                String  total_amt = string.Format("{0:n}", (double)num2 + Math.Round(Convert.ToDouble(isw_fields.isw_conv_fee), 2));
                ApplicationStatus2 xkj = new ApplicationStatus2();
                xkj.lt_pr = lt_pr;
                xkj.twallet = c_twall;
               
                xkj.vcount = lt_hwall.Count;

                xkj.applicant = c_app;
                List<XObjs.Fee_details> pss = new List<XObjs.Fee_details>();
                foreach(var p in lt_fdets)
                {
                    string xdesc = ppx.getFee_listByID(p.fee_listID).item;
                    p.desc = xdesc;
                    pss.Add(p);
                }

                xkj.feedetails = pss;

                xkj.total_amt = total_amt;

                xkj.isw_fields = isw_fields;
                return xkj;

            }

            catch (Exception ee)
            {
                ApplicationStatus2 dd = new ApplicationStatus2();
                dd.vcount = 0;
                return dd;
            }






        }

        [Route("SendEmail")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult SendEmail([FromUri] String property1, [FromUri] String property2, [FromUri] String property3, [FromUri] String property4, [FromUri] String property5)
        {
            Email  ppx = new Email();

            ppx.sendMail(property1, property2, property3, property4, property5,"");

            //   email.sendMail(this.rbl_mail_cat.SelectedValue, to, from, subject, this.Session["msg"].ToString(), "")


            return Ok();

        }


        [Route("ProceedToPayment")]
        [AllowAnonymous]
        [HttpPost]
        public XObjs.InterSwitchPostFields ProceedToPayment(Shopping_card2 pp4)
        {

            //if (Session["lt_twall"] != null)
            //{
            //    lt_twall = (List<XObjs.Twallet>)Session["lt_twall"];
            //}
            //if (Session["lt_fdets"] != null)
            //{
            //    lt_fdets = (List<XObjs.Fee_details>)Session["lt_fdets"];
            //}
            //if (Session["c_addy"] != null)
            //{
            //    c_addy = Session["c_addy"].ToString();
            //}
            //if (Session["tot_amtx"] != null)
            //{
            //    amt = (double)Session["tot_amtx"];
            //}
            int num = 0;
            int num2 = 0;
            double amt = 0;
            double total_amt = 0;
            double isw_conv_fee = 0;
            XObjs.InterSwitchPostFields xispf = new XObjs.InterSwitchPostFields();
            string inputString = "";

            Hasher hash_value = new Hasher();

            foreach (Shopping_card _details in pp4.cc)
            {
                num += (Convert.ToInt32(_details.init_amt) * Convert.ToInt32(_details.qty)) * 100;
                num2 += (Convert.ToInt32(_details.tech_amt) * Convert.ToInt32(_details.qty)) * 100;
                amt = amt + ( _details.amt * Convert.ToInt32(_details.qty));
            }
            if (amt > 0.0)
            {
                total_amt = Math.Round((double)(amt / 0.985), 2);
                isw_conv_fee = total_amt - amt;
                if (isw_conv_fee > 2000.0)
                {
                    isw_conv_fee = 2000.0;
                    total_amt = isw_conv_fee + amt;
                }
            }
            //Session["amt"] = amt * 100.0;
            //Session["isw_conv_fee"] = Math.Round(isw_conv_fee, 2);
            //Session["total_amt"] = Convert.ToInt32((double)(total_amt * 100.0)).ToString();
            //Session["name"] = fullname;
            //Session["coy_name"] = coy_name;
            //Session["Refno"] = lt_twall[0].transID;
            //Session["Address"] = c_addy;
            //Session["einao_split_amt"] = num2.ToString();
            //Session["cld_split_amt"] = num.ToString();
            xispf.amount = Convert.ToInt32((double)(total_amt * 100.0)).ToString();
            xispf.isw_conv_fee = isw_conv_fee.ToString();
            xispf.cust_id = pp4.dd.Sys_ID;
            xispf.cust_id_desc = "";
            xispf.cust_name = pp4.dd.Firstname + " " + pp4.dd.Surname;
            xispf.resp_desc = "";
            //if (lt_fdets.Count == 1)
            //{
            //    XObjs.Fee_list _list = ret.getFee_listByID(lt_fdets[0].fee_listID);
            //    xispf.pay_item_name = _list.item;
            //    Session["item_code"] = _list.item_code;
            //    item_code = _list.item_code;
            //    Session["item_desc"] = _list.item;
            //    item_desc = _list.item;
            //}
            //else
            //{
            //    xispf.pay_item_name = pay_item_name;
            //}
            xispf.txn_ref = pp4.ee.transID;
            xispf.product_id = ConfigurationManager.AppSettings["pd_product_id"];
            xispf.currency = ConfigurationManager.AppSettings["pd_currency"];
            xispf.site_redirect_url = ConfigurationManager.AppSettings["pd_site_redirect_url"];
            xispf.site_name = ConfigurationManager.AppSettings["pd_site_name"];
            xispf.pay_item_id = ConfigurationManager.AppSettings["pd_pay_item_id"];
            xispf.mackey = ConfigurationManager.AppSettings["pd_mackey"];
            xispf.local_date_time = DateTime.Now.ToString("dd-MMM-yy HH:MM:ss");
            xispf.TransactionDate = "";
            xispf.MerchantReference = "";
            xispf.trans_status = "AR";
            xispf.xreg_date = pp4.ee.xreg_date;
            xispf.xvisible = "1";
            xispf.xsync = "0";
            inputString = xispf.txn_ref + xispf.product_id + xispf.pay_item_id + xispf.amount + xispf.site_redirect_url + xispf.mackey;
            xispf.hash = hash_value.GetGetSHA512String(inputString);
            //if ((xispf.hash != null) && (xispf.hash.Length > 5))
            //{
            //    Session["hashString"] = xispf.hash;
            //}
            //Session["xispf"] = xispf;
            //if (Session["xispf"] != null)
            //{
            //    base.Response.Redirect("../xis/pd/tx/payment_optionsx.aspx");
            //}
            var session = HttpContext.Current.Session;
            session["Shopping_card2"] = pp4;
            return xispf;

        }

        [Route("getBasketDetail")]
        [AllowAnonymous]
        [HttpGet]
        public List<ViewBasket> getBasketDetail([FromUri] String property1 , [FromUri] String property2)
        {
            var kk = "";

            Retriever pp = new Retriever();
       List<ViewBasket> ppx =     pp.ViewBasket2(property1, property2);
           // int vcount = pp.getEmailCount3(property1);

            return ppx;

        }

        [Route("getEmailCount")]
        [AllowAnonymous]
        [HttpGet]
        public Int32 getEmailCount([FromUri] String property1)
        {
            var kk = "";

            Retriever pp = new Retriever();
            int vcount = pp.getEmailCount3(property1);

            return vcount;

        }


        [Route("ViewBasket")]
        [AllowAnonymous]
        [HttpGet]
        public ApplicationCount ViewBasket([FromUri] String property1)
        {
            var kk = "";

            Retriever pp = new Retriever();
            int trademarkcount = pp.getAllPaidFee_detail_ItemsCntByCat(property1, "tm", "");
            int patentcount = pp.getAllPaidFee_detail_ItemsCntByCat(property1, "pt", "");
            int designcount = pp.getAllPaidFee_detail_ItemsCntByCat(property1, "ds", "");

            ApplicationCount pdd = new ApplicationCount();
            pdd.designcount = designcount;
            pdd.patentcount = patentcount;
            pdd.trademarkcount = trademarkcount;
            //   int vcount = pp.getEmailCount3(property1);

            return pdd;

        }



        [Route("PwalletCount")]
        [AllowAnonymous]
        [HttpGet]
        public Int32 PwalletCount([FromUri] String property1)
        {
            var kk = "";

            Retriever pp = new Retriever();
            int vcount = pp.getpwalletCount(property1);
         

            return vcount;

        }


        [Route("getEmails")]
        [Authorize]
        [HttpGet]
        public List<Email4> getEmails([FromUri] String property1)
        {
            var kk = "";

            Retriever pp = new Retriever();
            List<Email4> vcount = pp.getEmails22(property1);

            return vcount;

        }

        [Route("getAknowlegment")]
        [AllowAnonymous]
        [HttpGet]
        public Aknowlegement getAknowlegment([FromUri] String property1)
        {
            var kk = "";

            Retriever pp = new Retriever();
            Aknowlegement bb = new Aknowlegement();
            Stage stage = null;
            MarkInfo markInfo = null;
            Representative representative = null;
            Applicant applicant = null;
            Address address = null;
            try
            {
                try
                {
                     stage = pp.getStageClassByUserID2(property1);

                }

                catch(Exception ee)
                {
                    pp.addxtest("stage message =" + ee.Message);
                }
                try
                {
                   
                    markInfo = pp.getMarkInfoClassByUserID(stage.ID);
                    
                    pp.addxtest("markinfo regnum  =" + markInfo.reg_number);

                }

                catch(Exception ee )
                {
                    pp.addxtest("markinfo message =" + ee.Message);

                }

                try
                {

                    representative = pp.getRepClassByUserID(stage.ID);

                }

                catch(Exception ee )
                {
                    pp.addxtest("representative message =" + ee.Message);

                }
                try
                {

                    applicant = pp.getApplicantClassByID(stage.ID);

                }

                catch(Exception ee )
                {
                    pp.addxtest("applicant message =" + ee.Message);

                }

                try
                {
                    address = pp.getAddressClassByID(representative.addressID);

                }

                catch(Exception ee )
                {
                    pp.addxtest("address message =" + ee.Message);

                }
                var xk = stage.validationID;
                string[] words = xk.Split('-');
                pp.addxtest("xid =" + words[2]);
                XObjs.Hwallet hwallet = pp.getHwalletByID(words[2]);


                bb.Address = address;
                bb.applicant = applicant;
                bb.hwallet = hwallet;
             
                bb.markinfo = markInfo;

                bb.stage = stage;
                bb.representative = representative;

                bb.vurl = ConfigurationManager.AppSettings["cld_root"];
                return bb;

            }

            catch(Exception ee )
            {

                pp.addxtest("aknowledment message =" + ee.Message);
                return bb;
            }

        }


        [Route("getEmails2")]
        [AllowAnonymous]
        [HttpGet]
        public Email4 getEmails2([FromUri] String property1)
        {
            var kk = "";

            Retriever pp = new Retriever();
            pp.updateEmail3(property1);
         Email4 vcount = pp.getEmail22b(property1);

            return vcount;

        }




        [Route("formx")]
        [AllowAnonymous]
        [HttpPost]
        public Interswitch2 formx(Shopping_card2 pp4)
        {
           

        

                


            Interswitch2 pp = new Interswitch2();
            pp.currency = ConfigurationManager.AppSettings["pd_currency"];
            pp.pay_item_id = ConfigurationManager.AppSettings["pd_pay_item_id"];
            pp.pd_payment_page = ConfigurationManager.AppSettings["pd_payment_page"];
            pp.product_id = ConfigurationManager.AppSettings["pd_product_id"];
            pp.site_redirect_url = ConfigurationManager.AppSettings["pd_site_redirect_url"];


            Retriever ret = new Retriever();
        
           // var isw_fields = ret.getISWtransactionByTransactionID(pp4.ee.transID.Trim());

          //  pp.amount =isw_fields.amount;
            //XObjs.InterSwitchPostFields xispf = pp4.ff;
            //var einao_split_amt = 0.0;
            //var cld_split_amt = 0.0;
            //foreach (var px in pp4.cc)
            //{
            //    einao_split_amt = einao_split_amt + px.tech_amt;
            //    cld_split_amt = cld_split_amt + px.init_amt;

            //}

            //einao_split_amt = einao_split_amt * 100;
            //cld_split_amt = cld_split_amt * 100;
            //var refno = pp4.ee.transID;
            //var hashString = pp4.ff.hash;
            //var appname = pp4.bb.applicantname;
            //var amount = pp4.ff.amount;




            //if (session["Time"] == null)
            //{
            //    session["Time"] = DateTime.Now;
            //}



            var session = HttpContext.Current.Session;
            session["Shopping_card2"] = pp4;


            return pp;

        }


        [Route("ReturnUrl")]
        [AllowAnonymous]
        [HttpGet]
        public XObjs.InterSwitchResponse ReturnUrl()
        {

            var session = HttpContext.Current.Session;
            var total_amt = "";
            Shopping_card2 pp3 = (Shopping_card2)session["Shopping_card2"];
    
           var  xstring = new StringBuilder();
           var  product_id = ConfigurationManager.AppSettings["pd_product_id"];
           var  mackey = ConfigurationManager.AppSettings["pd_mackey"];
           var  check_trans_page = ConfigurationManager.AppSettings["pd_get_trans_json_page"];
            Registration reg = new Registration();
            Hasher hash_value = new Hasher();
            XObjs.InterSwitchResponse isr = new XObjs.InterSwitchResponse();
            Models.Transactions tx = new Models.Transactions();

            var txnref = pp3.ee.transID;
            var xpay_status = "";
            var payRef = "";
            var retRef = "";
            var cardNum = "";
            var apprAmt = "";
            var resp = "" ;
            var desc = "";
            Retriever ret = new Retriever();
            XObjs.Twallet c_twall = ret.getTwalletByTransIDAdminID(txnref, pp3.dd.xid);
          var   c_app = ret.getApplicantByID(c_twall.applicantID);
         var    isw_fields = ret.getISWtransactionByTransactionID(txnref.Trim());
            List<XObjs.PaymentReciept> lt_pr = new List<XObjs.PaymentReciept>();

            List<XObjs.Fee_details>  lt_fdets = null;
            List <XObjs.Hwallet> lt_hwall = null;
            var vid = "";
            if (c_twall.xid != null)
            {
               
                lt_fdets = ret.getFee_detailsByTwalletID(c_twall.xid);
               
                lt_hwall = ret.getHwalletByTransID(txnref);
                int num = 1;
                int num2 = 0;
                XObjs.Registration c_reg2 = pp3.dd;
                vid = c_reg2.xid;
                foreach (XObjs.Hwallet hwallet in lt_hwall)
                {
                    XObjs.PaymentReciept item = new XObjs.PaymentReciept();
                    XObjs.Fee_list _list = new XObjs.Fee_list();
                    XObjs.Fee_details _details = new XObjs.Fee_details();

                    _details = ret.getFee_detailsByID(hwallet.fee_detailsID);
                    _list = ret.getFee_listByID(_details.fee_listID);
                    item.sn = num.ToString();
                    item.item_code = _list.item_code;

                    if (item.item_code == "AA1")
                    {

                   
                    }
                    item.item_desc = _list.xdesc;
                    item.init_amt = string.Format("{0:n}", Convert.ToInt32(_details.init_amt));
                    item.tech_amt = string.Format("{0:n}", Convert.ToInt32(_details.tech_amt));
                    item.qty = string.Format("{0:n}", 1);
                    int num3 = Convert.ToInt32(_details.init_amt) + Convert.ToInt32(_details.tech_amt);
                    item.transID = hwallet.transID + "-" + hwallet.fee_detailsID + "-" + hwallet.xid;
                    num2 += num3;
                   
                 total_amt = string.Format("{0:n}", num2 + Math.Round(Convert.ToDouble(isw_fields.isw_conv_fee), 2));
                    lt_pr.Add(item);
                    num++;
                }
            }

            xstring.AppendLine("Transaction reference= " + txnref + " Payment reference= " + payRef + " Switching Bank Reference number= " + retRef + " card No= " + cardNum + " apprAmt= " + apprAmt);
          var   inputString = product_id.Trim() + txnref.Trim() + mackey.Trim();
            string headerValue = hash_value.GetGetSHA512String(inputString);



            isr = tx.myRedirect(check_trans_page.Trim() + "?productid=" + product_id.Trim() + "&transactionreference=" + txnref.Trim() + "&amount=" + isw_fields.amount.Trim(), "Hash", headerValue.Trim());


            if (((isr.ResponseCode != "") && (isr.ResponseCode != null)) && (isr.ResponseCode == "00"))
            {
                xstring.AppendLine("Sent Amount: " + isw_fields.amount + "\r\n Product ID: " + product_id + "\r\n Hash: " + headerValue + "\r\n Amount: " + isr.Amount + "\r\n CardNumber: " + isr.CardNumber + "\r\n MerchantReference: " + isr.MerchantReference + "\r\n PaymentReference: " + isr.PaymentReference + "\r\n RetrievalReferenceNumber: " + isr.RetrievalReferenceNumber + "\r\n LeadBankCbnCode: " + isr.LeadBankCbnCode + "\r\n TransactionDate: " + isr.TransactionDate + "\r\n ResponseCode: " + isr.ResponseCode + "\r\n ResponseDescription: " + isr.ResponseDescription + "\r\n Json Page: " + check_trans_page + "\r\n Form Response: " + resp + "\r\n Form Description: " + desc);
              
              var   succ = reg.updateInterSwitchRecords(txnref, payRef, retRef, isr.ResponseCode, isr.TransactionDate, isr.MerchantReference, isr.ResponseDescription, isr.PaymentReference);



                if (isr.ResponseCode == "00" && (isr.PaymentReference != null || isr.PaymentReference != ""))
                {
                    xpay_status = "1";
                }
                else
                {
                    xpay_status = "3";
                }
                reg.updateTwalletPaymentStatus(txnref.Trim(), xpay_status.Trim());
                if (succ != 0)
                {
                   
                        Retriever kp = new Retriever();
                       
                        Registration dd = new Registration();
                       
                        dd.updateRegistrationSysID2(vid, "Paid");


                        XObjs.Registration ds = kp.getRegistrationByID(vid);
                     
                }

                Retriever kp2 = new Retriever();
                XObjs.Registration ds2 = kp2.getRegistrationByID(vid);
                kp2.sendAlertHtml(ds2, total_amt, isr, isw_fields, c_twall, c_app, lt_pr);
            }
            else if (((isr.ResponseCode != "") && (isr.ResponseCode != null)) && (isr.ResponseCode != "00"))
            {
              
              var   succ = reg.updateInterSwitchRecords(txnref, payRef, retRef, isr.ResponseCode, isr.TransactionDate, isr.MerchantReference, isr.ResponseDescription, isr.PaymentReference);
                if (isr.ResponseCode == "00" && (isr.PaymentReference != null || isr.PaymentReference != ""))
                {
                    xpay_status = "1";
                }
                else
                {
                    xpay_status = "3";
                }
                reg.updateTwalletPaymentStatus(txnref.Trim(), xpay_status.Trim());
                if (succ != 0)
                {
                  //  sendUnsuccAlertHtml();
                }

                Retriever kp2 = new Retriever();
                XObjs.Registration ds2 = kp2.getRegistrationByID(vid);
                kp2.sendUnsuccAlertHtml(ds2, total_amt, isr, isw_fields, c_twall, c_app, lt_pr);
            }
            else if ((isr.ResponseCode == "") || (isr.ResponseCode == null))
            {
                string str2 = "None";
                string str3 = "None";
                xstring.AppendLine("Sent Amount: " + isw_fields.amount + "\r\n Product ID: " + product_id + "\r\n Hash: " + headerValue + "\r\n Amount: None\r\n CardNumber: None\r\n MerchantReference: None\r\n PaymentReference: None\r\n RetrievalReferenceNumber: None\r\n LeadBankCbnCode: None\r\n TransactionDate: None\r\n ResponseCode: " + str2 + "\r\n ResponseDescription: " + str3 + "\r\n Json Page: " + check_trans_page + "\r\n Form Response: " + resp + "\r\n Form Description: " + desc);
              
                xpay_status = "3";
                reg.updateTwalletPaymentStatus(txnref, xpay_status);
                if (desc == "")
                {
                    isr.ResponseDescription = "Transaction Pending";
                }
                else
                {
                    isr.ResponseDescription = desc;
                }
                if (resp == "")
                {
                    isr.ResponseCode = "XXXX";
                }
                else
                {
                    isr.ResponseCode = resp;
                }
              //  sendUnsuccAlertHtml();
            }

            return isr;

        }


        [Route("ReturnUrl2")]
        [AllowAnonymous]
        [HttpGet]
        public Shopping_card2 ReturnUrl2([FromUri] String property1)
        {

          
          //  Shopping_card2 pp3 = (Shopping_card2)session["Shopping_card2"];

            var xstring = new StringBuilder();
            var product_id = ConfigurationManager.AppSettings["pd_product_id"];
            var mackey = ConfigurationManager.AppSettings["pd_mackey"];
            var check_trans_page = ConfigurationManager.AppSettings["pd_get_trans_json_page"];
            var siteredirect = ConfigurationManager.AppSettings["pd_site_redirect_url"];

            Registration reg = new Registration();
            Hasher hash_value = new Hasher();
            XObjs.InterSwitchResponse isr = new XObjs.InterSwitchResponse();
            Models.Transactions tx = new Models.Transactions();

            var txnref = property1;
            var xpay_status = "";
         
            var payRef = "";
         
            var retRef = "";
        
            var cardNum = "";

          

            var apprAmt = "";

           

            var resp = "";

         

            var desc = "";
            Retriever ret = new Retriever();
            XObjs.Twallet c_twall = ret.getTwalletByTransID(txnref);//getTwalletByTransIDAdminID(txnref, pp3.dd.xid);
            var c_app = ret.getApplicantByID2(c_twall.applicantID);
            var isw_fields = ret.getISWtransactionByTransactionID(txnref.Trim());

            isw_fields.site_redirect_url = siteredirect;
            var feedetail = ret.getFee_detailsByID2(c_twall.xid);
            List<XObjs.PaymentReciept> lt_pr = new List<XObjs.PaymentReciept>();
            Shopping_card2 ttx = new Shopping_card2();
            ttx.bb = c_app;
            ttx.ee = c_twall;
            ttx.ff = isw_fields;
            ttx.pp = feedetail;
         
            List<XObjs.Fee_details> lt_fdets = null;
            List<XObjs.Hwallet> lt_hwall = null;
            var vid = "";


            return ttx;

        }



        static object locker = new object();
        static string Generate15UniqueDigits()
        {
            lock (locker)
            {
                Thread.Sleep(100);
                return DateTime.Now.ToString("yyyyMMddHHmmssf") +"M";
            }
        }



        [Route("PostLoginToken2")]
        [AllowAnonymous]
        [HttpPost]

        //  public Registration GetLoginToken2( PostUser pp)

        public IHttpActionResult PostLoginToken2(PostUser pp)
        {



            //Registration vreg  = Login(pp.password, pp.username);
            // string vs = "";

            // if (vreg != null)
            // {




            // }


            // return vreg;

            //  Model2.ApplicationUser ds = UserManager.FindByName(username);

            return Ok();

        }

        


        [Route("GetLoginToken2")]
         [AllowAnonymous]
      //  [Authorize]
        [HttpPost]
     
       public registration GetLoginToken2( PostUser pp)

          

        //  public IHttpActionResult GetLoginToken2(PostUser pp)
        {
            try
            {
                ApplicationUser ds = UserManager.FindByEmail(pp.username);

                registration vreg = null;
                bool da = false;
                if (ds != null)
                {

                    var currentUserId = ds.Id;
                    var currentUser = db4.Users.FirstOrDefault(x => x.Id == currentUserId);

                    if (currentUser.LoginCount == 0)
                    {
                        Retriever px = new Retriever();
                        Registration vreg2 = px.Login(pp.password, pp.username);

                        if (vreg2.Email != null)
                        {

                            UserManager.ChangePassword(currentUserId, "1111", pp.password);

                            currentUser.LoginCount = 1;
                            db4.SaveChanges();


                            var Reguser = (from c in db4.registrations where c.Email == pp.username select c).FirstOrDefault();
                            vreg = Reguser;

                            var identity = new BasicAuthenticationIdentity(pp.username, pp.password);
                            var principal = new GenericPrincipal(identity, null);

                            Thread.CurrentPrincipal = principal;
                            if (HttpContext.Current != null)
                            {
                                HttpContext.Current.User = principal;



                            }



                            var ww = GetToken(pp.username, pp.password);

                            vreg.Token = ww;

                        }

                        else
                        {
                            JObject token = new JObject(new JProperty("error_description", "Invalid Username / Password"));
                            vreg.Token = token;

                        }





                    }

                    else
                    {
                        var Reguser = (from c in db4.registrations where c.Email == pp.username select c).FirstOrDefault();
                        vreg = Reguser;
                        // var Reguser = (from db4.;
                        da = UserManager.CheckPassword(ds, pp.password);

                        if (da)
                        {
                            var identity = new BasicAuthenticationIdentity(pp.username, pp.password);
                            var principal = new GenericPrincipal(identity, null);

                            Thread.CurrentPrincipal = principal;
                            if (HttpContext.Current != null)
                            {
                                HttpContext.Current.User = principal;



                            }
                            var ww = GetToken(pp.username, pp.password);

                            vreg.Token = ww;





                            //  var ww = GetToken(pp.username, pp.password);

                            //  vreg.Token = ww;

                        }

                        else
                        {
                            JObject token = new JObject(new JProperty("error_description", "Invalid Username / Password"));
                            vreg.Token = token;

                        }

                    }







                }

                else
                {
                    // add code 

                    JObject token = new JObject(new JProperty("error_description", "Invalid Username / Password"));
                    vreg.Token = token;

                    return vreg;

                }

                //  vreg = Login(pp.password, pp.username);

                //if (vreg.Email != null) {


                //    if (ds != null)
                //    {
                //        bool da = UserManager.CheckPassword(ds, "1111");

                //    }

                //    try
                //    {
                //       var  RoleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(new ApplicationDbContext()));

                //        UserManager.AddToRole(ds.Id, "Admin");

                //    }

                //    catch(Exception ee)
                //    {

                //        var dda = ee.Message;
                //    }
                //try
                //{

                //    var ccd = (from c in db4.registrations select c.Email).Distinct().ToList();



                //    foreach (var ccp in ccd)
                //    {
                //        var user = new Model2.ApplicationUser() { UserName = ccp, Email = ccp };

                //        IdentityResult result = UserManager.Create(user, "1111");

                //    }

                //}

                //catch (Exception ee)
                //{

                //    var ddx = ee.Message;
                //}



                var ddf = UserManager.GetRoles(ds.Id).ToArray();
                int vcount = 0;
                var lf = "{";
                foreach (var kk in ddf)
                {
                    if (vcount != ddf.Length - 1)
                    {
                        var ddx = string.Format("\"{0}\"", kk);
                        lf = lf + ddx + ",";

                    }

                    else
                    {
                        var ddx = string.Format("\"{0}\"", kk);
                        lf = lf + ddx + "}";
                    }

                    vcount = vcount + 1;

                }

                // var ddf3 = ddf.ToString();

                //  var ccp = string.Join(" ,", ddf.ToArray()); ;


                var ccd = (from c in db4.RolesPriviledges
                           where
    ddf.Any(x => x == c.RoleName)
                           select c).ToList();
                ;

                vreg.Access2 = ccd;




                return vreg;

                // return ww;

                //  Model2.ApplicationUser ds = UserManager.FindByName(username);

                //  return Ok();

            }

            catch(Exception ee )
            {

                var pp2 = ee.Message;

                return null;
            }

        }

        public Int32 GetPayStatus(string kk2)
        {
            if (kk2 == "242")
            {

                string ssp = "dd";
            }
           // ba2xai_xpayEntities kk = new ba2xai_xpayEntities();
            int cc = (from c in db2.twallets
                      join d in db2.fee_details on new { a = c.xid } equals new { a = d.twalletID }
                      where c.xmemberID == kk2 && d.fee_listID == "10061" && c.xpay_status == "1"
                      select c

                   ).Count();


            return cc;

        }
        public JObject GetToken(string userName, string password)
        {
            ClaimsIdentity oAuthIdentity = new ClaimsIdentity(Startup.OAuthOptions.AuthenticationType);

            ApplicationUser ds = UserManager.FindByEmail(userName);

            var ppx = User.Identity.GetUserId();
            oAuthIdentity.AddClaim(new Claim(ClaimTypes.Name,ds.UserName));
            oAuthIdentity.AddClaim(new Claim(ClaimTypes.NameIdentifier, ds.Id));

            AuthenticationTicket ticket = new AuthenticationTicket(oAuthIdentity, new AuthenticationProperties());

            DateTime currentUtc = DateTime.UtcNow;
            ticket.Properties.IssuedUtc = currentUtc;
            ticket.Properties.ExpiresUtc = currentUtc.Add(TimeSpan.FromDays(365));

            string accessToken = Startup.OAuthOptions.AccessTokenFormat.Protect(ticket);
            Request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", accessToken);



            // Create the response building a JSON object that mimics exactly the one issued by the default /Token endpoint
            JObject token = new JObject(
                new JProperty("userName", ds.UserName),
                new JProperty("userId", ds.Id),
                new JProperty("access_token", accessToken),
                new JProperty("token_type", "bearer"),
                new JProperty("expires_in", TimeSpan.FromDays(365).TotalSeconds.ToString()),
                new JProperty("issued", currentUtc.ToString("ddd, dd MMM yyyy HH':'mm':'ss 'GMT'")),
                new JProperty("expires", currentUtc.Add(TimeSpan.FromDays(365)).ToString("ddd, dd MMM yyyy HH:mm:ss 'GMT'"))
            );

            //comment by me 

            return token;

        }
       

     


        public void sendemail(XObjs.Registration px2)
        {
            try
            {
                int port = 0x24b;


                MailMessage mail = new MailMessage();
                mail.From =
           new MailAddress("noreply@iponigeria.com", "noreply@iponigeria.com");
                // new MailAddress("tradeservices@fsdhgroup.com");
                mail.Priority = MailPriority.High;

                mail.To.Add(
    new MailAddress(px2.Email));

                //    new MailAddress("ozotony@yahoo.com"));



                //mail.CC.Add(new MailAddress("Anthony.Ozoagu@firstcitygroup.com"));

                mail.Subject = "Agent Accreditation Request Approved";

                mail.IsBodyHtml = true;
                String ss2 = "Dear " + px2.CompanyName + ",<br/> <br/>" + " You have successfully made payment for:   .<br/>";

                //  ss2 = ss2 + "To gain access to your account, you would need to click here <a href=\"http://88.150.164.30/IpoTest2/#/Register/" + vid + " \">click</a>   to validate your account and also make payment. " + "<br/><br/><br/>";

                ss2 = ss2 + " <table style=\"border:1px solid black;border-collapse:collapse; \"   >  <tr> <td style=\"border:1px solid black;\" > AGENT CODE </td> <td style=\"border:1px solid black;\" >" + px2.Sys_ID + "</td> </tr>";

                ss2 = ss2 + "<tr> <td style=\"border:1px solid black;\" > FIRSTNAME </td> <td style=\"border:1px solid black;\" >" + px2.Firstname + "</td> </tr>";
                ss2 = ss2 + "<tr> <td style=\"border:1px solid black;\" > SURNAME </td> <td style=\"border:1px solid black;\" >" + px2.Surname + "</td> </tr>";

                ss2 = ss2 + "<tr> <td style=\"border:1px solid black;\" > EMAIL </td> <td style=\"border:1px solid black;\" >" + px2.Email + "</td> </tr>";

                ss2 = ss2 + "<tr> <td style=\"border:1px solid black;\" > DATE OF BIRTH </td> <td style=\"border:1px solid black;\" >" + px2.DateOfBrith + "</td> </tr>";

                ss2 = ss2 + "<tr> <td style=\"border:1px solid black;\" > COMPANY NAME </td> <td style=\"border:1px solid black;\" >" + px2.CompanyName + "</td> </tr>";

                ss2 = ss2 + "<tr> <td style=\"border:1px solid black;\" > COMPANY ADDRESS </td> <td style=\"border:1px solid black;\" >" + px2.CompanyAddress + "</td> </tr>";

                ss2 = ss2 + "<tr> <td style=\"border:1px solid black;\" > CERTIFICATE </td> <td style=\"border:1px solid black;\" ><a href=\"http://ipo.cldng.com/" + px2.Certificate + " \">Download</a> </td> </tr>";

                ss2 = ss2 + "<tr> <td style=\"border:1px solid black;\" >  LETTER OF INTRODUCTION </td> <td style=\"border:1px solid black;\" ><a href=\"http://ipo.cldng.com/" + px2.Introduction + " \">Download</a> </td> </tr>";

                ss2 = ss2 + "<tr> <td style=\"border:1px solid black;\" >  PASSPORT </td> <td style=\"border:1px solid black;\" ><a href=\"http://ipo.cldng.com/" + px2.logo + " \">Download</a> </td> </tr>";





                ss2 = ss2 + "</table> <br/><br/>";

                ss2 = ss2 + "Your application will be reviewed by the accreditation panel to ensure you have met the minimum standard requirements as required by the registry. <br/>";

                ss2 = ss2 + "You will be notified on the status of your application in due course. <br/> <br/>";




                ss2 = ss2 + "Please do not reply this mail <br/> <br/>";

                ss2 = ss2 + "Live 24/7 Support: (+234) 09038979681 <br/>";

                ss2 = ss2 + "info@iponigeria.com or go online to use our live feedback form <br/><br/> ";

                ss2 = ss2 + "<b>Disclaimer:</b>This e-mail and any attachments are confidential; it must not be read, copied, disclosed or used by any person other than the above named addressees. Unauthorized use, disclosure or copying is strictly prohibited and may be unlawful. Iponigeria.com disclaims any liability for any action taken in reliance on the content of this e-mail. The comments or statements expressed in this e-mail could be personal opinions and are not necessarily those of iponigeria.com. If you have received this email in error or think you may have done so, you may not peruse, use, disseminate, distribute or copy this message. Please notify the sender immediately and delete the original e-mail from your system.";










                //ss2 = ss2 + "Please keep your password safe and do not share your log in details with anyone. You may change your password at your convenience. In the event that you cannot remember your password, kindly follow the instructions provided for password recovery."  + "<br/>";
                //ss2 = ss2 + "Please do not reply this mail" +  "<br/><br/>";
                //ss2 = ss2 + "Email: info@iponigeria.com or go online to use our live feedback form .<br/><br/>";

                String ss = "<html> <head> </head> <body>" + ss2 + "</body> </html>";

                //  mail.Body = ss;

                mail.Body = ss;

                SmtpClient client = new SmtpClient("88.150.164.30");
                //  SmtpClient client = new SmtpClient("192.168.0.12");

                client.Port = port;

                //    client.Credentials = new System.Net.NetworkCredential("paymentsupport@einaosolutions.com", "Zues.4102.Hector");

                client.Credentials = new System.Net.NetworkCredential("noreply@iponigeria.com", "Einao2015@@$");



                //   new System.Net.NetworkCredential("ebusiness@firstcitygroup.com", "welcome@123");
                //   new System.Net.NetworkCredential(q60.smtp_user, q60.smtp_password);







                client.Send(mail);

            }
            catch (Exception ee)
            {


            }



        }








    }
}
