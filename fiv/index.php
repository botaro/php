<script src=https://cdn.jsdelivr.net/gh/botaro/blo@main/js/ini.js></script>
<script src=pub/js/hd.js></script>

<head>
<?php include "vie/hd.php"; ?>
</head>

<body> 
<?php include "vie/ani.php"; ?>
<?php include "vie/sel.php"; ?>

<div class=container-fluid><div class="text-center row">

<?php 
if(isset($_GET["but"] )){
$but=$_GET["but"];
if( $but!=0){ include "vie/cnv.php";

include "vie/pla.php";
}else{ include "vie/noc.php";}
}else{ include "vie/top.php";}


?>


</div></div>
</body>

<script src=pub/js/ini.js></script>


<?php include "vie/but.php" ?>


