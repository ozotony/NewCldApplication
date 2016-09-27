using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Facebook;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace WebApplication4.Models
{
    public class FacebookAuthProvider : FacebookAuthenticationProvider
    {
        public override Task Authenticated(FacebookAuthenticatedContext context)
        {
            context.Identity.AddClaim(new Claim("ExternalAccessToken", context.AccessToken));


          
            vaccess dd = new vaccess();
            vresult dd2 = new vresult();
            dd2.vname = context.AccessToken;
           // dd.getToken(context.AccessToken);
            string vname = context.Identity.Name;
            context.OwinContext.Set<string>("as:client_id", context.AccessToken);
           
            return Task.FromResult<vresult>(dd2);
          
           // return Task.FromResult<object>(null);
        }
    }

    public class vresult
    {

       public  string vname { get; set; }
    }

    public class vaccess
    {
        public void getToken(string token)
        {
            var tokenExpirationTimeSpan = TimeSpan.FromDays(14);
            ApplicationUser user = null;
            // Get the fb access token and make a graph call to the /me endpoint    
            // Check if the user is already registered
            // If yes retrieve the user 
            // If not, register it  
            // Finally sign-in the user: this is the key part of the code that creates the bearer token and authenticate the user
            var identity = new ClaimsIdentity(Startup.OAuthBearerOptions.AuthenticationType);
            identity.AddClaim(new Claim(ClaimTypes.Name, user.Id, null, "Facebook"));
            // This claim is used to correctly populate user id
            identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.Id, null, "LOCAL_AUTHORITY"));
            AuthenticationTicket ticket = new AuthenticationTicket(identity, new AuthenticationProperties());
            var currentUtc = new Microsoft.Owin.Infrastructure.SystemClock().UtcNow;
            ticket.Properties.IssuedUtc = currentUtc;
            ticket.Properties.ExpiresUtc = currentUtc.Add(tokenExpirationTimeSpan);
            var accesstoken = Startup.OAuthBearerOptions.AccessTokenFormat.Protect(ticket);
     //  Authentication.SignIn(identity);


        }

    }

}