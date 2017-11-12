using System;
using System.Linq;
using System.Threading.Tasks;
using IMuaythai.Auth;
using IMuaythai.DataAccess.Models;
using IMuaythai.Models.Users;
using IMuaythai.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace IMuaythai.Api.Controllers
{
    //[Authorize]
    [Produces("application/json")]
    [Route("api/users")]
    public class UsersController : Controller
    {
        private IUsersRepository _repository;
        private readonly IRolesRepository _rolesRepository;
        private readonly IUserRoleRequestsRepository _userRoleRequestsRepository;
        private readonly UserManager<ApplicationUser> _userManager;

        public UsersController(IUsersRepository repository, 
            IRolesRepository rolesRepository,
            IUserRoleRequestsRepository userRoleAcceptationsRepository,
            UserManager<ApplicationUser> userManager)
        {
            _repository = repository;
            _rolesRepository = rolesRepository;
            _userRoleRequestsRepository = userRoleAcceptationsRepository;
            _userManager = userManager;
        }

        [HttpGet]
        [Route("fighters")]
        public async Task<IActionResult> GetFigthers()
        {
            try
            {
                var figtherEntities = await _userManager.GetUsersInRoleAsync("Fighter");
                var users = figtherEntities.Select(u => (UserModel)u).ToList();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    
        [HttpGet]
        [Route("Judges")]
        public async Task<IActionResult> GetJudges()
        {
            try
            {
                var judgeEntities = await _userManager.GetUsersInRoleAsync("Judge");
                var users = judgeEntities.Select(u => (UserModel)u).ToList();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("Coaches")]
        public async Task<IActionResult> GetCoaches()
        {
            try
            {
                var coachEntities = await _userManager.GetUsersInRoleAsync("Coach");
                var users = coachEntities.Select(u => (UserModel)u).ToList();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("Doctors")]
        public async Task<IActionResult> GetDoctors()
        {
            try
            {
                var doctorEntities = await _userManager.GetUsersInRoleAsync("Doctor");
                var users = doctorEntities.Select(u => (UserModel)u).ToList();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetUser([FromRoute]string id)
        {
            try
            {
                var figther = await _repository.Get(id);
                var figtherRoles = await _userManager.GetRolesAsync(figther);
                var user = (FighterModel)figther;
                user.Roles = figtherRoles.ToList();

                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
       
        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> SaveUser([FromBody]UserModel user)
        {
            try
            {
                ApplicationUser userEntity = string.IsNullOrEmpty(user.Id) ? new ApplicationUser() : await _repository.Get(user.Id);
                userEntity.Id = user.Id;
                userEntity.FirstName = user.Firstname;
                userEntity.Surname = user.Surname;
                userEntity.Birthdate = user.Birthdate;
                userEntity.Nationality = user.Nationality;
                userEntity.Facebook = user.Facebook;
                userEntity.Instagram = user.Instagram;
                userEntity.Twitter = user.Twitter;
                userEntity.VK = user.VK;
                userEntity.Phone = user.Phone;
                userEntity.Gender = user.Gender;
                userEntity.CountryId = user.CountryId;
                userEntity.InstitutionId = user.InstitutionId;

                if (user.AvatarImage != null)
                {
                    var imageBase64 = user.AvatarImage.Split(',');
                    var bytes = Convert.FromBase64String(imageBase64[1]);
                    if (bytes.Length > 0)
                    {
                        if (!string.IsNullOrEmpty(userEntity.Photo))
                        {
                            var pathToImage = "./wwwroot" + userEntity.Photo.Replace($"{Request.Scheme}://{Request.Host}", "");
                            System.IO.File.Delete(pathToImage);
                        }
                        var imageName = $"images/{Guid.NewGuid().ToString().Substring(0, 10)}.png";
                        System.IO.File.WriteAllBytes($"./wwwroot/{imageName}", bytes);
                        var location = new Uri($"{Request.Scheme}://{Request.Host}");

                        userEntity.Photo = location.AbsoluteUri + imageName;
                        user.Photo = userEntity.Photo;
                    }
                }



                await _repository.Save(userEntity);

                user.Id = userEntity.Id;

                return Created("Add", user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        [Route("Remove")]
        public IActionResult RemoveUser([FromBody]UserModel user)
        {
            try
            {
                _repository.Remove(user.Id);

                return Ok(user.Id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("roles/{userId}")]
        public async Task<IActionResult> GetUserRoles([FromRoute]string userId)
        {
            try
            {
                var userRoleAcceptationEntities = await _userRoleRequestsRepository.GetUserRequests(userId);
                var userRoleAcceptations = userRoleAcceptationEntities.Select(a => (UserRoleRequestModel)a).ToList();
                return Ok(userRoleAcceptations);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("roles/addrequest")]
        public async Task<IActionResult> AddUserRoleRequest([FromBody] UserRoleRequestModel roleRequest)
        {
            try
            {
                UserRoleRequest entity = new UserRoleRequest();
                entity.RoleId = roleRequest.RoleId;
                entity.UserId = roleRequest.UserId;
                entity.Status = UserRoleRequestStatus.Pending;
                entity.InstitutionId = roleRequest.InstitutionId;
                await _userRoleRequestsRepository.Save(entity);

                entity = await _userRoleRequestsRepository.Get(entity.Id);

                return Ok((UserRoleRequestModel)entity);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("roles/requests")]
        public async Task<IActionResult> GetRoleRequest()
        {
            try
            {
                var pendingRequestEntities = await _userRoleRequestsRepository.GetPendingRequests();
                var pendingRequest = pendingRequestEntities.Select(a => (UserRoleRequestModel)a).ToList();
                return Ok(pendingRequest);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("roles/acceptrequest")]
        public async Task<IActionResult> AcceptRoleRequest([FromBody] UserRoleRequestModel roleRequest)
        {
            try
            {
               
                UserRoleRequest entity = await _userRoleRequestsRepository.Get(roleRequest.Id);
                entity.RoleId = roleRequest.RoleId;
                entity.UserId = roleRequest.UserId;
                entity.AcceptedByUserId = User.GetUserId();
                entity.AcceptationDate = DateTime.UtcNow;
                entity.Status = UserRoleRequestStatus.Accepted;

                await _userRoleRequestsRepository.Save(entity);

                UserRolesManager userRolesManager = new UserRolesManager(_userManager);
                await userRolesManager.AddUserToRole(roleRequest.UserId, roleRequest.RoleName);

                return Ok(roleRequest);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("roles/rejectrequest")]
        public async Task<IActionResult> RejectRoleRequest([FromBody] UserRoleRequestModel roleRequest)
        {
            try
            {
                UserRoleRequest entity = await _userRoleRequestsRepository.Get(roleRequest.Id);
                entity.RoleId = roleRequest.RoleId;
                entity.UserId = roleRequest.UserId;
                entity.AcceptedByUserId = User.GetUserId();
                entity.AcceptationDate = DateTime.UtcNow;
                entity.Status = UserRoleRequestStatus.Rejected;

                await _userRoleRequestsRepository.Save(entity);

                return Ok(roleRequest);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}