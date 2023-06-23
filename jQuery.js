$(document).ready(() => {
	$("#form1").submit(function (event) {
		event.preventDefault();
		let name = $("#name").val();
		let get_Profile = $("input[name='profile']:checked").val();
		let get_Gender = $("input[name='gender']:checked").val();
		let departments = [];
		let get_Department = $("input[name='department']:checked").each(
			function () {
				departments.push($(this).val());
			}
		);
		let get_Salary = $("#salary").val();
		let get_Day = $("#day").val();
		let get_Month = $("#month").val();
		let get_Year = $("#year").val();
		let get_Note = $("#notes").val();

		let obj = {
			name: name,
			profileImage: get_Profile,
			gender: get_Gender,
			department: JSON.stringify(departments),
			salary: get_Salary,
			date: get_Day + "/" + get_Month + "/" + get_Year,
			notes: get_Note,
		};
		// console.log(name+ " " +get_Profile +" "+get_Gender+" "+departments+" "+get_Salary+" "+get_Day+"/"+get_Month+"/"+get_Year+" "+get_Note)
		console.log(obj);
		//   fetch("http://localhost:3000/Employee", {
		//   method: "POST",
		//   headers: {
		//     "Content-Type": "application/json",
		//   },
		//   body: JSON.stringify(obj),
		// })
		//   .then(function (response) {
		//     if (response.ok) {
		//       // Request was successful
		//       console.log("Data sent successfully");
		//     } else {
		//       // Request was not successful
		//       console.error("Error:", response.status);
		//     }
		//   })
		//   .catch(function (error) {
		//     // An error occurred during the request
		//     console.error("An error occurred:", error);
		//   });
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

	});

});