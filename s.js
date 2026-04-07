var M=8,i,cn=document.getElementById("c"),ld=document.getElementById("ld"),btnss=document.getElementById("btnss"),ss=document.getElementById("ss"),ssh,ssi=0,clb=document.getElementById("clb"),clbi=0,cls=[],cli=document.getElementById("cli"),k=document.getElementById("kolor"),p=document.getElementById("poziom"),w=cn.width,h=10,c=cn.getContext("2d"),a=(2*h*Math.sqrt(3))/3,wr=(w-a)/2;btnss.onmouseover=()=>{if(!ssi)btnss.firstChild.src="ar_Rounded_white.svg"};btnss.onmouseout=()=>{if(!ssi)btnss.firstChild.src="ar_Rounded.svg"};btnss.onclick=()=>{ssi=!ssi;if(ssi){btnss.firstChild.src="pause.svg";btnss.classList.add("btna");function sss(){ss.style.transition="opacity .2s";ss.style.opacity="1";ss.style.width="0px";void ss.offsetWidth;ss.style.transition=`opacity .2s, width linear 5000ms`;ss.style.width="100%";ssh=setTimeout(()=>{var n=parseInt(p.value)+1;if(n>M)n=0;p.value=n;Rysuj_Krzywe_Sierpinskiego(k.value,p.value);sss()},5000)}sss()}else{btnss.firstChild.src="ar_Rounded_white.svg";btnss.classList.remove("btna");clearTimeout(ssh);ss.style.opacity="0"}};for(i=0;i<M;i++)cls[i]="#"+k.value;function rcl(){return""+rh()+rh()+rh()+rh()+rh()+rh()}function rclh(){return"#"+rcl()}function rcls(){for(i=0;i<M;i++)cls[i]=rclh()};clb.onclick=()=>{clbi=!clbi;if(clbi){clb.classList.add("btna");cli.src="klw.svg";rcls();Rysuj_Krzywe_Sierpinskiego(k.value,p.value)}else{clb.classList.remove("btna");cli.src="kl.svg";for(i=0;i<M;i++)cls[i]="#"+k.value;Rysuj_Krzywe_Sierpinskiego(k.value,p.value)}};k.value="f15f04";p.value="2";k.onfocus=()=>k.classList.remove("e");function arrow(i){return()=>{var n=parseInt(p.value)+i;if(n<0||n>M)return;p.value=n;Rysuj_Krzywe_Sierpinskiego(k.value,n)}}document.getElementById("arl").onclick=arrow(-1);document.getElementById("arr").onclick=arrow(1);p.onfocus=()=>p.classList.remove("e");document.getElementById("l").onclick=()=>{k.classList.remove("e");p.classList.remove("e");k.value=rcl();if(clbi)rcls();else for(i=0;i<M;i++)cls[i]="#"+k.value;var o=p.value,n;while((n=Math.floor(Math.random()*9))==o);p.value=n};document.getElementById("u").onclick=()=>{var kv=k.value,pv=p.value,b=1;if(kv.length!=6){k.classList.add("e");return};for(i=0;i<6;i++)if(!ih(kv[i])){b=0;break}if(!b){k.classList.add("e")}if(pv!="0"&&pv!="1"&&pv!="2"&&pv!="3"&&pv!="4"&&pv!="5"&&pv!="6"&&pv!="7"&&pv!="8"&&pv!="9"){p.classList.add("e");b=0}if(b)Rysuj_Krzywe_Sierpinskiego(kv,pv)};function rh(){var n=Math.floor(Math.random()*16);if(n==10)return"a";if(n==11)return"b";if(n==12)return"c";if(n==13)return"d";if(n==14)return"e";if(n==15)return"f";return n}function ih(h){return h=="0"||h=="1"||h=="2"||h=="3"||h=="4"||h=="5"||h=="6"||h=="7"||h=="8"||h=="9"||h=="a"||h=="A"||h=="b"||h=="B"||h=="c"||h=="C"||h=="d"||h=="D"||h=="e"||h=="E"||h=="f"||h=="F"}Rysuj_Krzywe_Sierpinskiego("f15f04",2);
function Rysuj_Krzywe_Sierpinskiego(kolor, stopien) {
	ld.classList.add("db");
	setTimeout(()=>{
		cn.setAttribute("width", w + "px");
		c.strokeStyle="#"+kolor;
		c.lineWidth = 7;
		ld.classList.remove("db");
		var cni = 2;
		for (var i = 0; i < stopien; i++) cni *= 2;
		var x = (w/2) - cni * h + 2 * h, y = (cn.height / 2) + cni * h - h;
		A(stopien, 1); c.beginPath(); c.moveTo(x, y); x += h; y -= h; c.lineTo(x, y); c.strokeStyle = "#" + kolor; c.stroke();
		B(stopien, 1); c.beginPath(); c.moveTo(x, y); x -= h; y -= h; c.lineTo(x, y); c.strokeStyle = "#" + kolor; c.stroke();
		C(stopien, 1); c.beginPath(); c.moveTo(x, y); x -= h; y += h; c.lineTo(x, y); c.strokeStyle = "#" + kolor; c.stroke(); 
		D(stopien, 1); c.beginPath(); c.moveTo(x, y); x += h; y += h; c.lineTo(x, y); c.strokeStyle = "#" + kolor; c.stroke();

		function A(st, i) {
			if (st == 0) return;
			A(st - 1, i + 1); c.beginPath(); c.moveTo(x, y); x += h; y -= h; c.lineTo(x, y); c.strokeStyle = cls[i]; c.stroke(); c.closePath();
			B(st - 1, i + 1); c.beginPath(); c.moveTo(x, y); x += 2 * h; c.lineTo(x, y); c.strokeStyle = cls[i]; c.stroke(); c.closePath();
			D(st - 1, i + 1); c.beginPath(); c.moveTo(x, y); x += h; y += h; c.lineTo(x, y); c.strokeStyle = cls[i]; c.stroke(); c.closePath();
			A(st - 1, i + 1);
		}
		function B(st, i) {
			if (st == 0) return;
			B(st - 1, i + 1); c.beginPath(); c.moveTo(x, y); x -= h; y -= h; c.lineTo(x, y); c.strokeStyle = cls[i]; c.stroke(); c.closePath();
			C(st - 1, i + 1); c.beginPath(); c.moveTo(x, y); y -= 2 * h; c.lineTo(x, y); c.strokeStyle = cls[i]; c.stroke(); c.closePath();
			A(st - 1, i + 1); c.beginPath(); c.moveTo(x, y); x += h; y -= h; c.lineTo(x, y); c.strokeStyle = cls[i]; c.stroke(); c.closePath();
			B(st - 1, i + 1);
		}
		function C(st, i) {
			if (st == 0) return;
			C(st - 1, i + 1); c.beginPath(); c.moveTo(x, y); x -= h; y += h; c.lineTo(x, y);  c.strokeStyle = cls[i]; c.stroke(); c.closePath();
			D(st - 1, i + 1); c.beginPath(); c.moveTo(x, y); x -= 2 * h; c.lineTo(x, y); c.strokeStyle = cls[i]; c.stroke(); c.closePath();
			B(st - 1, i + 1); c.beginPath(); c.moveTo(x, y); x -= h; y -= h; c.lineTo(x, y); c.strokeStyle = cls[i]; c.stroke(); c.closePath();
			C(st - 1, i + 1);
		}
		function D(st, i) {
			if (st == 0) return;
			D(st - 1, i + 1); c.beginPath(); c.moveTo(x, y); x += h; y += h; c.lineTo(x, y);c.strokeStyle = cls[i]; c.stroke(); c.closePath();
			A(st - 1, i + 1); c.beginPath(); c.moveTo(x, y); y += 2 * h; c.lineTo(x, y); c.strokeStyle = cls[i]; c.stroke(); c.closePath();
			C(st - 1, i + 1); c.beginPath(); c.moveTo(x, y); x -= h; y += h; c.lineTo(x, y); c.strokeStyle = cls[i]; c.stroke(); c.closePath();
			D(st - 1, i + 1);
		}
	})
}
