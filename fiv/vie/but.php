<?php 
if(isset($_GET["but"])){
$but=$_GET["but"];
}else{
$but=0;
}

if($but==0){include "vie/p0.php";}
if($but==1){include "vie/p1.php";}
if($but==2){include "vie/p2.php";}
if($but==3){include "vie/p3.php";}
if($but==4){include "vie/p4.php";}
if($but==5){include "vie/p5.php";}
if($but==6){include "vie/p6.php";}
if($but==7){include "vie/p7.php";}
if($but==8){include "vie/p8.php";}
if($but==9){include "vie/p9.php";}
if($but==10){include "vie/p10.php";}

?>
