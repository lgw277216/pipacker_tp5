
function browse_img_hf(data){
	this.data = data;
	this.pre_lock = true;
  this.next_lock = true;
  this.ew = 0;
}
browse_img_hf.prototype = {
	init:function(){
		this.click_btns();
	},
	click_btns:function(){
		var that = this;
		this.data.browse_img.on('click',function(e){
          var this_elm = $(e.target);
          if(this_elm.hasClass('pre_btn')){
            that.next_lock = true;
          	// console.log(that.pre_lock);
            that.next_lock = true;
            if(that.pre_lock){
            	that.ew = 0;
              that.browse_img_m();
            }else{
              alert("已经是第一张了");
            }
            // $browse_img.find('img').attr('src','__PUBLIC_PIPACKER__/pipacker/images/bg.jpg');
          }else if(this_elm.hasClass('next_btn')){
            that.pre_lock = true;
            if(that.next_lock){
            	that.ew=1;
              that.browse_img_m();
            }else{
              alert("已经是最后一张了");
            } 
          }
        })
	},
	browse_img_m:function(){
		var that = this;
		$.ajax({
          url: that.data.url,
          type: 'get',
          data: {'works_id':that.data.works_id,'browse':that.ew},
        })
        .done(function(rdata) {
          if(!$.isEmptyObject(rdata)){
            var redata = $.parseJSON(rdata);
            if(0==redata.status){
                that.data.browse_img.find("img").attr("src",redata.rearray.works_src);
                that.data.thumbnails.text(redata.rearray.works_title);
                // that.data.works_tags.text(redata.rearray.works_tags);
                // datapp.each( function(index, el) {
                //   that.data.user_name.text(datapp[index].user_name);
                // })
                // console.log(datapp);
                if(typeof(that.data.para)!='undefined'){
                  // console.log(that.data.para);
                  that.data.para.eq(1).text(redata.rearray.works_type);
                  that.data.para.eq(2).text(redata.rearray.works_para[0]);
                  that.data.para.eq(3).text(redata.rearray.works_para[1]);
                  that.data.para.eq(4).text(redata.rearray.works_para[2]);
                  that.data.para.eq(5).text(redata.rearray.works_para[3]);
                }
                if(typeof(that.data.tags)!='undefined'){
                  // console.log(that.data.tags)
                  that.data.tags.each( function(index, el) {
                    // statements
                    that.data.tags.eq("index").text("#"+redata.rearray.works_tags[index]);
                  });
                }                
                that.data.works_id = redata.rearray.works_id;
            }else{
              if(1==that.ew){
                that.pre_lock = false;
                that.next_lock = true;
                alert("已经是第一张了");
              }else{
                that.pre_lock = true;
                that.next_lock = false;
                alert("已经是最后一张了");
              }
            }
          }else{
            alert("页面走丢了");
          }
      });
	}
}

