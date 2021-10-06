This error is due to formData which is json object and by default ajax requrie
values to be in string format and as a solution

1. you can either remove formData and pass the values separately 
	data: { username: document.getElementById('createUserForm').value }

2. you can set the dataType to be 'json' and processData to be false
    
	$.ajax({
        url : base_url+'index.php',
        type: 'POST',
        dataType: 'json',
        data: data,
        cache : false,
        processData: false
    })