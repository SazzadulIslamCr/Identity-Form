saveData = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if (name.value==''){
        alert('Please fill up the required field!');
    }
    else {
        const form_data = {
            'name' : name.value,
            'email': email.value,
            'phone': phone.value,
            'username':username.value,
            'password':password.value
        };
    
    
        document.getElementById('submitId').disabled = true;
    
       // console.log(form_data);
    
        // var ajax_request =  new XMLHttpRequest();
    
        // ajax_request.open('POST', '/php/process_data.php');
    
        // ajax_request.send(form_data);
    
    
        //console.log(form_data);
        $.ajax({
            url: "http://localhost:8888/php/process_data.php",
            type: "POST",
            // dataType: "json",
            data: {
                'action': "exec_find",
                'data': form_data
            },
            success: function(result) {
                console.log(result);
    
                document.getElementById('submitId').disabled = false;
    
                document.getElementById('full-form').reset();
    
                document.getElementById('message').innerHTML = '<div class="alert alert-success" role="alert">Registration successful</div>';
    
                setTimeout(function(){
                    document.getElementById('message').innerHTML = '';
                },2000);
            },
            error: function(log) {
                // handle error
                alert("Failed");
            }
        });
    }


    

}