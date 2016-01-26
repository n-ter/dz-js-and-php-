<?php

class Car extends Transport
{
	public function go(){
	$car = new Transport();
	$car->type_of_transport("ground");
	$car->engine_type("combustion engine");
	$car->move();
	}
}