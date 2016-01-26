<?php

class Plane extends Transport
{
	public function go()
	{
	$plane = new Transport();
	$plane->type_of_transport("air");
	$plane->engine_type("jet engine");
	$plane->move();
	}
}