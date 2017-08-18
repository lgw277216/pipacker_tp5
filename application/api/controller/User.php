<?php

namespace app\api\controller;

use think\Controller;
use think\Request;
use think\Db;
use app\api\controller\baseControll;

class User extends baseControll
{
    /**
     * 显示资源列表
     *
     *登录
     * 
     * @return \think\Response
     */
    public function index()
    {
        session_start();
<<<<<<< HEAD
        if (isset($_SESSION["user_info"])) {
            unset($_SESSION["user_info"]);
            $this->reJson("3");
        } else {
            $param = Request::instance()->param();
            if(!empty($param)){
               if(isset($param["user_pwd"])){
                 $param["user_pwd"]=MD5($param["user_pwd"]);
               }
=======
        if(!empty($_SESSION["user_info"])){
            unset($_SESSION["user_info"]);
            $this->reJson("3");
        }else{
            $param = Request::instance()->param();
            if(!empty($param)){

               if(isset($param["user_pwd"])){
                 $param["user_pwd"]=MD5($param["user_pwd"]);
               }

>>>>>>> af7eee8539a42221834c827c1875843b0f3b7b4d
               $user = Db::table("pp_user")->where($param)->find();
              
               if(!empty($user)){
                    unset($user["user_pwd"]);
<<<<<<< HEAD
                    $_SESSION['user_info'] = $user;
=======
                    $_SESSION["user_info"] = $user;
>>>>>>> af7eee8539a42221834c827c1875843b0f3b7b4d
                    $this->reJson("0",$user);
               }else{
                $this->reJson("1");
               }
            }else{
                $this->reJson("2",array(),"数据丢失了...");
            }
<<<<<<< HEAD
        }
=======
        }        
>>>>>>> af7eee8539a42221834c827c1875843b0f3b7b4d
    }

    /**
     * 显示创建资源表单页.
     *
     * @return \think\Response
     */
    public function create()
    {
        //
    }

    /**
     * 保存新建的资源
     *
     * @param  \think\Request  $request
     * @return \think\Response
     */
    public function save(Request $request)
    {
        //
        $param = Request::instance()->param();
        if(!empty($param)){
            $param["update_time"] = time();
            $param["user_pwd"] = MD5($param["user_pwd"]);
            if(empty($param["user_name"])){
                $param["user_name"] = "user".time();
            }
            Db::table("pp_user")->insert($param);
            $user_id = Db::table("pp_user")->getLastInsID();
            if($user_id>0){
                $this->reJson("0",$user_id,"注册成功！");
            }else{    
                $this->reJson("1",array(),"服务器处理失败！");
            }
        }else{
            $this->reJson("2",array(),"数据丢失了...");
        }
    }

    /**
     * 显示指定的资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function read($id)
    {
        //
    }

    /**
     * 显示编辑资源表单页.
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * 保存更新的资源
     *
     * @param  \think\Request  $request
     * @param  int  $id
     * @return \think\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * 删除指定资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function delete($id)
    {
        //
    }
}
