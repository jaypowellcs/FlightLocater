namespace Server.Models
{
    public class Flight
    {
        public int flight_Id { get; set; }
        public int flight_number { get; set; }
        public DateTime scheduled_departure { get; set; }
        public DateTime scheduled_arrival { get; set; }
        public int departure_airport { get; set; }
        public int arrival_airport { get; set; }
        public string status { get; set; }
        public string aircraft_code { get; set; }
        public DateTime update_ts { get; set; }

    }
}
