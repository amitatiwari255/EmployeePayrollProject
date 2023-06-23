$(document).ready(()=>{
  $("#form1").submit(function(event){
    event.preventDefault();
    let name = $("#name").val()
    let profileImageselect =  $("input [name='profile']").val()
    let genderClicked =  $("input [name='gender']").val()
    let departments = [];
    let dept =  $("input [name='department']:checked").each(function(){departments.push($(this).val());});
    let salary = $("#salary").val();
    let day = $("#day").val()
    let month = $("#month").val()
    let year = $("#year").val()
    let notes = $("#notes").val()
    let obj = {
        name: name,
        department: JSON.stringify(departments),
        profileImage: profileImageselect,
        gender: genderClicked,
        salary: salary,
        date: day + "/" + month + "/" + year,
        notes: notes,
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/Employee",
        data: obj,
        success: function () {
            alert("data posted succesfully");
        },
        error: function () {
            alert("error in posting");
        },
    });
    console.log(obj)
    console.log(name, profileImage, gender, departments, salary, day, month, year, notes);
}
)
})
 

 

