namespace Server.Models
{
    public class Booking
    {
        public int booking_id { get; set; }
        public string booking_ref { get; set; }
        public int price { get; set; }
        public DateTime update_ts { get; set; }
    }
}
