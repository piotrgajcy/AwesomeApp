using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using AwesomeApp.WebAPI.Dtos;
using AwesomeApp.WebAPI.Models;

namespace AwesomeApp.WebAPI.App_Start
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Todo, TodoDto>();
            CreateMap<TodoDto, Todo>();

            CreateMap<TodoDto, Todo>()
                .ForMember(c => c.ID, opt => opt.Ignore());
        }
    }
}