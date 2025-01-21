// function lineColorchange(){
//     document.body.addEventListener=(click,()=>{

//     })
// }

function cardGenerate(image,logo,topic1,topic2,channel_name,views,duration){
    let html=`<div class="card">
    <div class="image">
      <img src="${image}" alt="" />
    </div>
    <div class="about">
      <div class="logo"><img src="${logo}" alt="" /></div>
      <div class="next">
        <div class="vid black">
        <div class="top1">
         ${topic1}</br>
         </div>
         ${topic2}
        </div>
        <br />
        <div class="channel_name grey">${channel_name}</div>
        <div class="info grey">${views} views.${duration} Months ago</div>
      </div>
    </div>
    </div>`

    document.querySelector(".grid").innerHTML=document.querySelector(".grid").innerHTML+html;
    // document.body.grid.innerHTML=document.body.grid.innerHTML+html
}

cardGenerate("Screenshot 2025-01-11 215909.png","unnamed.jpg","SSC6 - Hindi - Neelkanth and the Secrets","Beyond Yoga:Shri Swaminarayan Charitra","Swaminarayan Aksharpith","23","3")

cardGenerate("hq720.avif","Aruna cre(1).jpg","वसुबारस पूजा विधी: गायीची पूजा कशी करावी?|","Vasubaras Puja","Aruna Creations","2M","1")

cardGenerate("lifeInHumanform.png","AmrendraPrabhu_channellogo.jpg","The Rare Gift of Human Life ","Amarendra Dāsa","Amarendra Dāsa Official","30M","2")

cardGenerate("AMongUs.png","Amonglogo.jpg","Top 50 Tips & Tricks in Among Us","Tricks in Among Us","Clash Universe","10M","2.4")

cardGenerate("bHAGOO.png","gonbhago.jpg","Gon the stone age boy"," Disney xd","Gon The stone age boy","30M","2")

cardGenerate("Hanuman.png","Aruna cre(1).jpg","The Ramayana and Glories of ","Hanuman","Infinite god","30M","2")

cardGenerate("SquidGAME.png","netflixlogo.jpg","The Squid Game Best Scene ","Season 2","Netflix Official","30M","2")

cardGenerate("SRILA JIVA.png","AmrendraPrabhu_channellogo.jpg","The Rare Gift of Human Life ","Amarendra Dāsa","Amarendra Dāsa Official","30M","2")

cardGenerate("tOTECHAN.png","gonbhago.jpg","Gon the stone age boy ","Disney XD","Gon The stone age boy","30M","2")



document.querySelector(".touch").addEventListener("click",()=>{
   document.querySelector(".onscreen").style.opacity="1";
   document.querySelector(".onscreen").style.zIndex="10";
   document.querySelector(".onscreen").style.width="19vw";
   document.querySelector(".onscreen").style.height="100vh";
})
document.querySelector(".onscreen").addEventListener("click",()=>{
   document.querySelector(".onscreen").style.opacity="0";
   document.querySelector(".onscreen").style.zIndex="2";
   document.querySelector(".onscreen").style.width="0vw";
})


