<?php 
if(isset($_GET["but"])){
$but=$_GET["but"];
}else{
$but=0;
}

if($but==0){include "par/p0.php";}
if($but==1){include "par/p1.php";}
if($but==2){include "par/p2.php";}
if($but==3){include "par/p3.php";}

?>
