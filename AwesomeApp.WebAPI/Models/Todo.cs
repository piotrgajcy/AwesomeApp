﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace AwesomeApp.WebAPI.Models
{
    public class Todo
    {
        public byte Id { get; set; }

        [StringLength(250), Required]
        public string Title { get; set; }

        [StringLength(500)]
        public string Description { get; set; }

        public DateTime DateAdded { get; set; }

        public bool IsCompleted { get; set; }
    }
}