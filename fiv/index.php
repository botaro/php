<script src=https://cdn.jsdelivr.net/gh/botaro/blo@main/js/ini.js></script>
<script src=js/hd.js></script>

<head>
<?php include "par/hd.php"; ?>
</head>

<body> 
<?php include "par/sel.php"; ?>

<div class=container-fluid><div class="text-center row">

<div id=cnv></div>
</div></div>
</body>

<script src=js/key.js></script>
<script src=js/ani.js></script>

<script src=p5/ini.js></script>
<?php 
if(isset($_GET["but"])){
$but=$_GET["but"];
}else{
$but=0;
}

if($but==0){include "par/p0.php";}
if($but==1){include "par/p1.php";}
if($but==2){include "par/p2.php";}

?>
