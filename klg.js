var M=9,i,cn=document.getElementById("c"),ld=document.getElementById("ld"),btnss=document.getElementById("btnss"),ss=document.getElementById("ss"),ssh,ssi=0,clb=document.getElementById("clb"),clbi=0,cls=[],cli=document.getElementById("cli"),k=document.getElementById("kolor"),p=document.getElementById("poziom"),ab=document.getElementById("ab"),dia=document.getElementById("dia"),w=cn.width,h=cn.height,c=cn.getContext("2d"),hp=100,hu,a,wr,hr;calc();btnss.onmouseover=()=>{if(!ssi)btnss.firstChild.src="ar_Rounded_white.svg"};btnss.onmouseout=()=>{if(!ssi)btnss.firstChild.src="ar_Rounded.svg"};btnss.onclick=()=>{ssi=!ssi;if(ssi){btnss.firstChild.src="pause.svg";btnss.classList.add("btna");function sss(){ss.style.transition="opacity .2s";ss.style.opacity="1";ss.style.width="0px";void ss.offsetWidth;ss.style.transition=`opacity .2s, width linear 5000ms`;ss.style.width="100%";ssh=setTimeout(()=>{var n=parseInt(p.value)+1;if(n>M)n=0;p.value=n;Rysuj_Trojkat_Sierpinskiego(k.value,p.value);sss()},5000)}sss()}else{btnss.firstChild.src="ar_Rounded_white.svg";btnss.classList.remove("btna");clearTimeout(ssh);ss.style.opacity="0"}};for(i=0;i<M;i++)cls[i]="#fff";function rcl(){return""+rh()+rh()+rh()+rh()+rh()+rh()}function rclh(){return"#"+rcl()}function rcls(){for(i=0;i<M;i++)cls[i]=rclh()};clb.onclick=()=>{clbi=!clbi;if(clbi){clb.classList.add("btna");cli.src="klw.svg";rcls();Rysuj_Trojkat_Sierpinskiego(k.value,p.value)}else{clb.classList.remove("btna");cli.src="kl.svg";for(i=0;i<M;i++)cls[i]="#fff";Rysuj_Trojkat_Sierpinskiego(k.value,p.value)}};ab.onclick=()=>{dia.showModal();bok.focus()};diac.onclick=()=>dia.close();dias.onclick=()=>{var bokv=parseFloat(bok.value);if(isNaN(bokv)){bok.classList.add("e");return}hp=bokv;calc();Rysuj_Trojkat_Sierpinskiego(k.value,p.value);dia.close()};k.value="f15f04";p.value="2";k.onfocus=()=>k.classList.remove("e");function arrow(i){return()=>{var n=parseInt(p.value)+i;if(n<0||n>M)return;p.value=n;Rysuj_Trojkat_Sierpinskiego(k.value,n)}}document.getElementById("arl").onclick=arrow(-1);document.getElementById("arr").onclick=arrow(1);p.onfocus=()=>p.classList.remove("e");document.getElementById("l").onclick=()=>{k.classList.remove("e");p.classList.remove("e");k.value=rcl();if(clbi)rcls();else for(i=0;i<M;i++)cls[i]="#fff";var o=p.value,n;while((n=Math.floor(Math.random()*10))==o);p.value=n};document.getElementById("u").onclick=()=>{var kv=k.value,pv=p.value,b=1;if(kv.length!=6){k.classList.add("e");return};for(i=0;i<6;i++)if(!ih(kv[i])){b=0;break}if(!b){k.classList.add("e")}if(pv!="0"&&pv!="1"&&pv!="2"&&pv!="3"&&pv!="4"&&pv!="5"&&pv!="6"&&pv!="7"&&pv!="8"&&pv!="9"){p.classList.add("e");b=0}if(b)Rysuj_Trojkat_Sierpinskiego(kv,pv)};function rh(){var n=Math.floor(Math.random()*16);if(n==10)return"a";if(n==11)return"b";if(n==12)return"c";if(n==13)return"d";if(n==14)return"e";if(n==15)return"f";return n}function ih(h){return h=="0"||h=="1"||h=="2"||h=="3"||h=="4"||h=="5"||h=="6"||h=="7"||h=="8"||h=="9"||h=="a"||h=="A"||h=="b"||h=="B"||h=="c"||h=="C"||h=="d"||h=="D"||h=="e"||h=="E"||h=="f"||h=="F"}function calc(){hu=h*hp/100;a=(2*hu*Math.sqrt(3))/3;wr=(w-a)/2;hr=(h-hu)/2}Rysuj_Trojkat_Sierpinskiego("f15f04",2);
var points = [[400,200],[1000,300],[500,1000],[200,300]], n = 3, coef=cn.offsetWidth / cn.width;
for (var i = 0; i < points.length; i++) {
	pts.children[i].style.transform = `translate(${points[i][0]*coef-5}px,${points[i][1]*coef-5}px)`;
	pts.children[i].addEventListener("pointerdown", (e) => {
		var dw = e.layerX / cn.offsetWidth, dh = e.layerY / cn.offsetHeight;
		for (var i = 0; i <= n; i++) {
			var pw = points[i][0] / cn.width, ph = points[i][1] / cn.height;
			if (pw - 0.01 <= dw && pw + 0.01 >= dw && ph - 0.01 <= dh && ph + 0.01 >= dh)
				console.log(i)
		}
	});
}
function Rysuj_Trojkat_Sierpinskiego(kolor, stopien) {
	ld.classList.add("db");
	setTimeout(()=>{
		cn.setAttribute("width", w+"px");
		c.lineWidth = 6;
		var u = [100,200,300,400], il = 0;
		for (var t = -5000; t <= 5000; t+=0.1) {
			var oldpts = points;
			c.fillStyle = "#f15f04";
			point(400, 200);
			point(1000, 300);
			point(500, 1000);
			point(200, 300);
			c.fillStyle = "#000000";
			newpts = [[],[],[],[]];
			for (var j = 1; j <= n; j++) {
				for (var i = 0; i <= n - j; i++) {
					newpts[i][0] = ((u[i+j] - t) / (u[i+j] - u[i]) * oldpts[i][0]) + (t - u[i]) / (u[i + j] - u[i]) * oldpts[i+1][0];
					newpts[i][1] = ((u[i+j] - t) / (u[i+j] - u[i]) * oldpts[i][1]) + (t - u[i]) / (u[i + j] - u[i]) * oldpts[i+1][1];
				}
				oldpts = newpts;
			}
			
			linePoint(newpts[0][0], newpts[0][1]);
		}
		ld.classList.remove("db");
	})

	function point(x, y) {
		c.beginPath();
		c.roundRect(x - 10, y - 10, 20, 20, 10);
		c.fill();
		c.closePath();
	}

	function linePoint(x, y) {
		c.beginPath();
		c.roundRect(x - 3, y - 3, 6, 6, 3);
		c.fill();
		c.closePath();
	}
}
