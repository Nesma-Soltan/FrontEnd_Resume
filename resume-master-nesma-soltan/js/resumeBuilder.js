var bio = {
"name":"Nesma Soltan",
"role":"web developper",
"contacts":{
    "mobile":"020-010-01001000",
    "email":"nesma@example.com",
    "github":"Nesma-Soltan",
    "twitter":"@nesma",
    "location":"Egypt"
},
"welcomeMessage":"lorem ispum dolar sit amet etc.",
"skills":["javascript","css","html","css3"],
"biopic":"images/fry.jpg"
};
bio.display = function(){
var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);
var formattedRole =HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedRole);
var formattedcontactsMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedcontactsEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedcontactsGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedcontactsTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedcontactsLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedcontactsMobile,formattedcontactsEmail,formattedcontactsGithub,formattedcontactsTwitter,formattedcontactsLocation);
$("#footerContacts").append(formattedcontactsMobile,formattedcontactsEmail,formattedcontactsGithub,formattedcontactsTwitter,formattedcontactsLocation);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);
var formattePic=HTMLbioPic.replace("%data%",bio.biopic);
$("#header").append(formattePic);
$("#header").append(HTMLskillsStart);
for(var skill=0;skill<bio.skills.length;skill++)
 {
    var formatteSkill=HTMLskills.replace("%data%",bio.skills[skill]);
    $("#skills").append(formatteSkill);
}
};
var education={
    "schools":[
      {
        "name":"Talat Harb",
        "location":"Egypt , cairo",
        "degree":"BA",
        "majors": ["cs"],
        "dates":"Feb 2014",
        "url":"http://example.com"
      },
      {
        "name":"Mansoura university",
        "location":"Egypt , Mansoura",
        "degree":"BA",
        "majors": ["it"],
        "dates":"March 2013",
        "url":"http://example.com"
      }
    ],
  "onlineCourses":[
  {
     "title":"javascript syntax",
     "school":"Udacity",
     "dates":"April 2017",
     "url":"http://example.com"
  }
  ]
};
education.display = function(){
$("#education").append(HTMLschoolStart);
for (var school=0;school<education.schools.length;school++)
{
var formattedEduName=HTMLschoolName.replace("%data%",education.schools[school].name);
$(".education-entry:last").append(formattedEduName);
var formattedEduLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
$(".education-entry:last").append(formattedEduLocation);
var formattedEduDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
$(".education-entry:last").append(formattedEduDegree);
var formattedEduMajor=HTMLschoolMajor.replace("%data%",education.schools[school].majors);
$(".education-entry:last").append(formattedEduMajor);
var formattedEduDates=HTMLworkDates.replace("%data%",education.schools[school].dates);
$(".education-entry:last").append(formattedEduDates);
var formattedEduUrl=HTMLschoolURL.replace("%data%",education.schools[school].url);
$(".education-entry:last").append(formattedEduUrl);
}
for(var course=0;course<education.onlineCourses.length;course++)
{
$(".education-entry:last").append(HTMLonlineClasses);
var formattedEduOnlinTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
$(".education-entry:last").append(formattedEduOnlinTitle);
var formattedEduOnlinSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
$(".education-entry:last").append(formattedEduOnlinSchool);
var formattedEduOnlinDates=HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
$(".education-entry:last").append(formattedEduOnlinDates);
var formattedEduOnlinUrl=HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
$(".education-entry:last").append(formattedEduOnlinUrl);
}
};
var work={
    "jobs":[
        {
            "employer":"planet Express",
            "title":"Delevry Boy",
            "dates":"january 20- Future",
            "location":"Cairo",
            "description":"Who moved my cheese cheesy feet cauliflower cheese.Who moved my cheese cheesy feet cauliflower cheese."
        },
         {
            "employer":"pauncci 's Pizza",
            "title":"Delevry Boy",
            "dates":"Febraury 20- Future",
            "location":"Alexandria",
            "description":"Who moved my cheese cheesy feet cauliflower cheese.Who moved my cheese cheesy feet cauliflower cheese."
        }
    ]
};
work.display = function(){
for(var job=0;job<work.jobs.length;job++)
{
$("#workExperience").append(HTMLworkStart);
var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
var formattedDescription=HTMLprojectDescription.replace("%data%",work.jobs[job].description);
var formattedEmployerTitle=formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription ;
$(".work-entry:last").append(formattedEmployerTitle);
}
};
var projects={
    "projects":[
    {
        "title":"Sample project 1",
        "dates":"2016",
        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "images":[
         "http://www.gccoe.com/eductraining/assets/images/courses/project.jpg",
       "http://www.gccoe.com/eductraining/assets/images/courses/project.jpg",
        "http://www.gccoe.com/eductraining/assets/images/courses/project.jpg"
        ]
    },
    {
        "title":"Sample project 2",
        "dates":"2017",
        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
       "images":[
         "http://www.gccoe.com/eductraining/assets/images/courses/project.jpg",
        "http://www.gccoe.com/eductraining/assets/images/courses/project.jpg",
        "http://www.gccoe.com/eductraining/assets/images/courses/project.jpg"
        ]
    }
    ]
};
projects.display=function(){
for(var project=0;project<projects.projects.length;project++)
{
$("#projects").append(HTMLprojectStart);
var formattedProjTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
$(".project-entry:last").append(formattedProjTitle);
var formattedProjDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
$(".project-entry:last").append(formattedProjDates);
var formattedProjDescription=HTMLprojectDates.replace("%data%",projects.projects[project].description);
$(".project-entry:last").append(formattedProjDescription);
if (projects.projects[project].images.length>0){
    for(var image =0;image<projects.projects[project].images.length;image++)
    {
        var formattedProjImage=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjImage);
    }
}
}
};
$("#mapDiv").append(googleMap);
bio.display();
education.display();
work.display();
projects.display();
