using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AwesomeApp.WebAPI.Dtos
{
    public class TodoDto
    {
        public byte Id { get; set; }

        [JsonProperty(PropertyName = "title")]
        [StringLength(250), Required]
        public string Title { get; set; }

        [JsonProperty(PropertyName = "description")]
        [StringLength(500)]
        public string Description { get; set; }

        [JsonProperty(PropertyName = "dateAdded")]
        public DateTime DateAdded { get; set; }

        [JsonProperty(PropertyName = "isCompleted")]
        public bool IsCompleted { get; set; }
    }
}