"use strict"

window.onload = function () {

    const tbody = document.getElementById("tbody");
    populateCourseTable();
}

function populateCourseTable() {
    const tbody = document.getElementById("tbody");

    fetch("http://localhost:8081/api/courses")
        .then(response => response.json())
        .then(courses => {
            for (let i in courses) {
                let tr = document.createElement("tr");
                tbody.appendChild(tr);
                //----------------------------------------------------------

                let td1 = document.createElement("td");
                td1.innerHTML = courses[i].dept;
                tr.appendChild(td1);

                let td2 = document.createElement("td");
                td2.innerHTML = courses[i].courseNum;
                tr.appendChild(td2)

                let td3 = document.createElement("td");
                td3.innerHTML = courses[i].courseName;
                tr.appendChild(td3);

                let anchor = document.createElement("a");
                anchor.href = 'http://127.0.0.1:5500/pages/details.html';
                anchor.text = "See details";

                tr.appendChild(anchor);

            }
        })
}
