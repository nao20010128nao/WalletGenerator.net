(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{193:function(t,e,s){t.exports=async function(){const t=await s.e(5).then(s.t.bind(null,166,7)),e=await s.e(31).then(s.t.bind(null,519,7)).catch(()=>null);return class{constructor(t,e){this.name=t,this.donate=e,this.defaultMode=0}templateArtisticHtml(e,s){const i=this.getCoinImageUrl();return`\n      <div class='coinIcoin'>\n        <img id='coinImg' src='${i}' alt='currency_logo' />\n      </div>\n      <div class='artwallet' id='artwallet${e}'>\n        <img id='papersvg${e}' class='papersvg' src='${this.getWalletBackgroundUrl()}' />\n        <div id='qrcode_public${e}' class='qrcode_public'></div>\n        <div id='qrcode_private${e}' class='qrcode_private'></div>\n        <div class='btcaddress' id='btcaddress${e}'></div>\n        <div class='btcprivwif' id='btcprivwif${e}'></div>\n        <div class='paperWalletText'>\n          <img class='backLogo' src='${i}' alt='currency_logo' />\n          ${t.get("paperwalletback")}\n        </div>\n      </div>\n    `}getWalletBackgroundUrl(){return e["wallets/"+this.name.toLowerCase()]()}getCoinImageUrl(){return e["logos/"+this.name.toLowerCase()]()}isVanitygenPossible(t,e){return!1}testVanitygenMatch(t,e,s){return e.startsWith(t)}isUnsure(){return!1}withDefaultMode(t){const e=this.getAddressFormatNames();if("string"==typeof t&&isNaN(t)){t=t.toLowerCase();-1===(t=e.map(t=>t.toLowerCase()).indexOf(t))&&(t=0)}return this.defaultMode=+t,this}shouldAddCoinList(){return!0}}}(),t.exports.__esModule=!0}}]);