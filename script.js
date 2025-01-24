  // تشغيل صوت الأزرار
    
  function sendToWhatsApp(productName, price) {
    const phoneNumber = '+96103175016';
    const message = 'Hello, I would like to order: ${productName} for $${price}.';
    const url = 'https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}';
    var buttonSound = document.getElementById("buttonSound");
    buttonSound.play();
    window.open(url, '_blank');
}// إخفاء الـ Loader عند تحميل الصفحة
window.addEventListener('load', function () {
const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');

// إخفاء الـ Loader بعد 1.5 ثانية
setTimeout(() => {
loader.style.display = 'none';
mainContent.style.display = 'block';
}, 1500); // يمكنك تعديل الزمن حسب رغبتك
});

{
var x=0;
var y=0;
var size=0;
var rotation=0;
var transitiontimer;
var wingtimer;
var nexttimer;

function flutter(vartimer)
{
var wrapper=document.getElementById("butterfly_wrapper");

nexttimer=vartimer+(generaterandomno(-200,200));
nexttimer=(nexttimer<1500||nexttimer>3000?1500:nexttimer);

x+=generaterandomno(-80,80);
y+=generaterandomno(-80,80);

x=(x<20?30:x);
y=(y<20?30:y);
x=(x>250?240:x);
y=(y>250?240:y);

size+=generaterandomno(-10,10);
size=(size<10?20:size);
size=(size>50?40:size);

rotation+=generaterandomno(-10,10);
rotation=(rotation<-20?0:rotation);
rotation=(rotation>20?0:rotation);

transitiontimer=generaterandomno(20,50)/10;

wrapper.style.marginLeft=x+"px";
wrapper.style.marginTop=y+"px";
wrapper.style.width=size+"px";
wrapper.style.height=size+"px";
wrapper.style.transform="rotate("+rotation+"deg)";
wrapper.style.webkitTransform="rotate("+rotation+"deg)";		
wrapper.style.transition="all "+transitiontimer+"s";	
wrapper.style.webkitTransition="all "+transitiontimer+"s";

wingtimer=generaterandomno(1,5);
var upperwings=document.getElementsByClassName("upperwing");
var lowerwings=document.getElementsByClassName("lowerwing");

for (var k=0;k<=1;k++)
{
    upperwings[k].style.animationDuration="0."+wingtimer+"s";
    upperwings[k].style.webkitAnimationDuration="0."+wingtimer+"s";
    lowerwings[k].style.animationDuration="0."+wingtimer+"s";
    lowerwings[k].style.webkitAnimationDuration="0."+wingtimer+"s";		
}

setTimeout(function(){flutter(nexttimer);},vartimer);
}

function generaterandomno(varmin,varmax)
{
return Math.floor((Math.random() * (varmax-varmin+1)) + varmin);
}
}