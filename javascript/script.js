saveData = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const username = document.getElementById('username');
    const password = document.getElementById('password');


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
            // continue program
            console.log(result);
        },
        error: function(log) {
            // handle error
        }
    });


    // ajax_request.onreadystatechange = function (){
    //     if (ajax_request.readyState == 4 && ajax_request.value == 200){
    //         document.getElementById('submitId').disabled = false;

    //         document.getElementById('full-form').reset();

    //         document.getElementById('message').innerHTML = ajax_request.responseText;

    //         setTimeout(function(){
    //             document.getElementById('message').innerHTML = '';
    //         },2000);
    //     }
    // }
}