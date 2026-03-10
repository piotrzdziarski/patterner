var M=9,i,cn=document.getElementById("c"),clb=document.getElementById("clb"),clbi=0,cls=[],cli=document.getElementById("cli"),k=document.getElementById("kolor"),p=document.getElementById("poziom"),w=cn.width,h=cn.height,c=cn.getContext("2d"),a=(2*h*Math.sqrt(3))/3,wr=(w-a)/2;for(i=0;i<M;i++)cls[i]="#fff";function rcl(){return""+rh()+rh()+rh()+rh()+rh()+rh()}function rclh(){return"#"+rcl()}function rcls(){for(i=0;i<M;i++)cls[i]=rclh()}clb.onclick=()=>{clbi=!clbi;if(clbi){clb.classList.add("btna");cli.src="klw.svg";rcls();Rysuj_Trojkat_Sierpinskiego(k.value,p.value)}else{clb.classList.remove("btna");cli.src="kl.svg";for(i=0;i<M;i++)cls[i]="#fff";Rysuj_Trojkat_Sierpinskiego(k.value,p.value)}};k.value="f15f04";p.value="2";k.onfocus=()=>k.classList.remove("e");p.onfocus=()=>p.classList.remove("e");document.getElementById("l").onclick=()=>{k.classList.remove("e");p.classList.remove("e");k.value=rcl();if(clbi)rcls();else for(i=0;i<M;i++)cls[i]="#fff";var o=p.value,n;while((n=Math.floor(Math.random()*10))==o);p.value=n};document.getElementById("u").onclick=()=>{var kv=k.value,pv=p.value,b=1;if(kv.length!=6){k.classList.add("e");return};for(i=0;i<6;i++)if(!ih(kv[i])){b=0;break}if(!b){k.classList.add("e")}if(pv!="0"&&pv!="1"&&pv!="2"&&pv!="3"&&pv!="4"&&pv!="5"&&pv!="6"&&pv!="7"&&pv!="8"&&pv!="9"){p.classList.add("e");b=0}if(b)Rysuj_Trojkat_Sierpinskiego(kv,pv)};function rh(){var n=Math.floor(Math.random()*16);if(n==10)return"a";if(n==11)return"b";if(n==12)return"c";if(n==13)return"d";if(n==14)return"e";if(n==15)return"f";return n}function ih(h){return h=="0"||h=="1"||h=="2"||h=="3"||h=="4"||h=="5"||h=="6"||h=="7"||h=="8"||h=="9"||h=="a"||h=="A"||h=="b"||h=="B"||h=="c"||h=="C"||h=="d"||h=="D"||h=="e"||h=="E"||h=="f"||h=="F"}Rysuj_Trojkat_Sierpinskiego("f15f04",2);
function Rysuj_Trojkat_Sierpinskiego(kolor, stopien) {
	c.fillStyle="#"+kolor;
	triangle(wr,h,w/2,0,w-wr,h);
	Trojkat_Sierpinskiego(wr,h,w/2,0,w-wr,h,stopien);
	
	function Trojkat_Sierpinskiego(ax,ay,bx,by,cx,cy,st){
		if(st==0)return;
		var abx,aby,acx,acy,bcx,bcy;
		bcx=(bx+cx)/2;
		bcy=(by+cy)/2;
		acx=(ax+cx)/2;
		acy=(ay+cy)/2;
		abx=(ax+bx)/2;
		aby=(ay+by)/2;
		c.fillStyle=cls[st-1];
		triangle(abx,aby,bcx,bcy,acx,acy);
		Trojkat_Sierpinskiego(ax,ay,abx,aby,acx,acy,st-1);
		Trojkat_Sierpinskiego(abx,aby,bx,by,bcx,bcy,st-1);
		Trojkat_Sierpinskiego(acx,acy,bcx,bcy,cx,cy,st-1);
	}

}
function triangle(ax,ay,bx,by,cx,cy) {
	c.beginPath();
	c.moveTo(ax,ay);
	c.lineTo(bx,by);
	c.lineTo(cx,cy);
	c.fill();
}
