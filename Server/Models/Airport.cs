using System.Reflection.Metadata.Ecma335;

namespace Server.Models
{
    public class Airport
    {
        public int airport_code { get; set; }
        public required string  airportName { get; set; }
        public required string city { get; set; }
        public string? airport_terminal { get; set; }
        public bool? intnl { get; set; }
        public DateTime update_ts { get; set; }
    }
}
