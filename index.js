window.onload=function(){
var form = document.getElementById('form1');

form.addEventListener('submit', function (event) {
    event.preventDefault()
    let departments = [];
    let name = document.getElementById("name").value
    let profileImageselect = document.getElementsByName("profile")
    let profileImage = ""
    for (var i of profileImageselect) {
        if (i.checked) {
            profileImage = i.value
        }

    }
    let genderClicked = document.getElementsByName("gender")
    let gender = ""
    for (var i of genderClicked) {
        if (i.checked) {
            gender = i.value
        }
    }
    let dept = document.getElementsByName("department")
    for (var i of dept) {
        if (i.checked) {
            departments.push(i.value)
        }
    }
    let salary = document.getElementById("salary").value
    let day = document.getElementById("day").value
    let month = document.getElementById("month").value
    let year = document.getElementById("year").value
    let notes = document.getElementById("notes").value

    let obj = {
        name: name,
        departments: JSON.stringify(departments),
        profileImage: profileImageselect,
        gender: gender,
        salary: salary,
        date: day + "/" + month + "/" + year,
        notes: notes,
    }
    console.log(obj)
    console.log(name, profileImage, gender, departments, salary, day, month, year, notes);



    // fetch('http://localhost:3000/Employee', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(obj)
    // })
    //     .then(function (response) {
    //         if (response.ok) {
    //             // Request was successful
    //             console.log('Data sent successfully');
    //         } else {
    //             // Request was not successful
    //             console.error('Error:', response.status);
    //         }
    //     })
    //     .catch(function (error) {
    //         // An error occurred during the request
    //         console.error('An error occurred:', error);
    //     });
       
})
}
