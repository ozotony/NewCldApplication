using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;

using System.Threading.Tasks;
using System.Web;
using System.Web.Http;


namespace WebApplication4.Models
{
    public class ChallengeResult2 : IHttpActionResult
   {
  private const string XsrfKey = "XsrfId";
 
  public ChallengeResult2(string provider, string redirectUri, HttpRequestMessage request)
    : this(provider, redirectUri, null, request)
  {
  }
 
  public ChallengeResult2(string provider, string redirectUri, string userId, HttpRequestMessage request)
  {
    AuthenticationProvider = provider; 
    RedirectUri = redirectUri;
    UserId = userId;
    MessageRequest = request;
  }
 
  public string AuthenticationProvider { get; private set; }
 
  public string RedirectUri { get; private set; }
 
  public string UserId { get; private set; }
 
  public HttpRequestMessage MessageRequest { get; private set; }
 
  public Task<System.Net.Http.HttpResponseMessage > ExecuteAsync(System.Threading.CancellationToken cancellationToken)
  {
    var properties = new AuthenticationProperties() { RedirectUri = this.RedirectUri }; 
    if (UserId != null)
    {
      properties.Dictionary[XsrfKey] = UserId;
    }
 
    MessageRequest.GetOwinContext().Authentication.Challenge(properties, AuthenticationProvider);
 
    HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.Unauthorized);
    response.RequestMessage = MessageRequest;
 
    return Task.FromResult(response);
  }
}
}