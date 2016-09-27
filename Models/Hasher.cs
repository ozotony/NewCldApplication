using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace WebApplication4.Models
{
    public class Hasher
    {
        public string GetGetSHA512String(string inputString)
        {
            StringBuilder sb = new StringBuilder();
            foreach (byte b in GetSHA512(inputString))
                sb.Append(b.ToString("X2"));
            return sb.ToString();
        }

        public static byte[] GetSHA512(string inputString)
        {
            HashAlgorithm algorithm = SHA512.Create();

            // SHA512.Create()
            return algorithm.ComputeHash(Encoding.UTF8.GetBytes(inputString));
        }
    }
}