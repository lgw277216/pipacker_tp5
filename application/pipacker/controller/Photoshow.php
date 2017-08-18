<?php 
	namespace app\pipacker\controller;
	use think\Controller;
	/**
	* 
	*/
	class Photoshow extends Controller
	{
		
		public function index()
	    {
<<<<<<< HEAD
	    	// print_r($this) ;
	    	// 是去到view里面对应的login文件夹下面的index页面
	    	session_start();
	    	if (!empty($_SESSION["user_info"])) {
	    		$this->assign("user_info",$_SESSION["user_info"]);
	    	} else {
	    		$this->assign("user_info","");
	    	}
=======
	    	session_start();
	    	if(!empty($_SESSION["user_info"])){
	    		$this->assign("user_info",$_SESSION["user_info"]);
	    	}else{
	    		$this->assign("user_info","");
	    	}
	    	// print_r($this) ;
	    	// 是去到view里面对应的login文件夹下面的index页面
>>>>>>> af7eee8539a42221834c827c1875843b0f3b7b4d
	    	return $this->fetch();
	    }
	}
 ?>