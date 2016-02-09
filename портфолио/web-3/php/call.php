<?
$tema = htmlspecialchars("Заполнен обратный звонок с ".$_SERVER['HTTP_REFERER']);
$imya = htmlspecialchars("Имя: ".$_POST['nameFF']);
$tel = htmlspecialchars("Телефон: ".$_POST['telFF']);
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
$to  = "babasinyan@gmail.com"; 
if (array_key_exists('nameFF', $_POST)) {
  mail ($to,
  $tema, 
  $imya.
   "<br>\n\r".$tel,$headers);

 echo $_POST['nameFF'];
}
?>