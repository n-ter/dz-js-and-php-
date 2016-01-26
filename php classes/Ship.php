<?php

class Ship extends Transport
{
	public function go(){
	$ship = new Transport();
	$ship->type_of_transport("water");
	$ship->engine_type("steam-turbine");
	$ship->move();
	}
}