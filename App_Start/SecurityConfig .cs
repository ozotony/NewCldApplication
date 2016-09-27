using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.Facebook;
using Microsoft.Owin.Security.Google;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication4.Models;

namespace WebApplication4.App_Start
{
    public class SecurityConfig
{
        public static FacebookAuthenticationOptions facebookAuthOptions { get; private set; }
  public static void Configure(IAppBuilder app)
  {
    // Enable the application to use a cookie to store information for the signed in user
    app.UseCookieAuthentication(new CookieAuthenticationOptions
    {
      AuthenticationType = DefaultAuthenticationTypes.ExternalCookie
    });
 
    // Use a cookie to temporarily store information about a user logging in with a third party login provider
    app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);
 
    // Configure google authentication
    var options = new GoogleOAuth2AuthenticationOptions()
    {
      ClientId = "your app client id",
      ClientSecret = "your app client secret"
    };
 
    app.UseGoogleAuthentication(options);

    facebookAuthOptions = new FacebookAuthenticationOptions()
    {
        AppId = "528982800546743",
        AppSecret = "a6ee5ad8448c7c67fcedc72d5a4c501a",
        Provider = new FacebookAuthProvider()
    };

    app.UseFacebookAuthentication(facebookAuthOptions);

    
    
  }
}
}