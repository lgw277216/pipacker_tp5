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
	    	
<<<<<<< HEAD
	    	$pp_list =  db("Works")->paginate(4);
	    	$pp_json = $pp_list->all();
	    	// print_r($pp_list);
	    	foreach ($pp_json as $key => $value) {
	    		$tags = explode(',',$value['works_tags']);
	    		$pp_json[$key]['works_tags'] =$tags;
	    	}    	
=======
	    	$pp_list =  db("works")->paginate(1);
	    	$pp_json = $pp_list->all();
	    	// print_r($pp_list);
	    	foreach ($pp_json as $key => $value) {
	    		$tags = explode(',',$value['works_type']);
	    		$pp_json[$key]['works_type'] =$tags;
	    	}
	    	// $pp_json[0]['works_src']= str_replace('/', '\/', $pp_json[0]['works_src']);
	    	// unset($pp_json[0]['works_src']);
	    	// unset($pp_json[0]['works_para']);
	    	// print_r($pp_json);
>>>>>>> af7eee8539a42221834c827c1875843b0f3b7b4d
	    	$json = json_encode($pp_json);
	    	$this->assign("pp_list",$pp_list);
	    	$this->assign('json_pp',$json);
	    	$this->assign("tags",$tags);
	    	return $this->fetch();
	    }
	    public function pgskill(){
<<<<<<< HEAD
	    	session_start();
	    	if (!empty($_SESSION["user_info"])) {
	    		$this->assign("user_info",$_SESSION["user_info"]);
	    	} else {
	    		$this->assign("user_info","");
	    	}
	    	$pp_list =  db("Works")->paginate(4);
=======
	    	$pp_list =  db("works")->paginate(4);
>>>>>>> af7eee8539a42221834c827c1875843b0f3b7b4d
	    	$this->assign("pp_list",$pp_list);
	    	return $this->fetch('pgskill');
	    }
	    public function browse(){
	    	$id = input('id');
	    	$ew = input('ew');
	    	if(1==$ew){
<<<<<<< HEAD
	    		$pic = db("Works")->order('works_id desc')->where("works_id<$id")->limit(1)->find();
	    		// print_r($pic);
	    	}else if(0==$ew){
	    		$pic = db("Works")->order('works_id asc')->where("works_id>$id")->limit(1)->find();
	    	}
	    	if(!empty($pic)){	
		    	$tags = explode(',',$pic['works_tags']);
		    	$pic['works_tags'] = $tags;
=======
	    		$pic = db("works")->order('works_id desc')->where("works_id<$id")->limit(1)->find();
	    		// print_r($pic);
	    	}else if(0==$ew){
	    		$pic = db("works")->order('works_id asc')->where("works_id>$id")->limit(1)->find();
	    	}
	    	if(!empty($pic)){	
		    	$tags = explode(',',$pic['works_type']);
		    	$pic['works_type'] = $tags;
>>>>>>> af7eee8539a42221834c827c1875843b0f3b7b4d
		    	$pic['has'] = 1;
		    	return json_encode($pic);
	    	}else{
	    		$pic['has'] = 0;
	    		return json_encode($pic);
	    	}
	    }
	}
 ?>