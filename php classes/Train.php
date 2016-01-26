<?php

class Train extends Transport
{
	public function go()
	{
	$train = new Transport();
	$train->type_of_transport("ground");
	$train->engine_type("diesel engine");
	$train->move();
	}
}