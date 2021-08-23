
let project1 = ["Resources\\UIUX\\Project1\\1.png", "Resources\\UIUX\\Project1\\5_Planet_maps.jpg","Resources\\UIUX\\Project1\\6_Old_concepts.jpg"]
let project2 = ["Resources\\UIUX\\Project1\\1.png", "Resources\\UIUX\\Project1\\5_Planet_maps.jpg","Resources\\UIUX\\Project1\\6_Old_concepts.jpg"]
let project3 = ["Resources/test3.jpg","Resources/test3.jpg" ,"Resources\\placeholder_render1.jpg"]
let project4 = ["Resources\\gif_02.gif","Resources/test3.jpg" ,"Resources\\placeholder_render1.jpg"]
let project5 = ["Resources\\placeholder_render1.jpg", "Resources/test2.jpg","Resources/test3.jpg"]
let project6 = ["Resources/test2.jpg","Resources/test3.jpg"]
let project7 = ["Resources/test3.jpg","Resources/test3.jpg" ,"Resources\\placeholder_render1.jpg"]
let project8 = ["Resources\\gif_02.gif","Resources/test3.jpg" ,"Resources\\placeholder_render1.jpg"]



let projects = [project1, project2,project3,project4,project5, project6,project7,project8];
let texts = ["Project 1", "Render 2", "Render 3"];

var currentProject = null;

imageNum = 0;

function changeImage(dir)
{
    imageNum += dir;
    if(imageNum < 0){
        imageNum += currentProject.length;
    }
    imageNum = imageNum%currentProject.length;

    document.getElementById("myImg").src = currentProject[imageNum];
    //document.getElementById("imageText").innerHTML = texts[imageNum];
}

function closeLightbox()
{
    document.getElementsByClassName("lightbox")[0].style.display = "none";
}


function showLightbox (input)
{
    imageNum = 0;
    currentProject = projects[input];
    document.getElementsByClassName("lightbox")[0].style.display = "block";
    document.getElementById("myImg").src = currentProject[0]

}

const varToString = varObj => Object.keys(varObj)[0];

window.onload = function() {
    var projetHtml = "";
    for (let i = 0; i < projects.length; i++) {
        console.log(i);

        if(!texts[i])
        {
            texts[i] =  "No name"
        }
        
        projetHtml += "<div class=\"ren\">  \n";
        projetHtml += "\t<img src= \"" + projects[i][0] + "\">  \n";
        projetHtml += "\t<div class=\"overlay\"  onclick=\"showLightbox(" + i + ")\"> \n";
        projetHtml += "\t\t<div class=\"text\">" + texts[i] + "</div>";
        projetHtml += "\t</div> \n";
        projetHtml += "</div> \n";    
      }



    document.getElementById("projects").innerHTML = projetHtml;



    fs.readdir(testFolder, (err, files) => {
      files.forEach(file => {
        console.log(file);
      });
    });

  };