function timer() {
      var sdate1 = new Date();
      t1 = sdate1.getHours() * 3600 + sdate1.getMinutes() * 60 + sdate1.getSeconds();
      sdate1.setMinutes(sdate1.getMinutes() + 60);
      t2 = sdate1.getHours() * 60 * 60;
      var ts = t2 - t1;
     /*  alert(ts) */
  var hh = parseInt(ts / 60 / 60 % 24, 10); //计算剩余的小时数
  var mm = parseInt(ts / 60 % 60, 10); //计算剩余的分钟数
  var ss = parseInt(ts % 60, 10); //计算剩余的秒数

  hh = checkTime(hh);
  mm = checkTime(mm);
  ss = checkTime(ss);
  document.getElementById("timer").innerHTML = hh + "时" + mm + "分" + ss + "秒";
  setInterval("timer()", 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}