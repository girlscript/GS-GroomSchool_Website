
// Groom School

 (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() 


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

