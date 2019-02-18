
var src=["http://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg","https://i.pinimg.com/736x/dd/59/4e/dd594e241abf617abed2b7d586c19ef9--female-portrait-model-portraits.jpg","https://janecanblogdotcom.files.wordpress.com/2014/09/ashley-square-profile.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiGVChS3a2-tGN4DTDIn4O7mqqtyYzbBCXmJ4llsR7K26sEeg","http://lorempixel.com/400/400/people/","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHqIkN1mv4V7xbr9xfs4k2MXCHynKQ3NJQNpks_gMM2haMRDOqQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qlY-EwA2FOcylovtgxq6vxDOHqAcOF_rqV3jm2ynHUGZUG1odg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScyUsGbKNJNAAoulEkNG_htgDEZE4yqspKJrAn-6jnRpvBJC_Uww","https://i.pinimg.com/originals/30/57/5b/30575bf32023f60346898b99847e7cb2.jpg"];
var names=["Piyush Ghildiyal","Helen Smith","Jane Smith","Joey Kapoor","Jane","Joey","Pinsui","elle","Samaira"];
var dest=["Developer" , "Engineer" , "Programmer" ,"Developer" , "Editor", "Designer", "Reviewer" , "Client" , "Lead"];

var button=document.querySelector("#gallery");
button.addEventListener("click",()=>{
var parent=
    document.getElementsByClassName("card_images");
  for(let i=0;i<4;i++){
    
var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src",src[i]);
  img.setAttribute("alt","img");
    img.setAttribute("class","temp");
   var h4 = document.createElement("h4");
 h4.textContent = names[i];  
   var h6 = document.createElement("h6");
    h6.textContent = dest[i];
       div.classList.add("card_images_js");
    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(h6);
    parent[0].appendChild(div);
  }
})
