var M=9,i,cn=document.getElementById("c"),ld=document.getElementById("ld"),clb=document.getElementById("clb"),clbi=0,cls=[],cli=document.getElementById("cli"),k=document.getElementById("kolor"),p=document.getElementById("poziom"),w=cn.width,h=cn.height,c=cn.getContext("2d"),h4=h/4,a=(2*h4*3*Math.sqrt(3))/3;for(i=0;i<M;i++)cls[i]="#f15f04";function rcl(){return""+rh()+rh()+rh()+rh()+rh()+rh()}function rclh(){return"#"+rcl()}function rcls(){for(i=0;i<M;i++)cls[i]=rclh()}clb.onclick=()=>{clbi=!clbi;if(clbi){clb.classList.add("btna");cli.src="klw.svg";rcls();Rysuj_Platek_Kocha(k.value,p.value)}else{clb.classList.remove("btna");cli.src="kl.svg";for(i=0;i<M;i++)cls[i]="#"+k.value;Rysuj_Platek_Kocha(k.value,p.value)}};k.value="f15f04";p.value="2";k.onfocus=()=>k.classList.remove("e");function arrow(i){return()=>{var n=parseInt(p.value)+i;if(n<0||n>M)return;p.value=n;Rysuj_Platek_Kocha(k.value,n)}}document.getElementById("arl").onclick=arrow(-1);document.getElementById("arr").onclick=arrow(1);p.onfocus=()=>p.classList.remove("e");document.getElementById("l").onclick=()=>{k.classList.remove("e");p.classList.remove("e");k.value=rcl();if(clbi)rcls();else for(i=0;i<M;i++)cls[i]="#"+k.value;var o=p.value,n;while((n=Math.floor(Math.random()*10))==o);p.value=n};document.getElementById("u").onclick=()=>{var kv=k.value,pv=p.value,b=1;if(kv.length!=6){k.classList.add("e");return};for(i=0;i<6;i++)if(!ih(kv[i])){b=0;break}if(!b){k.classList.add("e")}if(pv!="0"&&pv!="1"&&pv!="2"&&pv!="3"&&pv!="4"&&pv!="5"&&pv!="6"&&pv!="7"&&pv!="8"&&pv!="9"){p.classList.add("e");b=0}if(b)Rysuj_Platek_Kocha(kv,pv)};function rh(){var n=Math.floor(Math.random()*16);if(n==10)return"a";if(n==11)return"b";if(n==12)return"c";if(n==13)return"d";if(n==14)return"e";if(n==15)return"f";return n}function ih(h){return h=="0"||h=="1"||h=="2"||h=="3"||h=="4"||h=="5"||h=="6"||h=="7"||h=="8"||h=="9"||h=="a"||h=="A"||h=="b"||h=="B"||h=="c"||h=="C"||h=="d"||h=="D"||h=="e"||h=="E"||h=="f"||h=="F"}Rysuj_Platek_Kocha("f15f04",2);
function Rysuj_Platek_Kocha(kolor, stopien) {
	ld.classList.add("db");
	setTimeout(()=>{
		cn.setAttribute("width", w+"px");
		var wr=(w-a)/2;
		Platek_Kocha(wr,h4,wr+a,h4,stopien);
		Platek_Kocha(w/2,h,wr,h4,stopien);
		Platek_Kocha(wr+a,h4,w/2,h,stopien);
		c.beginPath();
		c.moveTo(wr,h4);
		c.lineTo(wr+a,h4);
		c.lineTo(w/2,h);
		c.closePath();
		c.fillStyle="#"+kolor;
		c.fill();
		ld.classList.remove("db");

		function Platek_Kocha(xa,ya,xe,ye,st){
			if (st == 0) return;
			var xb,yb,xc,yc,xd,yd,xs,ys,dx,dy;
			xb=(2*xa+xe)/3;
			yb=(2*ya+ye)/3;
			xd=(xa+2*xe)/3;
			yd=(ya+2*ye)/3;
			xc=(xa+xe)/2
			yc=(ya+ye)/2;
			dx=xe-xa;
			dy=ye-ya;
			xs=xc+Math.sqrt(3)/6*dy;
			ys=yc-Math.sqrt(3)/6*dx;
			c.beginPath();
			c.moveTo(xb,yb);
			c.lineTo(xs,ys);
			c.lineTo(xd,yd);
			c.closePath();
			c.fillStyle=cls[st-1];
			c.strokeStyle=cls[st-1];
			c.stroke();
			c.fill();
			Platek_Kocha(xa,ya,xb,yb,st-1);
			Platek_Kocha(xb,yb,xs,ys,st-1);
			Platek_Kocha(xs,ys,xd,yd,st-1);
			Platek_Kocha(xd,yd,xe,ye,st-1);
		}
	})
}
