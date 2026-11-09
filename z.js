var M=7,i,cn=document.getElementById("c"),ld=document.getElementById("ld"),clb=document.getElementById("clb"),clbi=0,cls=[],cli=document.getElementById("cli"),k=document.getElementById("kolor"),p=document.getElementById("poziom"),w=cn.width,h=cn.height,c=cn.getContext("2d"),szv=100,wysv=100,odsv=100;for(i=0;i<M;i++)cls[i]="#f15f04";function rcl(){return""+rh()+rh()+rh()+rh()+rh()+rh()}function rclh(){return"#"+rcl()}function rcls(){for(i=1;i<M;i++)cls[i]=rclh()}clb.onclick=()=>{clbi=!clbi;if(clbi){clb.classList.add("btna");cli.src="klw.svg";rcls();Rysuj_Wzor(k.value,p.value)}else{clb.classList.remove("btna");cli.src="kl.svg";for(i=0;i<M;i++)cls[i]="#"+k.value;Rysuj_Wzor(k.value,p.value)}};ab.onclick=()=>{dia.showModal();sz.focus()};diac.onclick=()=>dia.close();sz.onfocus=()=>sz.classList.remove("e");wys.onfocus=()=>wys.classList.remove("e");ods.onfocus=()=>ods.classList.remove("e");dias.onclick=()=>{szv=parseFloat(sz.value);wysv=parseFloat(wys.value);odsv=parseFloat(ods.value);var b=0;if(isNaN(szv)){sz.classList.add("e");b=1}if(isNaN(wysv)){wys.classList.add("e");b=1};if(isNaN(odsv)){ods.classList.add("e");b=1}if(b)return;Rysuj_Wzor(k.value,p.value);dia.close()};k.value="f15f04";p.value="2";k.onfocus=()=>k.classList.remove("e");function arrow(i){return()=>{var n=parseInt(p.value)+i;if(n<0||n>M)return;p.value=n;Rysuj_Wzor(k.value,n)}}document.getElementById("arl").onclick=arrow(-1);document.getElementById("arr").onclick=arrow(1);p.onfocus=()=>p.classList.remove("e");document.getElementById("l").onclick=()=>{k.classList.remove("e");p.classList.remove("e");k.value=rcl();cls[0]="#"+k.value;if(clbi)rcls();else for(i=0;i<M;i++)cls[i]="#"+k.value;var o=p.value,n;while((n=Math.floor(Math.random()*8))==o);p.value=n};document.getElementById("u").onclick=()=>{var kv=k.value,pv=p.value,b=1;if(kv.length!=6){k.classList.add("e");return};for(i=0;i<6;i++)if(!ih(kv[i])){b=0;break}if(!b){k.classList.add("e")}if(pv!="0"&&pv!="1"&&pv!="2"&&pv!="3"&&pv!="4"&&pv!="5"&&pv!="6"&&pv!="7"&&pv!="8"&&pv!="9"){p.classList.add("e");b=0}if(b)Rysuj_Wzor(kv,pv)};function rh(){var n=Math.floor(Math.random()*16);if(n==10)return"a";if(n==11)return"b";if(n==12)return"c";if(n==13)return"d";if(n==14)return"e";if(n==15)return"f";return n}function ih(h){return h=="0"||h=="1"||h=="2"||h=="3"||h=="4"||h=="5"||h=="6"||h=="7"||h=="8"||h=="9"||h=="a"||h=="A"||h=="b"||h=="B"||h=="c"||h=="C"||h=="d"||h=="D"||h=="e"||h=="E"||h=="f"||h=="F"}
window.Rysuj_Wzor = (kolor, stopien) => {
	ld.classList.add("db");
	setTimeout(()=>{
		cn.setAttribute("width", w + "px");
		if (clbi)
			cls[0] = "#" + kolor;
		else
			for (i = 0; i < M; i++) cls[i] = "#" + kolor;
		var wf = w * szv / 100, hf = stopien * (odsv + wysv) + wysv, y = h - ((h - hf) / 2) - wysv;
		Cantor((w - wf) / 2, wf, 0);
		ld.classList.remove("db");
		
		function Cantor(x, w, st) {
			if (st > stopien) return;
			c.fillStyle = cls[st];
			c.fillRect(x, y - ((wysv + odsv) * st), w, wysv);
			st++;
			Cantor(x, w / 3, st);
			Cantor(x + 2 * w / 3, w / 3, st);
		}
	})
};Rysuj_Wzor("f15f04",2);
