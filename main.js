document.getElementById("career_exploration").style.display = "block ";

function changeTrack(id)
{
    removeActiveClass();
    document.getElementById(id+"_item").classList.add("active");
    hideSection();
    document.getElementById(id).style.display = "block";
}

function removeActiveClass()
{
    document.getElementById("career_exploration_item").classList.remove("active");  
    document.getElementById("career_development_item").classList.remove("active");  
    document.getElementById("build_track_item").classList.remove("active");  
    document.getElementById("launch_track_item").classList.remove("active");  
}

function hideSection()
{
    document.getElementById("career_exploration").style.display = "none";  
    document.getElementById("career_development").style.display = "none";    
    document.getElementById("build_track").style.display = "none";  
    document.getElementById("launch_track").style.display = "none";  
}