function browse_img_yf(data){
  this.data = data;
  this.pre_lock = false;
  this.next_lock = false;
  this.ew = 0;
}
browse_img_yf.prototype = {
  init:function(){
    this.click_btn();
  },
  click_btn:function(){
    var that = this;
    this.data.browse_img.on('click',function(e){
        var this_elm = $(e.target);
        //从sessionStorage中取得图片的信息
          var sdata = $.parseJSON(sessionStorage.getItem("allpic"));
            //获取当前的图片序号
          that.data.num = that.data.browse_img.find("img").eq(0).attr("data-id");
          
          if(this_elm.hasClass('pre_btn')){
            that.next_lock = false;
            if(that.pre_lock){
              alert("真的没了");
            }else{
              if(that.data.num>0){
                that.data.num = --that.data.num;
                that.data.browsenum.find("span").eq(0).text(that.data.num+1);
                pic=sdata[that.data.num];
                // $('.browsenum').text(redata.rearray.count);
                that.data.browse_img.find("img").eq(0).attr("src",pic.works_src);
                that.data.browse_img.find("img").eq(0).attr("data-id",that.data.num);
                that.data.thumbnails.text(pic.works_profile);
                that.data.para.eq(0).text(pic.works_browse);
                that.data.para.eq(1).text(pic.works_type);
                // console.log(pic.works_para);
                if (0 !=pic.collect_val) {
                    that.data.collection.addClass("text_red");
                }
                if (!that.data.show_div.is(":hidden")) {
                    that.data.show_div.fadeOut(500);
                }
                if (that.data.detail_com.is(":hidden")) {
                    that.data.detail_com.fadeIn(500);
                } else {
                    // $detail_com.hide(500);
                }
                that.data.para.eq(2).text(pic.works_para[0]);
                that.data.para.eq(3).text(pic.works_para[1]);
                that.data.para.eq(4).text(pic.works_para[2]);
                that.data.para.eq(5).text(pic.works_para[3]);
                that.data.author.html("&copy;"+pic.user_name);
                that.data.works_id = pic.works_id;
                localStorage.setItem("apic_id", pic.works_id); 
              }else{
                that.ew = 1;
                that.data.num = 0;
                that.browse_img_n();
              }
            }
          }else if(this_elm.hasClass('next_btn')){
            that.pre_lock = false;
            if(that.next_lock){
              alert("真的没了");
            }else{              
              if(that.data.num<sdata.length-1){  
                that.data.num = ++that.data.num;
                that.data.browsenum.find("span").eq(0).text(that.data.num+1);           
                pic=sdata[that.data.num];
                // $('.browsenum').text(redata.rearray.count);
                that.data.browse_img.find("img").eq(0).attr("src",pic.works_src);
                that.data.browse_img.find("img").eq(0).attr("data-id",that.data.num);
                that.data.thumbnails.text(pic.works_profile);
                that.data.para.eq(0).text(pic.works_browse);
                that.data.para.eq(1).text(pic.works_type);
                // console.log(pic.works_para);
                if (0 != pic.collect_val) {
                    that.data.collection.addClass("text_red");
                }
                if (!that.data.show_div.is(":hidden")) {
                    that.data.show_div.fadeOut(500);
                }
                if (that.data.detail_com.is(":hidden")) {
                    that.data.detail_com.fadeIn(500);
                } else {
                    // $detail_com.hide(500);
                }
                that.data.para.eq(2).text(pic.works_para[0]);
                that.data.para.eq(3).text(pic.works_para[1]);
                that.data.para.eq(4).text(pic.works_para[2]);
                that.data.para.eq(5).text(pic.works_para[3]);
                that.data.author.html("&copy;"+pic.user_name);
                that.data.works_id = pic.works_id; 
                localStorage.setItem("apic_id", pic.works_id); 
              }else{
                that.ew=0;
                that.data.num = 0;
                that.browse_img_n();
              } 
            }
          }
        })
  },
  browse_img_n:function(){
    var that = this;
    $.ajax({
          url: that.data.url,
          type: 'get',
          data: {'works_id':that.data.works_id,'browse':that.ew},
        })
        .done(function(rdata) {
          if(!$.isEmptyObject(rdata)){
            var redata = $.parseJSON(rdata);
            if(0==redata.status){
                if(typeof(that.data.browse_nav_small_img)!='undefined'){
                  sessionStorage.clear();
                  sessionStorage.setItem("allpic",JSON.stringify(redata.rearray.allpic));
                  var str = '';
                  for(var i=0;i<redata.rearray.allpic.length;i++){
                    str+='<li><img class="nav_small_img" src="'+redata.rearray.allpic[i].works_src+'" alt="" data-id="'+i+'"></li>';
                  }
                  that.data.browse_nav_small_img.html(str);
                }
                that.data.browsenum.find("span").eq(1).text(redata.rearray.allpic.length);
                that.data.browse_img.find("img").eq(0).attr("src",redata.rearray.allpic[0].works_src);
                that.data.browse_img.find("img").eq(0).zoombieLens({Size:200,imageSrc: $(this).attr("src")});
                that.data.browse_img.find("img").eq(0).attr("data-id",that.ew?redata.rearray.allpic.length:0);
                that.data.thumbnails.text(redata.rearray.pic.works_profile);
                if(typeof(that.data.para)!='undefined'){
                  // console.log(that.data.para);
                  that.data.para.eq(0).text(redata.rearray.pic.works_browse);
                  that.data.para.eq(1).text(redata.rearray.pic.works_type);
                  that.data.para.eq(2).text(redata.rearray.pic.works_para[0]);
                  that.data.para.eq(3).text(redata.rearray.pic.works_para[1]);
                  that.data.para.eq(4).text(redata.rearray.pic.works_para[2]);
                  that.data.para.eq(5).text(redata.rearray.pic.works_para[3]);
                }
                if(typeof(that.data.tags)!='undefined'){
                  console.log(that.data)
                  that.data.tags.forEach( function(element, index) {
                    // statements
                    that.data.tags.eq(index).text(redata.rearray.pic.works_tags[index]);
                  });
                }      
                if (0 != redata.rearray.allpic[0].collect_val) {
                    that.data.collection.addClass("text_red");
                }
                if (!that.data.show_div.is(":hidden")) {
                    that.data.show_div.fadeOut(500);
                }
                if (that.data.detail_com.is(":hidden")) {
                    that.data.detail_com.fadeIn(500);
                } else {
                    // $detail_com.hide(500);
                }
                  that.data.author.html("&copy;"+redata.rearray.pic.user_name);          
                  that.data.works_id = redata.rearray.pic.works_id;
                  that.data.browsenum.find("span").eq(0).text(1);
                localStorage.setItem("apic_id", redata.rearray.pic.works_id); 
            }else{
              if(1==that.ew){
                that.pre_lock = true;
                that.next_lock = false;
                alert("已经是第一张了");
              }else{
                that.pre_lock = false;
                that.next_lock = true;
                alert("已经是最后一张了");
              }
            }
          }else{
            alert("页面走丢了");
          }
      });
  }
}

function search_works(data){
  this.data = data;
  this.researchdata=[];
}
search_works.prototype = {
  // body... 
  // 
  search:function(){
    var that = this;
    $.ajax({
      "url":that.data.url,
      "type":"get",
      data:that.data.senddata,
      success:function(redata){
        // console.log(redata);
        if(!$.isEmptyObject(redata)){
          redt = $.parseJSON(redata);
          // console.log(redt);
          if(0 == redt.status){
            // that.researchdata = redt.rearray.pic;
            // console.log(that.researchdata);
            that.data.callback(redt.rearray);
          }
        }
      }     
    });
  }
};

// function ImageSuofang(args, oImgoImg) {
//     if (args) {
//         oImgoImg.width = oImg.width * 1.1;
//         oImgoImg.height = oImg.height * 1.1;
//     }
//     else {
//         oImgoImg.width = oImg.width / 1.1;
//         oImgoImg.height = oImg.height / 1.1;
//     }
// }