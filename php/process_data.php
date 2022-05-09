<?php
    if ($_POST){
        //print_r($_POST['data']);
    
        $connect = new mysqli('localhost','root','root','identity');

        

        $data = array(
            'name'     => $_POST['data']["name"],
            'email'    => $_POST['data']["email"],
            'phone'    => $_POST['data']["phone"],
            'username' => $_POST['data']["username"],
            'password' => $_POST['data']["password"]
        );

        //print_r($data);

        if ($connect->connect_error){
            die('Connection Failed : '.$connect->connect_error);
        }else {
            $query = $connect->prepare("
                INSERT INTO identity_table
                (Name,Email,Phone,user_name,password)
                VALUES (?, ?, ?, ?, ?)
            ");
            $query->bind_param("sssss",$data['name'],$data['email'],$data['phone'],$data['username'],$data['password']);
            $query->execute();
        }
    }
?>