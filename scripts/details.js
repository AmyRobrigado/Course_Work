"use strict"

window.onload = function(){
    // create info cards
    infoCardPopulate();
}

function inforCardPopulate(){
    fetch("http://localhost:8081/api/courses")
    .then(responses => responses.json())
    .then(courses 

    )
}