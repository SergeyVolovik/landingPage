<?php
    if(isset($_POST['submit'])){
        $to         =   "serhii.volovyk@nure.ua";
        $from       =   $_POST['user_email'];
        $name       =   $_POST['user_name'];
        $feedback   =   $_POST['user_feedback'];
        $subject    =   "Feedback from site 'MyCompany'";
        $message    =   $name . " " . ", wrote some feedback on your site, let's look:" . "\n\n\n" . "'". $feedback ."' " . "\n\n" ."User email: ". $from ;
        $headers    =   "From:" . $from;
        mail($to,$subject,$message,$headers);
        header("Location: index.html");
    }
?>
