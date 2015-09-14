$(document).ready(function(e) {
	
	//省份城市联动代码
	new PCAS("Province", "City");
	//$('.form_cont').fadeIn();
	
	//留资
	$('.form_cont .post_btn').click(function(){
		
		var data = {};
		data.name = $('.username').val();
		data.Phone = $('.usertel').val();
		data.province = $('.province').val();
		data.city = $('.city').val();
		data.site = 'mobile';
		data.Directions = 5;
		data.source = window.location.href;
		data.disclaimer = '同意';
		
		$.ajax({
			dataType:'jsonp',
			url:'http://xuancaic3xr.dongfeng-citroen.com.cn/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=AddReservationdrive',
			data:data,
			success: function(data){
				if(data.IsSuccess == "1"){
					alert('提交成功');
					$('.share_cont').fadeIn(100);
				}
				else{
					alert(data.ErrMsg);
				}
			}
		})
			
	});
	
});