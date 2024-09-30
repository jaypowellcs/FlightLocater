namespace Server.Models
{
    public class BoardingPass
    {
        public int boarding_pass_id { get; set; }
        public int passenger_id { get; set; }
        public string seat { get; set; }
        public DateTime boarding_time { get; set; }
        public DateTime update_ts { get; set; }
    }
}
