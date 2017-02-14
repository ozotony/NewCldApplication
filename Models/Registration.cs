using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Registration
    {
        private Helpers hf = new Helpers();
        public string xid { get; set; }
        public string AccrediationType { get; set; }
        public string Sys_ID { get; set; }
        public string Firstname { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string xpassword { get; set; }
        public string DateOfBrith { get; set; }
        public string IncorporatedDate { get; set; }
        public string Nationality { get; set; }
        public string PhoneNumber { get; set; }
        public string CompanyName { get; set; }
        public string CompanyAddress { get; set; }
        public string ContactPerson { get; set; }
        public string ContactPersonPhone { get; set; }
        public string CompanyWebsite { get; set; }
        public string Certificate { get; set; }
        public string Introduction { get; set; }
        public string Principal { get; set; }
        public string logo { get; set; }
        public string xreg_date { get; set; }
        public string xstatus { get; set; }
        public string xvisible { get; set; }
        public string xsync { get; set; }

        public JObject Token { get; set; }

        public string imageurl { get; set; }

        public int addApplicant(Applicant x)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("INSERT INTO applicant (xname,address,xemail,xmobile) VALUES ('" + hf.ConvertApos2Tab(x.applicantname) + "','" + hf.ConvertApos2Tab(x.address) + "','" + hf.ConvertApos2Tab(x.email) + "','" + x.mobile + "') SELECT SCOPE_IDENTITY()", connection);
            connection.Open();
            int num = Convert.ToInt32(command.ExecuteScalar());
            connection.Close();
            return num;
        }

        public int addFee_details(XObjs.Fee_details x)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("INSERT INTO fee_details (fee_listID,twalletID,xqty,xused,xlogstaff,tot_amt,init_amt,tech_amt,xreg_date,xvisible,xsync) VALUES ('" + x.fee_listID + "','" + x.twalletID + "','" + x.xqty + "','" + x.xused + "','" + x.xlogstaff + "','" + x.tot_amt + "','" + x.init_amt + "','" + x.tech_amt + "','" + x.xreg_date + "','" + x.xvisible + "','" + x.xsync + "') SELECT SCOPE_IDENTITY()", connection);
            connection.Open();
            int num = Convert.ToInt32(command.ExecuteScalar());
            connection.Close();
            return num;
        }

        public int addFee_list(XObjs.Fee_list x)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("INSERT INTO fee_list (item,item_code,qt_code,xdesc,init_amt,tech_amt,xcategory,xlogstaff,xreg_date,xvisible,xsync) VALUES ('" + x.item + "','" + x.item_code + "','" + x.qt_code + "','" + x.item + "','" + x.init_amt + "','" + x.tech_amt + "','" + x.xcategory + "','" + x.xlogstaff + "','" + x.xreg_date + "','" + x.xvisible + "','" + x.xsync + "') SELECT SCOPE_IDENTITY()", connection);
            connection.Open();
            int num = Convert.ToInt32(command.ExecuteScalar());
            connection.Close();
            return num;
        }

        public int addHwallet(XObjs.Hwallet x)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("INSERT INTO hwallet (transID,fee_detailsID,used_status,xreg_date,used_date,product_title) VALUES ('" + x.transID + "','" + x.fee_detailsID + "','" + x.used_status + "','" + x.xreg_date + "','" + x.used_date + "','" + x.product_title + "') SELECT SCOPE_IDENTITY()", connection);
            connection.Open();
            int num = Convert.ToInt32(command.ExecuteScalar());
            connection.Close();
            return num;
        }

        public int addImpXpayAgent(XObjs.XAgent x)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("INSERT INTO xagent (addressID,sys_ID,xname,cname,xpassword,nationality,xreg_date,xvisible,xsync) VALUES ('" + x.addressID + "','" + x.sys_ID + "','" + x.xname + "','" + x.cname + "','" + x.xpassword + "','" + x.nationality + "','" + x.xreg_date + "','" + x.xvisible + "','" + x.xsync + "') SELECT SCOPE_IDENTITY()", connection);
            connection.Open();
            int num = Convert.ToInt32(command.ExecuteScalar());
            connection.Close();
            return num;
        }

        public int addInterSwitchRecords(XObjs.InterSwitchPostFields x)
        {
            string str = "";
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            string str3 = (str + "INSERT INTO InterSwitchPostFields (product_id,amount,isw_conv_fee,currency,site_redirect_url,txn_ref,hash,mackey,pay_item_id, ") + " site_name,cust_id,cust_id_desc,cust_name,resp_desc,pay_item_name,local_date_time,MerchantReference,TransactionDate,trans_status,pay_ref, " + " ret_ref,xreg_date,xvisible,xsync) ";
            str3 = str3 + " VALUES ('" + x.product_id + "','" + x.amount + "','" + x.isw_conv_fee + "','" + x.currency + "','" + x.site_redirect_url + "','" + x.txn_ref + "','" + x.hash + "','" + x.mackey + "', ";
            str3 = str3 + "'" + x.pay_item_id + "','" + x.site_name + "','" + x.cust_id + "','" + x.cust_id_desc + "','" + x.cust_name + "','" + x.resp_desc + "','" + x.pay_item_name + "', ";
            SqlCommand command = new SqlCommand(str3 + "'" + x.local_date_time + "','" + x.TransactionDate + "','" + x.MerchantReference + "','" + x.trans_status + "','" + x.pay_ref + "','" + x.ret_ref + "','" + x.xreg_date + "','" + x.xvisible + "','" + x.xsync + "') SELECT SCOPE_IDENTITY()", connection);
            connection.Open();
            int num = Convert.ToInt32(command.ExecuteScalar());
            connection.Close();
            return num;
        }

        public int addPRatio(XObjs.PRatio x)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("INSERT INTO p_ratio (xpartnerID,p_type,xratio,r_type,xreg_date,xvisible,xsync) VALUES ('" + x.xpartnerID + "','" + x.p_type + "','" + x.xratio + "','" + x.r_type + "','" + x.xreg_date + "','" + x.xvisible + "','" + x.xsync + "') SELECT SCOPE_IDENTITY()", connection);
            connection.Open();
            int num = Convert.ToInt32(command.ExecuteScalar());
            connection.Close();
            return num;
        }

        public int addPwallet(XObjs.Pwallet x)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("INSERT INTO pwallet (xemail,xmobile,xmemberID,xmembertype,xpass,reg_date) VALUES ('" + x.xemail + "','" + x.xmobile + "','" + x.xmemberID + "','" + x.xmembertype + "','" + x.xpass + "','" + x.reg_date + "') SELECT SCOPE_IDENTITY()", connection);
            connection.Open();
            int num = Convert.ToInt32(command.ExecuteScalar());
            connection.Close();
            return num;
        }

        public int addTwallet(XObjs.Twallet x)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("INSERT INTO twallet (transID,xmemberID,xmembertype,xpay_status,xgt,ref_no,xbankerID,applicantID,xreg_date,xvisible,xsync) VALUES ('" + x.transID + "','" + x.xmemberID + "','" + x.xmembertype + "','" + x.xpay_status + "','" + x.xgt + "','" + x.ref_no + "','" + x.xbankerID + "','" + x.applicantID + "','" + x.xreg_date + "','" + x.xvisible + "','" + x.xsync + "') SELECT SCOPE_IDENTITY()", connection);
            connection.Open();
            int num = Convert.ToInt32(command.ExecuteScalar());
            connection.Close();
            return num;
        }

        public int addXpayAddress(XObjs.Address x)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("INSERT INTO address (countryID,stateID,lgaID,city,street,zip,telephone1,telephone2,email1,email2,log_staff,reg_date,visible,xsync) VALUES ('" + x.countryID + "','" + x.stateID + "','" + x.lgaID + "','" + x.city + "','" + x.street + "','" + x.zip + "','" + x.telephone1 + "','" + x.telephone2 + "','" + x.email1 + "','" + x.email2 + "','" + x.log_staff + "','" + x.reg_date + "','" + x.visible + "','" + x.xsync + "') SELECT SCOPE_IDENTITY()", connection);
            connection.Open();
            int num = Convert.ToInt32(command.ExecuteScalar());
            connection.Close();
            return num;
        }

        public int addXpayAdmin(XObjs.XMember x)
        {
            string str = "0";
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("INSERT INTO xadmin (addressID,sys_ID,xname,cname,xpassword,nationality,xreg_date,xvisible,xsync) VALUES ('" + x.addressID + "','" + x.sys_ID + "','" + x.xname + "','" + x.cname + "','" + x.xpassword + "','" + x.nationality + "','" + x.xreg_date + "','" + x.xvisible + "','" + x.xsync + "') SELECT SCOPE_IDENTITY()", connection);
            connection.Open();
            int num = Convert.ToInt32(command.ExecuteScalar());
            connection.Close();
            if (num > 0)
            {
                str = "CLD/RX/" + num.ToString().PadLeft(5, '0');
                updateXpayAdmin(num.ToString(), str);
            }
            return num;
        }

        public int addXpayAgent(XObjs.XAgent x)
        {
            string str = "0";
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("INSERT INTO xagent (addressID,sys_ID,xname,cname,xpassword,nationality,xreg_date,xvisible,xsync) VALUES ('" + x.addressID + "','" + x.sys_ID + "','" + x.xname + "','" + x.cname + "','" + x.xpassword + "','" + x.nationality + "','" + x.xreg_date + "','" + x.xvisible + "','" + x.xsync + "') SELECT SCOPE_IDENTITY()", connection);
            connection.Open();
            int num = Convert.ToInt32(command.ExecuteScalar());
            connection.Close();
            if (num > 0)
            {
                str = "CLD/RA/" + num.ToString().PadLeft(5, '0');
                updateXpayAgent(num.ToString(), str);
            }
            return num;
        }

        public int addXpayBanker(XObjs.XBanker x)
        {
            string str = "0";
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("INSERT INTO xbanker (bankname,xposition,addressID,sys_ID,xname,xpassword,nationality,xreg_date,xvisible,xsync) VALUES ('" + x.bankname + "','" + x.xposition + "','" + x.addressID + "','" + x.sys_ID + "','" + x.xname + "','" + x.xpassword + "','" + x.nationality + "','" + x.xreg_date + "','" + x.xvisible + "','" + x.xsync + "') SELECT SCOPE_IDENTITY()", connection);
            connection.Open();
            int num = Convert.ToInt32(command.ExecuteScalar());
            connection.Close();
            if (num > 0)
            {
                str = "CLD/RB/" + num.ToString().PadLeft(5, '0');
                updateXpayBanker(num.ToString(), str);
            }
            return num;
        }

        public int addXpayMember(XObjs.XMember x)
        {
            string str = "0";
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("INSERT INTO xmember (addressID,sys_ID,xname,cname,xpassword,nationality,xreg_date,xvisible,xsync) VALUES ('" + x.addressID + "','" + x.sys_ID + "','" + x.xname + "','" + x.cname + "','" + x.xpassword + "','" + x.nationality + "','" + x.xreg_date + "','" + x.xvisible + "','" + x.xsync + "') SELECT SCOPE_IDENTITY()", connection);
            connection.Open();
            int num = Convert.ToInt32(command.ExecuteScalar());
            connection.Close();
            if (num > 0)
            {
                str = "CLD/RP/" + num.ToString().PadLeft(5, '0');
                updateXpayMember(num.ToString(), str);
            }
            return num;
        }

        public int addXpayPartner(XObjs.XPartner x)
        {
            string str = "0";
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("INSERT INTO xpartner (addressID,sys_ID,xname,cname,xpassword,nationality,xreg_date,xvisible,xsync) VALUES ('" + x.addressID + "','" + x.sys_ID + "','" + x.xname + "','" + x.cname + "','" + x.xpassword + "','" + x.nationality + "','" + x.xreg_date + "','" + x.xvisible + "','" + x.xsync + "') SELECT SCOPE_IDENTITY()", connection);
            connection.Open();
            int num = Convert.ToInt32(command.ExecuteScalar());
            connection.Close();
            if (num > 0)
            {
                str = "XP/RP/" + num.ToString().PadLeft(5, '0');
                updateXpayMember(num.ToString(), str);
            }
            return num;
        }

        public int deleteFee_detailsByID(string xid)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("DELETE FROM Fee_details  WHERE xid='" + xid + "'  ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int deleteFee_list(string xid)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("DELETE FROM fee_list  WHERE xid='" + xid + "'  ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int deleteHwallet(string xid)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("DELETE FROM hwallet  WHERE xid='" + xid + "'  ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int deletePRatio(string xid)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("DELETE FROM p_ratio  WHERE xid='" + xid + "'  ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public string formatISWTrasactionDate(string date)
        {
            if ((date != null) && (date != ""))
            {
                date = date.Trim();
                return (date.Replace("T", " ") + ".000");
            }
            return "";
        }

        public int updateAddressProfile(string xid, string xemail, string xmobile)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE address SET email1='" + xemail + "',telephone1='" + xmobile + "'  WHERE ID='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateAdmin(string xid, string xmem_id, string xemail, string xmobile, string xpass, string xname, string cname)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE pwallet SET xemail='" + xemail + "',xmobile='" + xmobile + "',xpass='" + xpass + "'  WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return updateXAdminProfile(xmem_id, xname, cname, xpass);
        }

        public int updateDeleteXAdmin(string xid)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE xadmin SET xvisible='0' WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateDeleteXMember(string xid)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE xmember SET xvisible='0' WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateDeleteXPartner(string xid)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE xpartner SET xvisible='0' WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateFee_detailsQty(string xid, string xqty, string tot_amt)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE Fee_details SET xqty='" + xqty + "',tot_amt='" + tot_amt + "' WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateFee_detailsTransactionRef(string twalletID, string new_ref)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE Fee_details SET twalletID='" + new_ref + "' WHERE twalletID='" + twalletID + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateFee_list(XObjs.Fee_list f)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE fee_list SET item='" + f.item + "',item_code='" + f.item_code + "',qt_code='" + f.qt_code + "',xdesc='" + f.item + "',init_amt='" + f.init_amt + "',tech_amt='" + f.tech_amt + "',xcategory='" + f.xcategory + "',xlogstaff='" + f.xlogstaff + "',xsync='" + f.xsync + "' WHERE xid='" + f.xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateHwallet(string xid, string used_status, string used_date, string product_title)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE hwallet SET used_status='" + used_status + "',product_title='" + product_title + "',used_date='" + used_date + "'  WHERE xid='" + xid + "'  ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }



        public int updateHwallet2(string xid, string used_status)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE hwallet SET used_status='" + used_status + "'   WHERE transid='" + xid + "'  ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateHwalletTransactionRef(string tref, string new_ref)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE hwallet SET transID='" + new_ref + "'  WHERE transID='" + tref + "'  ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateInterSwitchPostFieldsDate(string transID, string new_local_date)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE InterSwitchPostFields SET local_date_time='" + new_local_date + "'  WHERE txn_ref='" + transID + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateInterSwitchRecords(string txnref, string payRef, string retRef, string trans_status, string TransactionDate, string MerchantReference, string resp_desc, string pay_ref)
        {
            TransactionDate = formatISWTrasactionDate(TransactionDate);
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            //  SqlCommand command = new SqlCommand("UPDATE InterSwitchPostFields SET MerchantReference='" + MerchantReference.Trim() + "',pay_ref='" + payRef.Trim() + "',ret_ref='" + retRef.Trim() + "',trans_status='" + trans_status.Trim() + "',TransactionDate='" + TransactionDate.Trim() + "',resp_desc='" + resp_desc.Trim() + "'  WHERE txn_ref='" + txnref.Trim() + "' ", connection);

            SqlCommand command = new SqlCommand("UPDATE InterSwitchPostFields SET MerchantReference='" + MerchantReference + "' ,ret_ref='" + retRef + "',trans_status='" + trans_status + "',TransactionDate='" + TransactionDate + "',resp_desc='" + resp_desc + "' ,pay_ref='" + pay_ref + "'  WHERE txn_ref='" + txnref.Trim() + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateInterSwitchTransactionRef(string txnref, string new_tref, string new_hash)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE InterSwitchPostFields SET txn_ref='" + new_tref + "',hash='" + new_hash + "'  WHERE txn_ref='" + txnref + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateInterSwitchVisibleStatus(string transID, string status)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE InterSwitchPostFields SET xvisible='" + status + "'  WHERE txn_ref='" + transID + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateMerchant(string xid, string xmem_id, string xemail, string xmobile, string xpass, string xname, string cname)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE pwallet SET xemail='" + xemail + "',xmobile='" + xmobile + "',xpass='" + xpass + "'  WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return updateXPartnerProfile(xmem_id, xname, cname, xpass);
        }

        public int updatePRatio(XObjs.PRatio f)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE p_ratio SET xpartnerID='" + f.xpartnerID + "',p_type='" + f.p_type + "',xratio='" + f.xratio + "',r_type='" + f.r_type + "' WHERE xid='" + f.xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updatePwalletProfile(string xid, string xemail, string xmobile, string xpass, string addressID)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE pwallet SET xemail='" + xemail + "',xmobile='" + xmobile + "',xpass='" + xpass + "'  WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return updateAddressProfile(addressID, xemail, xmobile);
        }

        public int updateRegistrationSysID(string xid, string Sys_ID)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXhome());
            SqlCommand command = new SqlCommand("UPDATE registrations SET Sys_ID='" + Sys_ID + "' WHERE xid='" + xid + "'  ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }


        public int updateRegistrationSysID2(string xid, string Sys_ID2)
        {

            SqlConnection connection = new SqlConnection(hf.ConnectXhome());
            SqlCommand command = new SqlCommand("UPDATE registrations SET xsync='" + Sys_ID2 + "' WHERE xid='" + xid + "'  ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }


        public int updateTransID2(string xid, string Sys_ID2)
        {

            SqlConnection connection = new SqlConnection(hf.ConnectXcld());
            SqlCommand command = new SqlCommand("UPDATE pwallet  SET TransactionId='" + Sys_ID2 + "' WHERE ID='" + xid + "'  ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }


        public int updateTransID3(string xid, string Sys_ID2)
        {
            string Sys_ID3 = "Migrated";
            string Sys_ID4 = "7";
            SqlConnection connection = new SqlConnection(hf.ConnectXcld());
            SqlCommand command = new SqlCommand("UPDATE g_pwallet  SET TransactionId='" + Sys_ID2 + "',data_status='" + Sys_ID3 + "',status='" + Sys_ID4 + "' WHERE validationID='" + xid + "'  ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateSubAgentSysID(string xid, string Sys_ID)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXhome());
            SqlCommand command = new SqlCommand("UPDATE subagents SET Sys_ID='" + Sys_ID + "' WHERE xid='" + xid + "'  ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateTwalletBanker(string transID, string xbankerID, string xmemberID)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE twallet SET xbankerID='" + xbankerID + "',xpay_status='1'  WHERE transID='" + transID + "' AND xmemberID='" + xmemberID + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateTwalletPaymentStatus(string transID, string xpay_status)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE twallet SET xpay_status='" + xpay_status + "'  WHERE transID='" + transID + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateTwalletReference(string transID, string new_ref)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE twallet SET transID='" + new_ref + "'  WHERE transID='" + transID + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateTwalletXgt(string transID, string xtype, string xmemberID)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE twallet SET xgt='" + xtype + "'  WHERE transID='" + transID + "' AND xmemberID='" + xmemberID + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateTwalletXgtBanker(string transID, string xtype, string xmemberID)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE twallet SET xgt='" + xtype + "',xpay_status='2'  WHERE transID='" + transID + "' AND xmemberID='" + xmemberID + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateUsedFee_details(string xid, string xused)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE xmember SET xused='" + xused + "' WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateXAdminProfile(string xid, string xname, string cname, string xpass)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE xadmin SET xname='" + xname + "',cname='" + cname + "',xpassword='" + xpass + "'  WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateXMemberProfile(string xid, string xname, string cname, string xpass)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE xmember SET xname='" + xname + "',cname='" + cname + "',xpassword='" + xpass + "'  WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateXPartnerProfile(string xid, string xname, string cname, string xpass)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE xpartner SET xname='" + xname + "',cname='" + cname + "',xpassword='" + xpass + "'  WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateXpayAdmin(string xid, string sys_ID)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE xadmin SET sys_ID='" + sys_ID + "' WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateXpayAgent(string xid, string sys_ID)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE xagent SET sys_ID='" + sys_ID + "' WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateXpayBanker(string xid, string sys_ID)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE xbanker SET sys_ID='" + sys_ID + "' WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateXpayMember(string xid, string sys_ID)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE xmember SET sys_ID='" + sys_ID + "' WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }

        public int updateXpayPartner(string xid, string sys_ID)
        {
            SqlConnection connection = new SqlConnection(hf.ConnectXpay());
            SqlCommand command = new SqlCommand("UPDATE xpartner SET sys_ID='" + sys_ID + "' WHERE xid='" + xid + "' ", connection);
            connection.Open();
            int num = command.ExecuteNonQuery();
            connection.Close();
            return num;
        }
    }
}