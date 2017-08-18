<?php 
	namespace app\pipacker\controller;
	use think\Controller;
	/**
	* 
	*/
	class Prints extends Controller
	{
		
		public function index()
	    {
	    	
	    	$pp_list =  db("Works")->paginate(4);
	    	$pp_json = $pp_list->all();
	    	// print_r($pp_list);
	    	foreach ($pp_json as $key => $value) {
	    		$tags = explode(',',$value['works_tags']);
	    		$pp_json[$key]['works_tags'] =$tags;
	    	}    	
	    	$json = json_encode($pp_json);
	    	$this->assign("pp_list",$pp_list);
	    	$this->assign('json_pp',$json);
	    	$this->assign("tags",$tags);
	    	return $this->fetch();
	    }
	    public function pgskill(){
	    	session_start();
	    	if (!empty($_SESSION["user_info"])) {
	    		$this->assign("user_info",$_SESSION["user_info"]);
	    	} else {
	    		$this->assign("user_info","");
	    	}
	    	$pp_list =  db("Works")->paginate(4);
	    	$this->assign("pp_list",$pp_list);
	    	return $this->fetch('pgskill');
	    }
	    public function browse(){
	    	$id = input('id');
	    	$ew = input('ew');
	    	if(1==$ew){
	    		$pic = db("Works")->order('works_id desc')->where("works_id<$id")->limit(1)->find();
	    		// print_r($pic);
	    	}else if(0==$ew){
	    		$pic = db("Works")->order('works_id asc')->where("works_id>$id")->limit(1)->find();
	    	}
	    	if(!empty($pic)){	
		    	$tags = explode(',',$pic['works_tags']);
		    	$pic['works_tags'] = $tags;
		    	$pic['has'] = 1;
		    	return json_encode($pic);
	    	}else{
	    		$pic['has'] = 0;
	    		return json_encode($pic);
	    	}
	    }
	}
 ?>