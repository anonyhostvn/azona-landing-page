const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElement= document.querySelectorAll('.hidden');
hiddenElement.forEach((el)=> observer.observe(el));

var load= document.getElementById("preloader");
    window.addEventListener("load", function(){
        load.style.display="none";
    });
// Hồ gươm
const chooseButton1= document.getElementById("hoguom");
var dem1=1;
chooseButton1.addEventListener('click',function(){
    chooseButton1.value="hoguom";
    dem1++;
    if (dem1%2==0)
    {
        chooseButton1.classList.add("check");
        chooseButton1.value="Hồ Gươm ✓";
    }
    else
    {
         chooseButton1.classList.remove("check");
         chooseButton1.value="Hồ Gươm";
    }
    
});
// Phố cổ
const chooseButton2= document.getElementById("phoco");
var dem2=1;
chooseButton2.addEventListener('click',function(){
    dem2++;
    if (dem2%2==0)
    {
        chooseButton2.classList.add("check");
        chooseButton2.value="Phố Cổ ✓";
    }
    else
    {
        chooseButton2.classList.remove("check");
        chooseButton2.value="Phố Cổ";
    }
     
});
// Chùa Một cột
const chooseButton3= document.getElementById("chuamotcot");
var dem3=1;
chooseButton3.addEventListener('click',function(){
    dem3++;
    if (dem3%2==0)
    {
        chooseButton3.classList.add("check");
        chooseButton3.value="Chùa Một Cột ✓";
    }
    else 
    {
       chooseButton3.classList.remove("check");  
       chooseButton3.value="Chùa Một Cột";
    }
   
});
// Làng Gốm Bát Tràng
const chooseButton4= document.getElementById("langgombattrang");
var dem4=1;
chooseButton4.addEventListener('click',function(){
    dem4++;
    if (dem4%2==0)
    {
        chooseButton4.classList.add("check");
        chooseButton4.value="Làng Gốm Bát Tràng ✓";
    }
    else
    {
      chooseButton4.classList.remove("check");
      chooseButton4.value="Làng Gốm Bát Tràng";
    }

});
// Lăng Bác
const chooseButton5= document.getElementById("langbac");
var dem5=1;
chooseButton5.addEventListener('click',function(){
    dem5++;
    if (dem5%2==0)
    {
        chooseButton5.classList.add("check");
        chooseButton5.value="Lăng Bác ✓";
    }
    else
    {
       chooseButton5.classList.remove("check");  
       chooseButton5.value="Lăng Bác";
    }
    
});
// Văn Miếu
const chooseButton6= document.getElementById("vanmieu");
var dem6=1;
chooseButton6.addEventListener('click',function(){
    dem6++;
    if (dem6%2==0)
    {
        chooseButton6.classList.add("check");
        chooseButton6.value="Văn Miếu ✓"
    }
    else
    {
 chooseButton6.classList.remove("check");
 chooseButton6.value="Văn Miếu";
    }
    
});
// Hồ Tây
const chooseButton7= document.getElementById("hotay");
var dem7=1;
chooseButton7.addEventListener('click',function(){
    dem7++;
    if (dem7%2==0)
    {
        chooseButton7.classList.add("check");
        chooseButton7.value="Hồ Tây ✓"
    }
    else
    {
       chooseButton7.classList.remove("check"); 
       chooseButton7.value="Hồ Tây";
    }
     
});
// Dền Ngọc Sơn
const chooseButton8= document.getElementById("denngocson");
var dem8=1;
chooseButton8.addEventListener('click',function(){
    dem8++;
    if (dem8%2==0)
    {
        chooseButton8.classList.add("check");
        chooseButton8.value="Đền Ngọc Sơn ✓";
    }
    else
    {
         chooseButton8.classList.remove("check");
         chooseButton8.vlaue ="Đền Ngọc Sơn";
    }
    
});
// Chùa Hương
const chooseButton9= document.getElementById("chuahuong");
var dem9=1;
chooseButton9.addEventListener('click',function(){
    dem9++;
    if (dem9%2==0)
    {
        chooseButton9.classList.add("check");
        chooseButton9.value="Chùa Hương ✓";
    }
    else
    {
       chooseButton9.classList.remove("check"); 
       chooseButton9.value="Chùa Hương";
    }
     
});
// Vịnh Hạ Long 
const chooseButton10= document.getElementById("vinhhalong");
var dem10=1;
chooseButton10.addEventListener('click',function(){
    dem10++;
    if (dem10%2==0)
    {
        chooseButton10.classList.add("check");
        chooseButton10.value="Vịnh Hạ Long ✓";
    }
    else 
    {
        chooseButton10.classList.remove("check");
        chooseButton10.value="Vịnh Hạ Long";
    }
    
});
// Bảo tàng Quảng Ninh
const chooseButton11= document.getElementById("baotangquangninh");
var dem11=1;
chooseButton11.addEventListener('click',function(){
    dem11++;
    if (dem11%2==0)
    {
        chooseButton11.classList.add("check");
        chooseButton11.value="Bảo tàng Quảng Ninh ✓";
    }
    else
    {
        chooseButton11.classList.remove("check");
        chooseButton11.value="Bảo Tàng Quảng Ninh";
    }
     
});
// Chợ Hải Sản
const chooseButton12= document.getElementById("chohaisan");
var dem12=1;
chooseButton12.addEventListener('click',function(){
    dem12++;
    if (dem12%2==0)
    {
        chooseButton12.classList.add("check");
        chooseButton12.value="Chợ hải sản ✓";
    }
    else 
    {
            chooseButton12.classList.remove("check");
            chooseButton12.value="Chợ hải sản";
    }

});
// SunWorld
const chooseButton13= document.getElementById("sunworld");
var dem13=1;
chooseButton13.addEventListener('click',function(){
    dem13++;
    if (dem13%2==0)
    {
        chooseButton13.classList.add("check");
        chooseButton13.value="Sun World Hạ Long ✓"
    }
    else
    {
         chooseButton13.classList.remove("check");
         chooseButton13.value="Sun World Hạ Long";
    }
    
});
// Cáp Treo 
const chooseButton14= document.getElementById("captreo");
var dem14=1;
chooseButton14.addEventListener('click',function(){
    dem14++;
    if (dem14%2==0)
    {
        chooseButton14.classList.add("check");
        chooseButton14.value="Cáp treo Hạ Long ✓";
    }
    else 
    {
        chooseButton14.classList.remove("check");
        chooseButton14.value="Cáp treo Hạ Long";
    }
    
});
// Tam Cốc Bích Động
const chooseButton15= document.getElementById("tamcocbichdong");
var dem15=1;
chooseButton15.addEventListener('click',function(){
    dem15++;
    if (dem15%2==0)
    {
        chooseButton15.classList.add("check");
        chooseButton15.value="Tam Cốc Bích Động ✓";
    }
    else 
    {
        chooseButton15.classList.remove("check");
        chooseButton15.value="Tam Cốc Bích Động";
    }
    
});
// Chùa Bái Đính
const chooseButton16= document.getElementById("chuabaidinh");
var dem16=1;
chooseButton16.addEventListener('click',function(){
    dem16++;
    if (dem16%2==0)
    {
        chooseButton16.classList.add("check");
        chooseButton16.value="Chùa Bái Đính ✓";
    }
    else
    {
          chooseButton16.classList.remove("check");
          chooseButton16.value="Chùa Bái Đính";
    }
   
});
// Tràng An
const chooseButton17= document.getElementById("trangan");
var dem17=1;
chooseButton17.addEventListener('click',function(){
    dem17++;
    if (dem17%2==0)
    {
        chooseButton17.classList.add("check");
        chooseButton17.value="Tràng An ✓";
    }
    else
    {
        chooseButton17.classList.remove("check");
        chooseButton17.value="Tràng An";
    }
     
}); 
// Cầu Rồng
const chooseButton18= document.getElementById("caurong");
var dem18=1;
chooseButton18.addEventListener('click',function(){
    dem18++;
    if (dem18%2==0)
    {
        chooseButton18.classList.add("check");
        chooseButton18.value="Cầu Rồng ✓";
    }
    else
    {
         chooseButton18.classList.remove("check");
         chooseButton18.value="Cầu Rồng";
    }
    
});
// Bán Đảo Sơn Trà
const chooseButton= document.getElementById("bandaosontra");
var dem=1;
chooseButton.addEventListener('click',function(){
    dem++;
    if (dem%2==0)
    {
        chooseButton.classList.add("check");
        chooseButton.value="Bán đảo Sơn Trà ✓";
    }
    else 
    {
        chooseButton.classList.remove("check");
        chooseButton.value="Bán đảo Sơn Trà";
    }
    
});
