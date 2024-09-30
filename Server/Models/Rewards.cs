namespace Server.Models
{
    public class Rewards
    {
        public int rewards_id { get; set; }
        public required string first_name { get; set; }
        public required string last_name { get; set; }
        public int account_id { get; set; }
        public string level { get; set; }
        public string email { get; set; }
        public int phone { get; set; }
        public DateTime update_ts { get; set; }
    }
