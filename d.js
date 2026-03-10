var M=9,i,cn=document.getElementById("c"),clb=document.getElementById("clb"),clbi=0,cls=[],cli=document.getElementById("cli"),k=document.getElementById("kolor"),p=document.getElementById("poziom"),w=cn.width,h=cn.height,c=cn.getContext("2d"),wr=(w-h)/2;for(i=0;i<M;i++)cls[i]="#fff";function rcl(){return""+rh()+rh()+rh()+rh()+rh()+rh()}function rclh(){return"#"+rcl()}function rcls(){for(i=0;i<M;i++)cls[i]=rclh()}clb.onclick=()=>{clbi=!clbi;if(clbi){clb.classList.add("btna");cli.src="klw.svg";rcls();Rysuj_Dywan_Sierpinskiego(k.value,p.value)}else{clb.classList.remove("btna");cli.src="kl.svg";for(i=0;i<M;i++)cls[i]="#fff";Rysuj_Dywan_Sierpinskiego(k.value,p.value)}};k.value="f15f04";p.value="2";k.onfocus=()=>k.classList.remove("e");p.onfocus=()=>p.classList.remove("e");document.getElementById("l").onclick=()=>{k.classList.remove("e");p.classList.remove("e");k.value=rcl();if(clbi)rcls();else for(i=0;i<M;i++)cls[i]="#fff";var o=p.value,n;while((n=Math.floor(Math.random()*10))==o);p.value=n};document.getElementById("u").onclick=()=>{var kv=k.value,pv=p.value,b=1;if(kv.length!=6){k.classList.add("e");return};for(i=0;i<6;i++)if(!ih(kv[i])){b=0;break}if(!b){k.classList.add("e")}if(pv!="0"&&pv!="1"&&pv!="2"&&pv!="3"&&pv!="4"&&pv!="5"&&pv!="6"&&pv!="7"&&pv!="8"&&pv!="9"){p.classList.add("e");b=0}if(b)Rysuj_Dywan_Sierpinskiego(kv,pv)};function rh(){var n=Math.floor(Math.random()*16);if(n==10)return"a";if(n==11)return"b";if(n==12)return"c";if(n==13)return"d";if(n==14)return"e";if(n==15)return"f";return n}function ih(h){return h=="0"||h=="1"||h=="2"||h=="3"||h=="4"||h=="5"||h=="6"||h=="7"||h=="8"||h=="9"||h=="a"||h=="A"||h=="b"||h=="B"||h=="c"||h=="C"||h=="d"||h=="D"||h=="e"||h=="E"||h=="f"||h=="F"}Rysuj_Dywan_Sierpinskiego("f15f04",2);
function Rysuj_Dywan_Sierpinskiego(kolor, stopien) {
	c.fillStyle="#"+kolor;
	c.fillRect(wr,0,h,h);
	var h3=h/3;
	Dywan_Sierpinskiego(wr+h3,h3,h3,stopien);
	
	function Dywan_Sierpinskiego(x,y,d,st){
		if(st==0)return;
		c.fillStyle=cls[st-1];
		c.fillRect(x,y,d,d);
		d=d/3;
		Dywan_Sierpinskiego(x-2*d,y-2*d,d,st-1);
		Dywan_Sierpinskiego(x+d,y-2*d,d,st-1);
		Dywan_Sierpinskiego(x+4*d,y-2*d,d,st-1);
		Dywan_Sierpinskiego(x+4*d,y+d,d,st-1);
		Dywan_Sierpinskiego(x+4*d,y+4*d,d,st-1);
		Dywan_Sierpinskiego(x+d,y+4*d,d,st-1);
		Dywan_Sierpinskiego(x-2*d,y+4*d,d,st-1);
		Dywan_Sierpinskiego(x-2*d,y+d,d,st-1);
	}

}
