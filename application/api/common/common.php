<?php 
	aafunction reJson($status,$redata=array(),$msg=""){
		echo json_encode(array(
				'status'=> $status,
				'rearray'=> $redata,
				'msg'=>$msg
			));
	}
 ?>