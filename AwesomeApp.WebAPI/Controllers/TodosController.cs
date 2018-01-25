using System;
using System.Collections.Generic;
using AutoMapper;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using AwesomeApp.WebAPI.Models;
using AwesomeApp.WebAPI.Dtos;

namespace AwesomeApp.WebAPI.Controllers
{
    public class TodosController : ApiController
    {
        private AwesomeAppWebAPIContext db = new AwesomeAppWebAPIContext();

        // GET: api/Todos
        public IHttpActionResult GetTodoes()
        {
            var TodoDtos = db.Todoes.ToList().Select(Mapper.Map<Todo, TodoDto>);
            return Ok(TodoDtos);
        }

        // GET: api/Todos/5
        [ResponseType(typeof(Todo))]
        public async Task<IHttpActionResult> GetTodo(int id)
        {
            Todo todo = await db.Todoes.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }

            return Ok(Mapper.Map<Todo, TodoDto>(todo));
        }

        // PUT: api/Todos/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTodo(int id, Todo todo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != todo.ID)
            {
                return BadRequest();
            }

            db.Entry(todo).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Todos
        [ResponseType(typeof(Todo))]
        [HttpPost]
        public async Task<IHttpActionResult> PostTodo(TodoDto todoDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var todo = Mapper.Map<TodoDto, Todo>(todoDto);
            todo.DateAdded = DateTime.Now;
            db.Todoes.Add(todo);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TodoExists(todoDto.ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = todo.ID }, todo);
        }

        // DELETE: api/Todos/5
        [ResponseType(typeof(Todo))]
        public async Task<IHttpActionResult> DeleteTodo(int id)
        {
            Todo todo = await db.Todoes.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }

            db.Todoes.Remove(todo);
            await db.SaveChangesAsync();

            return Ok(todo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TodoExists(int id)
        {
            return db.Todoes.Count(e => e.ID == id) > 0;
        }
    }
}