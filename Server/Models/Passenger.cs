namespace Server.Models
{
    public class Passenger
    {
        public int passenger_id { get; set; }
        public int booking_id { get; set; }
        public string booking_ref { get; set; }
        public int passenger_number { get; set; }
        public required string first_name { get; set; }
        public required string last_name { get; set; }
        public int account_id { get; set; }
        public DateTime update_ts { get; set; }

    }
}
