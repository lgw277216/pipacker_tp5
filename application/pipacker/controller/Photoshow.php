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
	    	// print_r($this) ;
	    	// 是去到view里面对应的login文件夹下面的index页面
	    	session_start();
	    	if (!empty($_SESSION["user_info"])) {
	    		$this->assign("user_info",$_SESSION["user_info"]);
	    	} else {
	    		$this->assign("user_info","");
	    	}
	    	return $this->fetch();
	    }
	}
 ?>