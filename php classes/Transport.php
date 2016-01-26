<?php
/**
* 
*/
class Transport 
{
	public $type = "";
	public function type_of_transport($type)
	{
	    $this->type = $type;
		echo "$type--";
    }
	public $engine = "";
	public function engine_type($engine)
	{
		$this->engine = $engine;
		echo "$engine--";
	}

	public function move() 
	{
		echo "Starting!<br/>";
	}
}