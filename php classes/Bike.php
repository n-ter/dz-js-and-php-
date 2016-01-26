<?php

class Bike extends Transport
{
	public function go(){
	$bike = new Transport();
	$bike->type_of_transport("ground");
	$bike->engine_type("electric motor");
	$bike->move();
	}
}