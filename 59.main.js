(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{7:function(e,t,n){e.exports=async function(){const e=await n.e(5).then(n.t.bind(null,166,7)),t=await n.e(7).then(n.t.bind(null,196,7)),{getQueryString:r,envSecurityCheck:c,browserSecurityCheck:s,ev:a}=await Promise.all([n.e(0),n.e(5),n.e(29)]).then(n.t.bind(null,320,7)),i=r();let o,l,u;i.culture?e.translate(i.culture):e.autodetectTranslation(),"true"!==i.showseedpool&&"1"!==i.showseedpool||(document.getElementById("seedpoolarea").style.display="block");const d=(i.currency||"bitcoin").toLowerCase();let m=!1,y=-1;for(o=0;o<t.currencies.length;o++){const e=t.currencies[o].name.toLowerCase();e===d&&(await t.useCurrency(o),m=!0),"bitcoin"===e&&(y=o)}m||await t.useCurrency(y),i.currency||(document.title=e.get("defaultTitle"),document.getElementById("siteTitle").alt=e.get("defaultTitle"));const p=document.getElementById("currency");let h="";for(o=0;o<t.currencies.length;o++){const e=t.currencies[o];h+="<option value='"+o+"'",e.name===t.name()&&(h+=" selected='selected'"),h+=">"+e.name+"</option>"}p.innerHTML=h;const g=document.getElementById("supportedcurrencies");let w="",b=0;for(o=0;o<t.currencies.length;o++){const e=t.currencies[o];e.shouldAddCoinList()&&(w+="<a href='?currency="+e.name,i.culture&&(w+="&culture="+i.culture),w+="'>"+e.name+"</a> ",b++)}g.innerHTML=w,document.getElementById("supportedcurrenciescounter").innerHTML=b.toString()+" ",document.getElementById("donateqrcode").style.display="none";const f=document.getElementById("donatelist");let I="<table>";for(o=0;o<t.currencies.length;o++)t.currencies[o].donate&&(I+="<tr id='currencydonatelink"+o+"'>",I+="<td class='currencyNameColumn'>"+t.currencies[o].name+"</td>",I+="<td class='address'><a href='"+t.currencies[o].name.toLowerCase()+":"+t.currencies[o].donate+"'>",I+=t.currencies[o].donate+"</a></td></tr>");for(I+="</table>",f.innerHTML=I,o=0;o<t.currencies.length;o++)t.currencies[o].donate&&a("tr#currencydonatelink"+o,"mouseover",(async function(){(await n.e(28).then(n.t.bind(null,322,7))).displayQrCode(21,this)}));if(i.i18nextract){const t=i.i18nextract,n=document.createElement("div");n.innerHTML="<h3>i18n</h3>",n.setAttribute("style","text-align: center");const r=document.createElement("textarea");r.setAttribute("rows","30"),r.setAttribute("style","width: 99%"),r.setAttribute("wrap","off"),l=document.getElementsByClassName("i18n");let c='"'+t+'": {\n';for(u=0;u<l.length;u++)c+="\t",c+='"'+l[u].id+'": "',e.translations[t]&&e.translations[t][l[u].id]?c+=C(e.translations[t][l[u].id]):c+="(ENGLISH)"+C(l[u].innerHTML),c+='",\n';for(u=0;u<e.staticID.length;u++)c+="\t",c+='"'+e.staticID[u]+'": "',e.translations[t]&&e.translations[t][e.staticID[u]]?c+=C(e.translations[t][e.staticID[u]]):c+="(ENGLISH)"+C(e.translations.en[e.staticID[u]]),c+='",\n';c+="},",r.innerHTML=c,n.appendChild(r),document.body.appendChild(n)}function C(e){return e.replace(/^\s\s*/,"").replace(/\s\s*$/,"").replace(/\s*\n+\s*/g,"\\n").replace(/"/g,'\\"')}c(),s(),(await n.e(16).then(n.t.bind(null,226,7))).open()}(),e.exports.__esModule=!0}}]);