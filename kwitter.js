function addUser()
{
    user_name=document.getElementById("user_name").Value;
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html"
}
