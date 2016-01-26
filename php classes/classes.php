<?php

include "Transport.php";
include "Car.php";
include "Plane.php";
include "Ship.php";
include "Train.php";
include "Bike.php";


$car = new Car();
$car->go();

$plane = new Plane();
$plane->go();

$train = new Train();
$train->go();

$car = new Ship();
$car->go();

$bike = new Bike();
$bike->go();
