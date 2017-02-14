namespace WebApplication4.Model3
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class InterSwitchPostField
    {
        [Key]
        public long xid { get; set; }

        public string product_id { get; set; }

        public string amount { get; set; }

        [StringLength(50)]
        public string isw_conv_fee { get; set; }

        [StringLength(50)]
        public string currency { get; set; }

        public string site_redirect_url { get; set; }

        public string txn_ref { get; set; }

        [Column(TypeName = "text")]
        public string hash { get; set; }

        [Column(TypeName = "text")]
        public string mackey { get; set; }

        public string pay_item_id { get; set; }

        public string site_name { get; set; }

        public string cust_id { get; set; }

        [Column(TypeName = "text")]
        public string cust_id_desc { get; set; }

        public string cust_name { get; set; }

        [Column(TypeName = "text")]
        public string resp_desc { get; set; }

        public string pay_item_name { get; set; }

        public DateTime? local_date_time { get; set; }

        public string TransactionDate { get; set; }

        public string MerchantReference { get; set; }

        public string trans_status { get; set; }

        public string pay_ref { get; set; }

        public string ret_ref { get; set; }

        [StringLength(50)]
        public string xreg_date { get; set; }

        [StringLength(10)]
        public string xvisible { get; set; }

        [StringLength(10)]
        public string xsync { get; set; }
    }
}
