namespace Server.Models
{
    public class Account
    {
        public int account_id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set;}
        public int rewards_number { get; set; }
        public DateTime update_ts { get; set; }
    }
}
