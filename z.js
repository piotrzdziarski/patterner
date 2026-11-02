var M=7,i,cn=document.getElementById("c"),ld=document.getElementById("ld"),btnss=document.getElementById("btnss"),ss=document.getElementById("ss"),ssh,ssi=0,clb=document.getElementById("clb"),clbi=0,cls=[],cli=document.getElementById("cli"),k=document.getElementById("kolor"),p=document.getElementById("poziom"),w=cn.width,h=cn.height,c=cn.getContext("2d"),szv=100,wysv=100,odsv=100;calc();btnss.onmouseover=()=>{if(!ssi)btnss.firstChild.src="ar_Rounded_white.svg"};btnss.onmouseout=()=>{if(!ssi)btnss.firstChild.src="ar_Rounded.svg"};btnss.onclick=()=>{ssi=!ssi;if(ssi){btnss.firstChild.src="pause.svg";btnss.classList.add("btna");function sss(){ss.style.transition="opacity .2s";ss.style.opacity="1";ss.style.width="0px";void ss.offsetWidth;ss.style.transition=`opacity .2s, width linear 5000ms`;ss.style.width="100%";ssh=setTimeout(()=>{var n=parseInt(p.value)+1;if(n>M)n=0;p.value=n;Rysuj_Zbior_Cantora(k.value,p.value);sss()},5000)}sss()}else{btnss.firstChild.src="ar_Rounded_white.svg";btnss.classList.remove("btna");clearTimeout(ssh);ss.style.opacity="0"}};for(i=0;i<M;i++)cls[i]="#fff";function rcl(){return""+rh()+rh()+rh()+rh()+rh()+rh()}function rclh(){return"#"+rcl()}function rcls(){for(i=0;i<M;i++)cls[i]=rclh()}clb.onclick=()=>{clbi=!clbi;if(clbi){clb.classList.add("btna");cli.src="klw.svg";rcls();Rysuj_Zbior_Cantora(k.value,p.value)}else{clb.classList.remove("btna");cli.src="kl.svg";for(i=0;i<M;i++)cls[i]="#fff";Rysuj_Zbior_Cantora(k.value,p.value)}};ab.onclick=()=>{dia.showModal();sz.focus()};diac.onclick=()=>dia.close();sz.onfocus=()=>sz.classList.remove("e");wys.onfocus=()=>wys.classList.remove("e");ods.onfocus=()=>ods.classList.remove("e");dias.onclick=()=>{szv=parseFloat(sz.value);wysv=parseFloat(wys.value);odsv=parseFloat(ods.value);var b=0;if(isNaN(szv)){sz.classList.add("e");b=1}if(isNaN(wysv)){wys.classList.add("e");b=1};if(isNaN(odsv)){ods.classList.add("e");b=1}if(b)return;calc();Rysuj_Zbior_Cantora(k.value,p.value);dia.close()};k.value="f15f04";p.value="2";k.onfocus=()=>k.classList.remove("e");function arrow(i){return()=>{var n=parseInt(p.value)+i;if(n<0||n>M)return;p.value=n;Rysuj_Zbior_Cantora(k.value,n)}}document.getElementById("arl").onclick=arrow(-1);document.getElementById("arr").onclick=arrow(1);p.onfocus=()=>p.classList.remove("e");document.getElementById("l").onclick=()=>{k.classList.remove("e");p.classList.remove("e");k.value=rcl();if(clbi)rcls();else for(i=0;i<M;i++)cls[i]="#fff";var o=p.value,n;while((n=Math.floor(Math.random()*8))==o);p.value=n};document.getElementById("u").onclick=()=>{var kv=k.value,pv=p.value,b=1;if(kv.length!=6){k.classList.add("e");return};for(i=0;i<6;i++)if(!ih(kv[i])){b=0;break}if(!b){k.classList.add("e")}if(pv!="0"&&pv!="1"&&pv!="2"&&pv!="3"&&pv!="4"&&pv!="5"&&pv!="6"&&pv!="7"&&pv!="8"&&pv!="9"){p.classList.add("e");b=0}if(b)Rysuj_Zbior_Cantora(kv,pv)};function rh(){var n=Math.floor(Math.random()*16);if(n==10)return"a";if(n==11)return"b";if(n==12)return"c";if(n==13)return"d";if(n==14)return"e";if(n==15)return"f";return n}function ih(h){return h=="0"||h=="1"||h=="2"||h=="3"||h=="4"||h=="5"||h=="6"||h=="7"||h=="8"||h=="9"||h=="a"||h=="A"||h=="b"||h=="B"||h=="c"||h=="C"||h=="d"||h=="D"||h=="e"||h=="E"||h=="f"||h=="F"}function calc(){console.warn("Usuń funkcję 'calc' być może")}Rysuj_Zbior_Cantora("f15f04",0);
function Rysuj_Zbior_Cantora(kolor, stopien) {
	ld.classList.add("db");
	setTimeout(()=>{
		cn.setAttribute("width", w + "px");
		c.fillStyle="#"+kolor;
		var h = stopien * (odsv + wysv), y = cn.height - ((cn.height - h) / 2) - wysv / 2;
		Cantor(0, cn.width, 0);
		ld.classList.remove("db");
		
		function Cantor(x, w, st){
			if (st == 0) {
				c.fillRect(x, y, cn.width * szv, wysv);
				Cantor(x, w / 3, st + 1);
				Cantor(x + 2 * w / 3, w / 3, st + 1);
				return
			}
			if (st <= stopien) {
				// c.fillStyle = cls[st];
				c.fillRect(x, y - ((wysv + odsv) * st), w, wysv);
				st++;
				Cantor(x, w / 3, st);
				Cantor(x + 2 * w / 3, w / 3, st);
			}
		}
	})
}
