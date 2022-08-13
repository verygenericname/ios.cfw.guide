import{_ as c}from"./checkra1n.ace0089d.js";import{_ as r,o as d,c as u,a as e,b as o,w as a,e as n,d as i,r as l}from"./app.ea18f1bf.js";const p={},h=n('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, \xE8 necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, \xE8 possibile riscontrare problemi ad entrare in modalit\xE0 DFU</p><p>In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Questa \xE8 una pagina guida altamente sperimentale, possono essere presenti cose non direttamente menzionate che devono essere eseguite per seguire questa guida. Di conseguenza, si consiglia vivamente di usare un altro tipo di computer se possibile.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Devi aver abilitato la modalit\xE0 sviluppatore sul tuo dispositivo ChromeOS per seguire questa guida</p></div><h2 id="download-chromeos" tabindex="-1"><a class="header-anchor" href="#download-chromeos" aria-hidden="true">#</a> Download (ChromeOS)</h2>',5),_=i("L\u2019ultima release di "),m={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},v=i("checkra1n"),g=i("Se utilizzi un dispositivo A8X o A9X, dovresti invece usare la release 0.12.2 di "),b={href:"https://checkra.in/releases/0.12.2-beta#all-downloads",target:"_blank",rel:"noopener noreferrer"},k=i("checkra1n"),f=n('<p><img src="'+c+'" alt="Uno screenshot dell\u2019applicazione di checkra1n"></p><h2 id="consentire-l-esecuzione-di-checkra1n" tabindex="-1"><a class="header-anchor" href="#consentire-l-esecuzione-di-checkra1n" aria-hidden="true">#</a> Consentire l&#39;esecuzione di checkra1n</h2><ol><li>Sposta il binary di checkra1n che viene scaricato su <code>/usr/local/bin</code><ul><li>Ci\xF2 pu\xF2 essere fatto facendo quanto segue: <ul><li>premi <code>Ctrl</code> + <code>Alt</code> + <code>T</code></li><li>esegui la <code>shell</code></li><li>esegui <code>mv ~/Downloads/checkra1n /usr/local/bin/</code></li></ul></li></ul></li><li>Esegui il seguente comando nel terminale: <code>sudo mount -o remount,exec /tmp</code><ul><li>Dovrai farlo ogni volta che riavvii il tuo dispositivo ChromeOS</li></ul></li><li>Ogni volta che hai bisogno di eseguire il jailbreak su ChromeOS, \xE8 necessario collegare il dispositivo e entrare in modalit\xE0 di recupero manualmente.</li></ol><h2 id="installare-checkra1n" tabindex="-1"><a class="header-anchor" href="#installare-checkra1n" aria-hidden="true">#</a> Installare checkra1n</h2>',4),z=n("<li>Esegui il file binary di <code>checkra1n</code> nel terminale usando <code>TERM=linux sudo checkra1n</code><ul><li>Potrebbe essere necessario eseguire <code>sudo chmod a+x /usr/local/bin/checkra1n</code> se il file binary non viene eseguito</li><li>Se sei su un dispositivo A11, dovrai andare su <code>Options</code> e poi abilitare l&#39;opzione <code>Skip A11 BPR Check</code></li><li>Se sei su iOS 14.6 o successivo, dovrai andare su <code>Options</code> e abilitare l&#39;opzione <code>Allow Untested Versions</code></li><li>Se sei su un dispositivo A8X o A9X con ios 14.4-14.4.2, dovrai andare su <code>Options</code> e abilitare l&#39;opzionse <code>Allow Untested Versions</code></li></ul></li><li>Clicca <code>Start</code> e segui le istruzioni a schermo</li>",2),S=i("Adesso ti verranno illustrate delle istruzioni per riavviare il tuo dispositivo in "),C=i("modalit\xE0 DFU"),A=i(", clicca "),w=e("code",null,"Start",-1),x=i(" per iniziare "),I=e("ul",null,[e("li",null,"Segui le istruzione finch\xE9 il tuo dispositivo non mostra uno schermo nero")],-1),D=e("li",null,"Dopo ci\xF2, checkra1n dovrebbe installarsi automaticamente",-1),U=e("p",null,"Il tuo dispositivo iOS dovrebbe adesso riavviarsi.",-1),O=e("p",null,"Dopo l'avvio del dispositivo, apri l'app checkra1n e installa Cydia.",-1),N=i("Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare "),B=i("tweak"),T=i(", temi, pacchetti e altro ancora."),q={class:"custom-container tip"},y=e("p",{class:"custom-container-title"},"TIP",-1),E=i("Se desideri utilizzare un gestore di pacchetti pi\xF9 moderno, continua con "),P=i("Installare Sileo");function R(V,L){const t=l("ExternalLinkIcon"),s=l("router-link");return d(),u("div",null,[h,e("ul",null,[e("li",null,[_,e("a",m,[v,o(t)]),e("ul",null,[e("li",null,[g,e("a",b,[k,o(t)])])])])]),f,e("ol",null,[z,e("li",null,[S,o(s,{to:"/it_IT/faq/#what-is-dfu-mode"},{default:a(()=>[C]),_:1}),A,w,x,I]),D]),U,O,e("p",null,[N,o(s,{to:"/it_IT/faq/#what-are-tweaks"},{default:a(()=>[B]),_:1}),T]),e("div",q,[y,e("p",null,[E,o(s,{to:"/it_IT/installing-sileo"},{default:a(()=>[P]),_:1})])])])}var M=r(p,[["render",R],["__file","index.html.vue"]]);export{M as default};
