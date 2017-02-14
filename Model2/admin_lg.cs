namespace WebApplication4.Model2
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class admin_lg
    {
        public long ID { get; set; }

        [StringLength(200)]
        public string adminID { get; set; }

        [Column(TypeName = "text")]
        public string ip_addy { get; set; }

        [Column(TypeName = "text")]
        public string remote_host { get; set; }

        [Column(TypeName = "text")]
        public string remote_user { get; set; }

        [Column(TypeName = "text")]
        public string server_name { get; set; }

        [Column(TypeName = "text")]
        public string server_url { get; set; }

        [StringLength(200)]
        public string log_date { get; set; }

        [StringLength(200)]
        public string log_time { get; set; }
    }
}
