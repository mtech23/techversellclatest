<?php
session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
// include 'connect.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        $first_name = $_POST['firstname'];
        $last_name = $_POST['lastname'];
        
        
     
        $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->Mailer = "smtp";
        $mail->SMTPDebug  = 3;
        $mail->SMTPAuth   = TRUE;
        $mail->SMTPSecure = "tls";
        $mail->Port       = 465;
        $mail->Host       = "mail.techversellc.com";
        $mail->Username   = "info@techversellc.com";
        $mail->Password   = "TjyH.z5R%?DQ";
        $mail->IsHTML(true);
        $mail->AddAddress("info@techversellc.com", "Techverse LLC");
        $mail->SetFrom("info@techversellc.com", "Techverse LLC");
        $mail->Subject = "Test Mail";
        $content = "<b>testsdasd.</b>";
        $mail->MsgHTML($content);
        $check_valid = true;
       
   
        if($mail->Send())
        {
                echo "sent";
        }
        else
        {
            echo "Error sending email: {$mail->ErrorInfo}";
 
        }
   
} else {
    echo "Invalid request method.";
}


// $sql ="SELECT `firstname`,`lastname`,`password` FROM `userinfo` WHERE `email` = '".$email."'";
// $result = mysqli_query($conn,$sql);

// if(mysqli_num_rows($result) == 1)
// {
//     // foreach ($result as $value) {
//     $password = $value['password'];
//     $name = $value['firstname']." ".$value['lastname'];
// }






// }


?>