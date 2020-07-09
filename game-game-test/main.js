$(document).ready(function(){
   var checkIfFlashEnabled = function() {
      var isFlashEnabled = false; 
      if (typeof(navigator.plugins)!="undefined" && typeof(navigator.plugins["Shockwave Flash"])=="object" ) {
         isFlashEnabled = true; 
      } else if (typeof window.ActiveXObject != "undefined") { 
         try { 
            if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) { 
               isFlashEnabled = true; 
            } 
         } catch(e) {

         }; 
      }; 
      return isFlashEnabled; 
   }
   if (checkIfFlashEnabled()) {
      //
   } else {
      var html="<div class='trFlash' style='background-image: url(Game-Game_files/image.jpg);'><div class='blur'></div><div class='trFlash__main'><div class='trFlash__content'><p>Для запуска игры необходимо активировать Flash-плеер</p><a class='trFlash__btn' href='https://get.adobe.com/flashplayer/' target='_blank' rel='nofollow'>активировать</a><span>или</span><ol><li>Нажмите на иконку&nbsp;<i>i</i>&nbsp;вверху слева в адресной строке браузера</li><li>В выпадающем списке 'Flash' выберите пункт 'Разрешить'</li><li>Обновите страницу и наслаждайтесь игрой</li></ol></div></div></div>";
      $('.game-src').after(html);
   }
})
