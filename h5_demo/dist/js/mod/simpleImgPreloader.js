define("mod/simpleImgPreloader",[],function(){function n(n){return"[object Array]"===Object.prototype.toString.call(n)}var r=function(r,e,o){o=o||5e3,r=n(r)&&r||[],e="function"==typeof e&&e;var t=r.length,i=0,c=[],f=function(){i<t&&(++i,e&&e(i/t))};if(!t)return e&&e(1);for(var u=0;u<t;u++)c[u]=new Image,c[u].onload=c[u].onerror=f,c[u].src=r[u];setTimeout(function(){i<t&&(i=t,e&&e(i/t))},o*t)};return r});