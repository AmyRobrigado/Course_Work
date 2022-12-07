"use strict"

window.onload = function(){

    const tbody = document.getElementById("tbody");
    populateCourseTable();
}

function populateCourseTable(){
    const tbody = document.getElementById("tbody");

    fetch("http://localhost:8081/api/courses")
        .then(response => response.json())
        .then(courses => {
            for (let i in courses){
                let tr = document.createElement("tr");
                tbody.appendChild(tr);
            }
        })
}
