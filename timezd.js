// 整点抢购倒计时
$(function () {
  show_time();
});

function show_time() {
  var time_start = new Date().getTime(); //设定当前时间
  var time_start1 = new Date();
  console.log(time_start1)
  console.log(time_start)
  var times = $("#closed_group").val();
  var time_end = new Date(times).getTime(); //设定目标时间
  var time_distance = time_end - time_start; // 计算时间差
  if (time_distance == 0) {
    alterTimes();
    show_time();
    return false;
  }
  //天

  var int_day = Math.floor(time_distance / 86400000);
  time_distance -= int_day * 86400000;
  // 时

  var int_hour = Math.floor(time_distance / 3600000);
  time_distance -= int_hour * 3600000;
  // 分

  var int_minute = Math.floor(time_distance / 60000);
  time_distance -= int_minute * 60000;
  // 秒 

  var int_second = Math.floor(time_distance / 1000);

  //时分秒为单数时、前面加零 
  if (int_day == 0) {
    int_day = '';
  } else if (int_day < 10) {
    int_day = "0" + int_day + '天';
  } else {
    int_day = int_day + '天';
  }
  if (int_hour == 0) {
    int_hour = '';
  } else if (int_hour < 10) {
    int_hour = "0" + int_hour + '时';
  } else {
    int_hour = int_hour + '时';
  }
  if (int_minute == 0) {
    int_minute = '';
  } else if (int_minute < 10) {
    int_minute = "0" + int_minute + '分';
  } else {
    int_minute = int_minute + '分';
  }
  if (int_second == 0) {
    int_second = '';
  } else if (int_second < 10) {
    int_second = "0" + int_second + '秒';
  } else {
    int_second = int_second + '秒';
  }
  if (int_day == 0 && int_hour == 0 && int_hour == 0 && int_second == 0) {
    int_time = "活动结束";
  }

  // 显示时间

  var int_time = int_day + int_hour + int_minute + int_second;
  console.log(int_time)
  $('#closed_group_time').html(int_time);
  // 设置定时器
  setTimeout("show_time()", 1000);
}


// 当计时器完成倒计时，执行
function alterTimes() {
  var id = $("#closed_group']").attr('rel');
  $.post("{:U('Index/groupon_detail')}", {
    'id': id,
    'good_type': 3
  }, function (data) {
    $("#closed_group']").val(data);
  });
}
