var M=9,i,cn=document.getElementById("c"),ld=document.getElementById("ld"),btnss=document.getElementById("btnss"),ss=document.getElementById("ss"),ssh,ssi=0,clb=document.getElementById("clb"),clbi=0,cls=[],cli=document.getElementById("cli"),k=document.getElementById("kolor"),p=document.getElementById("poziom"),ab=document.getElementById("ab"),dia=document.getElementById("dia"),w=cn.width,h=cn.height,c=cn.getContext("2d"),hu,a,wr,hr,u=[0,100,200,300];btnss.onmouseover=()=>{if(!ssi)btnss.firstChild.src="ar_Rounded_white.svg"};btnss.onmouseout=()=>{if(!ssi)btnss.firstChild.src="ar_Rounded.svg"};btnss.onclick=()=>{ssi=!ssi;if(ssi){btnss.firstChild.src="pause.svg";btnss.classList.add("btna");function sss(){ss.style.transition="opacity .2s";ss.style.opacity="1";ss.style.width="0px";void ss.offsetWidth;ss.style.transition=`opacity .2s, width linear 5000ms`;ss.style.width="100%";ssh=setTimeout(()=>{var n=parseInt(p.value)+1;if(n>M)n=0;p.value=n;Rysuj_Krzywa_Lagrange(k.value,p.value);sss()},5000)}sss()}else{btnss.firstChild.src="ar_Rounded_white.svg";btnss.classList.remove("btna");clearTimeout(ssh);ss.style.opacity="0"}};for(i=0;i<M;i++)cls[i]="#fff";function rcl(){return""+rh()+rh()+rh()+rh()+rh()+rh()}function rclh(){return"#"+rcl()}function rcls(){for(i=0;i<M;i++)cls[i]=rclh()};clb.onclick=()=>{clbi=!clbi;if(clbi){clb.classList.add("btna");cli.src="klw.svg";rcls();Rysuj_Krzywa_Lagrange(k.value,p.value)}else{clb.classList.remove("btna");cli.src="kl.svg";for(i=0;i<M;i++)cls[i]="#fff";Rysuj_Krzywa_Lagrange(k.value,p.value)}};ab.onclick=()=>{dia.showModal();u0.focus();for(var i=0;i<=p.value;i++){var el=document.getElementById("u"+i);if(!isNaN(parseFloat(el.value)))el.classList.remove("e")}};diac.onclick=()=>dia.close();
var points = [[400,200],[1000,300],[500,1000],[200,300]], coef=cn.offsetWidth / cn.width,translatesX=[],translatesY=[];
for (var i = 0; i <= p.value; i++) {
	var el = document.getElementById("u" + i);
	el.onfocus = (e) => e.target.classList.remove("e")
}
dias.onclick=()=>{
	var wasErrorDetected = 0;
	for (var i = 0; i <= p.value; i++) {
		var el = document.getElementById("u" + i)
		u[i] = parseFloat(el.value);
		if (isNaN(u[i])) { 
			el.classList.add("e");
			wasErrorDetected = 1
		}
	}
	if (wasErrorDetected) return;
	Rysuj_Krzywa_Lagrange(k.value,p.value);
	dia.close()
};
k.value="494948";p.value="3";k.onfocus=()=>k.classList.remove("e");
function arrow(i) {
	return () => {
		var n = parseInt(p.value) + i;
		if (n < 0 || n > M) return;
		p.value = n;
		if (i == 1) {
			points.push([cn.width/2,cn.height/2]);
			u.push(n * 100);console.log(u);
			var pt = pts.children[0].cloneNode(true);
			pt.innerText = n;
			pts.appendChild(pt);
			adjustPointPosition(n)
		}
		Rysuj_Krzywa_Lagrange(k.value, n)
	}
}
document.getElementById("arl").onclick=arrow(-1);document.getElementById("arr").onclick=arrow(1);p.onfocus=()=>p.classList.remove("e");document.getElementById("l").onclick=()=>{k.classList.remove("e");p.classList.remove("e");k.value=rcl();if(clbi)rcls();else for(i=0;i<M;i++)cls[i]="#fff";var o=p.value,n;while((n=Math.floor(Math.random()*10))==o);p.value=n};document.getElementById("u").onclick=()=>{var kv=k.value,pv=p.value,b=1;if(kv.length!=6){k.classList.add("e");return};for(i=0;i<6;i++)if(!ih(kv[i])){b=0;break}if(!b){k.classList.add("e")}if(pv!="0"&&pv!="1"&&pv!="2"&&pv!="3"&&pv!="4"&&pv!="5"&&pv!="6"&&pv!="7"&&pv!="8"&&pv!="9"){p.classList.add("e");b=0}if(b)Rysuj_Krzywa_Lagrange(kv,pv)};function rh(){var n=Math.floor(Math.random()*16);if(n==10)return"a";if(n==11)return"b";if(n==12)return"c";if(n==13)return"d";if(n==14)return"e";if(n==15)return"f";return n}function ih(h){return h=="0"||h=="1"||h=="2"||h=="3"||h=="4"||h=="5"||h=="6"||h=="7"||h=="8"||h=="9"||h=="a"||h=="A"||h=="b"||h=="B"||h=="c"||h=="C"||h=="d"||h=="D"||h=="e"||h=="E"||h=="f"||h=="F"}Rysuj_Krzywa_Lagrange(k.value,p.value);
var isPointering, pointeringIndex, downX, downY, moveX, moveY, isDrawing = 0;
function adjustPointsPositions() {
	for (let i = 0; i < points.length; i++) adjustPointPosition(i);
}
function adjustPointPosition(i) {
	translatesX[i] = points[i][0]*coef-5;
	translatesY[i] = points[i][1]*coef-5;
	pts.children[i].style.transform = `translate(${translatesX[i]}px,${translatesY[i]}px)`
}
adjustPointsPositions();
for (let i = 0; i < points.length; i++) {
	pts.children[i].addEventListener("pointerdown", (e) => {
		if (isDrawing) return;
		isPointering = 1;
		pointeringIndex = i;
		downX = e.screenX;
		downY = e.screenY;
		cn.style.cursor = "grabbing";
		for (let i = 0; i <= p.value; i++)
			pts.children[i].style.cursor = "grabbing";
	})
}
window.onresize = () => {
	coef = cn.offsetWidth / cn.width;
	adjustPointsPositions()
}
window.addEventListener("pointermove", (e) => {
	if (isPointering) {
		var cnRect = cn.getBoundingClientRect();
		if (e.clientX > cnRect.x && e.clientX < cnRect.x + cnRect.width)
			moveX = translatesX[pointeringIndex] - downX + e.screenX;
		if (e.clientY > cnRect.y && e.clientY < cnRect.y + cnRect.height)
			moveY = translatesY[pointeringIndex] - downY + e.screenY;
		pts.children[pointeringIndex].style.transform = `translate(${moveX}px,${moveY}px)`
	}
});
window.addEventListener("pointerup", (e) => {
	if (isPointering) {
		isPointering = 0;
		if (moveX === undefined) {
			moveX = translatesX[pointeringIndex] - downX + e.screenX;
			moveY = translatesY[pointeringIndex] - downY + e.screenY
		}
		points[pointeringIndex][0] = moveX / coef + 5 / coef;
		points[pointeringIndex][1] = moveY / coef + 5 / coef;
		translatesX[pointeringIndex] = moveX;
		translatesY[pointeringIndex] = moveY;
		cn.style.cursor = "default";
		Rysuj_Krzywa_Lagrange(k.value, p.value)
	}
});
function Rysuj_Krzywa_Lagrange(kolor, stopien) {
	ld.classList.add("db");
	setTimeout(()=>{
		isDrawing = 1;
		for (let i = 0; i <= stopien; i++)
			pts.children[i].style.cursor = "default";
		cn.setAttribute("width", w+"px");
		c.fillStyle = "#" + kolor;
		for (var t = -1000; t <= 1000; t+=0.1) {
			var oldpts = points, newpts = [];
			for (let i = 0; i <= stopien; i++) newpts.push([]);
			for (var j = 1; j <= stopien; j++) {
				for (var i = 0; i <= stopien - j; i++) {
					newpts[i][0] = ((u[i+j] - t) / (u[i+j] - u[i]) * oldpts[i][0]) + (t - u[i]) / (u[i + j] - u[i]) * oldpts[i+1][0];
					newpts[i][1] = ((u[i+j] - t) / (u[i+j] - u[i]) * oldpts[i][1]) + (t - u[i]) / (u[i + j] - u[i]) * oldpts[i+1][1];
				}
				oldpts = newpts;
			}
			drawPoint(newpts[0][0], newpts[0][1]);
			function drawPoint(x, y) {
				setTimeout(()=>{linePoint(x, y)}, t * 5 + 1000)
			}
		}
		setTimeout(() => { 
			isDrawing = 0;
			for (let i = 0; i <= stopien; i++)
				pts.children[i].style.cursor = "grab";
		}, 2500);
		ld.classList.remove("db");
	})
}

function linePoint(x, y) {
	c.beginPath();
	c.roundRect(x - 3, y - 3, 6, 6, 3);
	c.fill();
	c.closePath();
}
