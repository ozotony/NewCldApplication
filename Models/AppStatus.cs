using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class AppStatus
    {

        public string status; public string data_status;

        public SortedList<string, string> showDsStatus(string status, string data_status)
        {
            SortedList<string, string> x = new SortedList<string, string>();
            this.status = "N/A";
            this.data_status = "N/A";
            if (status == "1")
            {
                this.status = "Payment Verification Office";
                if (data_status == "Fresh")
                {
                    this.data_status = "Untreated";
                }
                else if (data_status == "Invalid")
                {
                    this.data_status = "Invalid";
                }
                else if (data_status == "V_Contact")
                {
                    this.data_status = "Being processed";
                }
            }
            if (status == "2")
            {
                this.status = "Search Office";
                if (data_status == "Valid")
                {
                    this.data_status = "Successfully reviewed";
                }
                else if (data_status == "S_Contact")
                {
                    this.data_status = "Being processed";
                }
            }
            if (status == "3")
            {
                this.status = "Examiner 1 Office";
                if (data_status == "Further Search")
                {
                    this.data_status = "Further search required";
                    this.status = "Search Office";
                }
                else if (data_status == "E_Contact")
                {
                    this.data_status = "Being processed";
                }
                else if (data_status == "Search Conducted")
                {
                    this.data_status = "Successfully reviewed";
                }
                else if (data_status == "Refused")
                {
                    this.data_status = "Refused";
                }
            }
            if (status == "4")
            {
                this.status = "Approving Office";
                if (data_status == "Not-Patentable")
                {
                    this.data_status = "Not-patentable";
                    this.status = "Examiner 1 Office";
                }
                else if (data_status == "A_Contact")
                {
                    this.data_status = "Being processed";
                }
                else if (data_status == "Futher Review")
                {
                    this.data_status = "Successfully reviewed";
                }
                else if (data_status == "Certified")
                {
                    this.data_status = "Certified";
                }
            }
            if (status == "5")
            {
                this.status = "Registrars Office";
                if (data_status == "Review Patent")
                {
                    this.data_status = "Being reviewed";
                    this.status = "Approving Office";
                }
                else if (data_status == "R_Contact")
                {
                    this.data_status = "Being processed";
                }
                else if (data_status == "Patentable")
                {
                    this.data_status = "Successfully reviewed";
                }
                else if (data_status == "Accepted")
                {
                    this.data_status = "Successfully reviewed";
                }
            }
            if (status == "6")
            {
                this.status = "Registrars Office";
                if (data_status == "Grant Patent")
                {
                    this.data_status = "Granted";
                }
            }
            x["status"] = this.status; x["data_status"] = this.data_status;
            return x;
        }

        public SortedList<string, string> showPtStatus(string status, string data_status)
        {
            SortedList<string, string> x = new SortedList<string, string>();
            this.status = "N/A";
            this.data_status = "N/A";
            if (status == "1")
            {
                this.status = "Payment Verification Office";
                if (data_status == "Fresh")
                {
                    this.data_status = "Untreated";
                }
                else if (data_status == "Invalid")
                {
                    this.data_status = "Invalid";
                }
                else if (data_status == "V_Contact")
                {
                    this.data_status = "Being processed";
                }
            }
            if (status == "2")
            {
                this.status = "Search Office";
                if (data_status == "Valid")
                {
                    this.data_status = "Successfully reviewed";
                }
                else if (data_status == "S_Contact")
                {
                    this.data_status = "Being processed";
                }
            }
            if (status == "3")
            {
                this.status = "Examiner 1 Office";
                if (data_status == "Further Search")
                {
                    this.data_status = "Further search required";
                    this.status = "Search Office";
                }
                else if (data_status == "E_Contact")
                {
                    this.data_status = "Being processed";
                }
                else if (data_status == "Search Conducted")
                {
                    this.data_status = "Successfully reviewed";
                }
                else if (data_status == "Refused")
                {
                    this.data_status = "Refused";
                }
            }
            if (status == "4")
            {
                this.status = "Patent Approving Office";
                if (data_status == "Not-Patentable")
                {
                    this.data_status = "Not-patentable";
                    this.status = "Examiner 1 Office";
                }
                else if (data_status == "A_Contact")
                {
                    this.data_status = "Being processed";
                }
                else if (data_status == "Futher Review")
                {
                    this.data_status = "Successfully reviewed";
                }
            }
            if (status == "5")
            {
                this.status = "Registrars Office";
                if (data_status == "Review Patent")
                {
                    this.data_status = "Being reviewed";
                    this.status = "Approving Office";
                }
                else if (data_status == "R_Contact")
                {
                    this.data_status = "Being processed";
                }
                else if (data_status == "Patentable")
                {
                    this.data_status = "Successfully reviewed";
                }
                else if (data_status == "Accepted")
                {
                    this.data_status = "Successfully reviewed";
                }
            }
            if (status == "6")
            {
                this.status = "Registrars Office";
                if (data_status == "Grant Patent")
                {
                    this.data_status = "Granted";
                }
            }

            x["status"] = this.status; x["data_status"] = this.data_status;
            return x;
        }

        public SortedList<string, string> showTmStatus(string status, string data_status)
        {
            SortedList<string, string> x = new SortedList<string, string>();
            this.status = "N/A";
            this.data_status = "N/A";
            if (status == "1")
            {
                this.status = "Verification";
                if (data_status == "Fresh")
                {
                    this.data_status = "Untreated";
                }
            }

            if (status == "14")
            {
                this.status = "Verification(KIV)";
                this.data_status = "Untreated";
                //  if (lt_pwx[0].data_status == "Kiv") { data_status = "Kiv"; }
            }
            if (status == "2")
            {
                this.status = "Search"; this.data_status = "Being processed";
                //if (data_status == "Re-conduct search")
                //{
                //    this.data_status = "being re-conducted";
                //}
            }
            if (status == "2b")
            {
                this.status = "Search 2"; this.data_status = "Being processed";
                //if (data_status == "Re-conduct search 1")
                //{
                //    this.data_status = "being re-conducted";
                //}
            }
            if (status == "3")
            {
                this.status = "Search 2"; this.data_status = "Being processed";
                if (data_status == "Search Conducted")
                {
                    this.data_status = "Being processed";
                }
            }
            if (status == "3b")
            {
                this.status = "Examiners"; this.data_status = "Being processed";
                if (data_status == "Search 2 Conducted")
                {
                    this.data_status = "Being processed";
                }
            }
            if (status == "4")
            {
                this.status = "Acceptance"; this.data_status = "Being processed";
                if (data_status == "Registrable")
                {
                    this.data_status = "Accepted";
                }
                else if (data_status == "Refused")
                {
                    this.data_status = "Refused";
                }
                else if (data_status == "Non-registrable")
                {
                    this.data_status = "not-registrable";
                }
            }
            if (status == "5")
            {
                this.status = "Publication"; this.data_status = "Being processed";
                if (data_status == "Accepted")
                {
                    this.data_status = "being published";
                }

                else if (data_status == "kiv")
                {
                    this.data_status = data_status;

                    this.status = "Acceptance (KIV)";

                }

                else
                {

                }
            }
            if (status == "6")
            {
                this.status = "Opposition"; this.data_status = "Being processed";
                if (data_status == "Published")
                {
                    this.data_status = "being published";
                }
                else
                {
                    this.data_status = "been opposed";
                }
            }
            if (status == "7")
            {
                this.status = "Certification"; this.data_status = "Being processed";
                if (data_status == "Not Opposed")
                {
                    this.data_status = "Being processed";
                }
            }
            if (status == "8")
            {
                this.status = "Registrars"; this.data_status = "Being processed";
                if (data_status == "Certified")
                {
                    this.data_status = "Being processed";
                }
            }
            if (status == "9")
            {
                this.status = "Registrars"; this.data_status = "Being processed";
                if (data_status == "Registered")
                {
                    this.data_status = "being registered";
                }
            }

            x["status"] = this.status; x["data_status"] = this.data_status;
            return x;
        }
    }
}