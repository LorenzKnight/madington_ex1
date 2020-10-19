$(document).ready(function() {  
    $('#ajSlider').ajSlider(2500,{    
     "slideshow":"enable", //disable or enable the slideshow 
     "width":"9%", //width of slider    
     "height":"30%", //height of slider  
     "activeBullet":"", //color of the active bullet   
     "inactiveBullet":"", //color of inactive bullet    
     "textPosition":"40%", //position of text from top    
     "textSize":"60px" //font size of the text    
    });   
});

!function(e) {
    e.fn.ajSlider=function(t,i) {
        function l() {
            c>=a?(c=0,e(r[c]).css({
                "background-color":i.activeBullet
            }),
            e(r[a]).css({
                "background-color":i.inactiveBullet
            }),
            e(o[c]).fadeIn(1e3),e(n[c]).css({
                top:textpostop+"%"
            }),
            e(n[c]).fadeIn(100).animate({
                top:textposbottom+"%"
            }),
            e(o[a]).fadeOut(1e3),e(n[a]).fadeOut(1e3)):(c++,e(r[c]).css({
                "background-color":i.activeBullet
            }),
            e(r[c-1]).css({
                "background-color":i.inactiveBullet
            }),
            e(o[c]).fadeIn(1e3),e(n[c]).css({
                top:textpostop+"%"
            }),
            e(n[c]).fadeIn(100).animate({
                top:textposbottom+"%"
            }),
            e(o[c-1]).fadeOut(1e3),e(n[c-1]).fadeOut(1e3)),"disable"!=i.slideshow&&(s=setTimeout(l,t))
        }
        var d = {
            slideshow:"enable",
            width:"",
            height:"",
            textSize:"32px",
            textPosition:"35%",
            activeBullet:"black",
            inactiveBullet:"grey"
        };
        i=e.extend(d,i);
        var s,o=e("#ajSlider").children("img"),n=e("#ajSlider").children("a"),
        a=o.length-1,c=0;
        for(slideW=document.getElementById("ajSlider").style.width,
            slideH=document.getElementById("ajSlider").style.height,
            z=0;z<=a;z++)jabaW=e(o[z]).width(),jabaH=e(o[z]).height(),
            jabaW>slideW&&(slideW=e(o[z]).width()),
            jabaH>slideH&&(slideH=e(o[z]).height());
        
        for(slideWtemp=slideW,
            slideHtemp=slideH,
            tempH=i.height.replace("%",""),
            tempW=i.width.replace("%",""),
            ""!=i.width&&(slideW=i.width,i.width.indexOf("%")>-1&&(slideW=innerWidth*tempW/100,slideH=innerWidth/slideWtemp*tempW/100*slideH)),
            ""!=i.height&&(slideH=i.height,i.height.indexOf("%")>-1&&(slideH=innerHeight*tempH/100,slideW=innerHeight/slideHtemp*tempH/100*slideW)),
            i.height.indexOf("%")>-1&i.width.indexOf("%")>-1&&(slideW=innerWidth*tempW/100,slideH=innerHeight*tempH/100),
            document.getElementById("ajSlider").style.width=slideW,
            document.getElementById("ajSlider").style.height=slideH,
            e(n).css({width:.8*slideW,height:.8*slideH}),e(o).css({width:slideW,height:slideH}),
            e("#ajSlider").append("<div style='text-align:center'><ul id='ajSliderBullets'></ul></div>"),
            cnt=0;cnt<=a;cnt++)
            
            e("#ajSliderBullets").append("<li id='bullet"+cnt+"'></li>");
            e(function(){e("#ajSliderBullets li").on("click",function(){
                var d=this.id.replace("bullet","");
                clearTimeout(s),e(o[c]).fadeOut(100),e(n[c]).fadeOut(1e3),e(r[c]).css({"background-color":i.inactiveBullet}),
                e(o[d]).fadeIn(100),e(n[d]).css({top:textpostop+"%"}),e(n[d]).fadeIn(100).animate({top:textposbottom+"%"}),
                e(r[d]).css({"background-color":i.activeBullet}),c=d,"disable"!=i.slideshow&&(s=setTimeout(l,t))
            })});
            var r=e("#ajSliderBullets").children();e(r).css({"background-color":i.inactiveBullet}),
                e(r[0]).css({"background-color":i.activeBullet}),
                e("#ajSlider").css({position:"relative",overflow:"hidden","list-style":"none outside none"}),
                e("#ajSlider img").css({position:"absolute",top:"0px",left:"0px",display:"none"}),
                e("#ajSlider a").css({"font-size":i.textSize,top:i.textPosition,"padding-left":"10%","padding-right":"10%",position:"absolute",display:"none","text-align":"center"}),
                e("#ajSliderBullets").css({width:slideW,left:-40,position:"absolute",display:"inline-block",bottom:"5%"}),
                e("#ajSliderBullets li").css({height:"15px",width:"15px",display:"inline-block","list-style":"none",margin:"10px","border-radius":"10px"});
            var p=n[0],h=window.getComputedStyle(p),u=h.getPropertyValue("top");textpostop=u.replace("%","")-3,textposbottom=u.replace("%",""),o[0].style.display="block",n[0].style.display="block","disable"!=i.slideshow&&(s=setTimeout(l,t))
    }
}(jQuery);

$(document).ready(function() {  
    $('#ajSlider2').ajSlider2(2500,{    
     "slideshow":"enable", //disable or enable the slideshow 
     "width":"15%", //width of slider    
     "height":"50%", //height of slider  
     "activeBullet":"", //color of the active bullet   
     "inactiveBullet":"", //color of inactive bullet    
     "textPosition":"40%", //position of text from top    
     "textSize":"60px" //font size of the text    
    });   
});

!function(e) {
    e.fn.ajSlider2=function(t,i) {
        function l() {
            c>=a?(c=0,e(r[c]).css({
                "background-color":i.activeBullet
            }),
            e(r[a]).css({
                "background-color":i.inactiveBullet
            }),
            e(o[c]).fadeIn(1e3),e(n[c]).css({
                top:textpostop+"%"
            }),
            e(n[c]).fadeIn(100).animate({
                top:textposbottom+"%"
            }),
            e(o[a]).fadeOut(1e3),e(n[a]).fadeOut(1e3)):(c++,e(r[c]).css({
                "background-color":i.activeBullet
            }),
            e(r[c-1]).css({
                "background-color":i.inactiveBullet
            }),
            e(o[c]).fadeIn(1e3),e(n[c]).css({
                top:textpostop+"%"
            }),
            e(n[c]).fadeIn(100).animate({
                top:textposbottom+"%"
            }),
            e(o[c-1]).fadeOut(1e3),e(n[c-1]).fadeOut(1e3)),"disable"!=i.slideshow&&(s=setTimeout(l,t))
        }
        var d = {
            slideshow:"enable",
            width:"",
            height:"",
            textSize:"32px",
            textPosition:"35%",
            activeBullet:"black",
            inactiveBullet:"grey"
        };
        i=e.extend(d,i);
        var s,o=e("#ajSlider2").children("img"),n=e("#ajSlider2").children("a"),
        a=o.length-1,c=0;
        for(slideW=document.getElementById("ajSlider2").style.width,
            slideH=document.getElementById("ajSlider2").style.height,
            z=0;z<=a;z++)jabaW=e(o[z]).width(),jabaH=e(o[z]).height(),
            jabaW>slideW&&(slideW=e(o[z]).width()),
            jabaH>slideH&&(slideH=e(o[z]).height());
        
        for(slideWtemp=slideW,
            slideHtemp=slideH,
            tempH=i.height.replace("%",""),
            tempW=i.width.replace("%",""),
            ""!=i.width&&(slideW=i.width,i.width.indexOf("%")>-1&&(slideW=innerWidth*tempW/100,slideH=innerWidth/slideWtemp*tempW/100*slideH)),
            ""!=i.height&&(slideH=i.height,i.height.indexOf("%")>-1&&(slideH=innerHeight*tempH/100,slideW=innerHeight/slideHtemp*tempH/100*slideW)),
            i.height.indexOf("%")>-1&i.width.indexOf("%")>-1&&(slideW=innerWidth*tempW/100,slideH=innerHeight*tempH/100),
            document.getElementById("ajSlider2").style.width=slideW,
            document.getElementById("ajSlider2").style.height=slideH,
            e(n).css({width:.8*slideW,height:.8*slideH}),e(o).css({width:slideW,height:slideH}),
            e("#ajSlider2").append("<div style='text-align:center'><ul id='ajSliderBullets'></ul></div>"),
            cnt=0;cnt<=a;cnt++)
            
            e("#ajSliderBullets").append("<li id='bullet"+cnt+"'></li>");
            e(function(){e("#ajSliderBullets li").on("click",function(){
                var d=this.id.replace("bullet","");
                clearTimeout(s),e(o[c]).fadeOut(100),e(n[c]).fadeOut(1e3),e(r[c]).css({"background-color":i.inactiveBullet}),
                e(o[d]).fadeIn(100),e(n[d]).css({top:textpostop+"%"}),e(n[d]).fadeIn(100).animate({top:textposbottom+"%"}),
                e(r[d]).css({"background-color":i.activeBullet}),c=d,"disable"!=i.slideshow&&(s=setTimeout(l,t))
            })});
            var r=e("#ajSliderBullets").children();e(r).css({"background-color":i.inactiveBullet}),
                e(r[0]).css({"background-color":i.activeBullet}),
                e("#ajSlider2").css({position:"relative",overflow:"hidden","list-style":"none outside none"}),
                e("#ajSlider2 img").css({position:"absolute",top:"0px",left:"0px",display:"none"}),
                e("#ajSlider2 a").css({"font-size":i.textSize,top:i.textPosition,"padding-left":"10%","padding-right":"10%",position:"absolute",display:"none","text-align":"center"}),
                e("#ajSliderBullets").css({width:slideW,left:-40,position:"absolute",display:"inline-block",bottom:"5%"}),
                e("#ajSliderBullets li").css({height:"15px",width:"15px",display:"inline-block","list-style":"none",margin:"10px","border-radius":"10px"});
            var p=n[0],h=window.getComputedStyle(p),u=h.getPropertyValue("top");textpostop=u.replace("%","")-3,textposbottom=u.replace("%",""),o[0].style.display="block",n[0].style.display="block","disable"!=i.slideshow&&(s=setTimeout(l,t))
    }
}(jQuery);

$(document).ready(function() {  
    $('#ajSlider3').ajSlider3(2500,{    
     "slideshow":"enable", //disable or enable the slideshow 
     "width":"13%", //width of slider    
     "height":"45%", //height of slider  
     "activeBullet":"", //color of the active bullet   
     "inactiveBullet":"", //color of inactive bullet    
     "textPosition":"40%", //position of text from top    
     "textSize":"60px" //font size of the text    
    });   
});

!function(e) {
    e.fn.ajSlider3=function(t,i) {
        function l() {
            c>=a?(c=0,e(r[c]).css({
                "background-color":i.activeBullet
            }),
            e(r[a]).css({
                "background-color":i.inactiveBullet
            }),
            e(o[c]).fadeIn(1e3),e(n[c]).css({
                top:textpostop+"%"
            }),
            e(n[c]).fadeIn(100).animate({
                top:textposbottom+"%"
            }),
            e(o[a]).fadeOut(1e3),e(n[a]).fadeOut(1e3)):(c++,e(r[c]).css({
                "background-color":i.activeBullet
            }),
            e(r[c-1]).css({
                "background-color":i.inactiveBullet
            }),
            e(o[c]).fadeIn(1e3),e(n[c]).css({
                top:textpostop+"%"
            }),
            e(n[c]).fadeIn(100).animate({
                top:textposbottom+"%"
            }),
            e(o[c-1]).fadeOut(1e3),e(n[c-1]).fadeOut(1e3)),"disable"!=i.slideshow&&(s=setTimeout(l,t))
        }
        var d = {
            slideshow:"enable",
            width:"",
            height:"",
            textSize:"32px",
            textPosition:"35%",
            activeBullet:"black",
            inactiveBullet:"grey"
        };
        i=e.extend(d,i);
        var s,o=e("#ajSlider3").children("img"),n=e("#ajSlider3").children("a"),
        a=o.length-1,c=0;
        for(slideW=document.getElementById("ajSlider3").style.width,
            slideH=document.getElementById("ajSlider3").style.height,
            z=0;z<=a;z++)jabaW=e(o[z]).width(),jabaH=e(o[z]).height(),
            jabaW>slideW&&(slideW=e(o[z]).width()),
            jabaH>slideH&&(slideH=e(o[z]).height());
        
        for(slideWtemp=slideW,
            slideHtemp=slideH,
            tempH=i.height.replace("%",""),
            tempW=i.width.replace("%",""),
            ""!=i.width&&(slideW=i.width,i.width.indexOf("%")>-1&&(slideW=innerWidth*tempW/100,slideH=innerWidth/slideWtemp*tempW/100*slideH)),
            ""!=i.height&&(slideH=i.height,i.height.indexOf("%")>-1&&(slideH=innerHeight*tempH/100,slideW=innerHeight/slideHtemp*tempH/100*slideW)),
            i.height.indexOf("%")>-1&i.width.indexOf("%")>-1&&(slideW=innerWidth*tempW/100,slideH=innerHeight*tempH/100),
            document.getElementById("ajSlider3").style.width=slideW,
            document.getElementById("ajSlider3").style.height=slideH,
            e(n).css({width:.8*slideW,height:.8*slideH}),e(o).css({width:slideW,height:slideH}),
            e("#ajSlider3").append("<div style='text-align:center'><ul id='ajSliderBullets'></ul></div>"),
            cnt=0;cnt<=a;cnt++)
            
            e("#ajSliderBullets").append("<li id='bullet"+cnt+"'></li>");
            e(function(){e("#ajSliderBullets li").on("click",function(){
                var d=this.id.replace("bullet","");
                clearTimeout(s),e(o[c]).fadeOut(100),e(n[c]).fadeOut(1e3),e(r[c]).css({"background-color":i.inactiveBullet}),
                e(o[d]).fadeIn(100),e(n[d]).css({top:textpostop+"%"}),e(n[d]).fadeIn(100).animate({top:textposbottom+"%"}),
                e(r[d]).css({"background-color":i.activeBullet}),c=d,"disable"!=i.slideshow&&(s=setTimeout(l,t))
            })});
            var r=e("#ajSliderBullets").children();e(r).css({"background-color":i.inactiveBullet}),
                e(r[0]).css({"background-color":i.activeBullet}),
                e("#ajSlider3").css({position:"relative",overflow:"hidden","list-style":"none outside none"}),
                e("#ajSlider3 img").css({position:"absolute",top:"0px",left:"0px",display:"none"}),
                e("#ajSlider3 a").css({"font-size":i.textSize,top:i.textPosition,"padding-left":"10%","padding-right":"10%",position:"absolute",display:"none","text-align":"center"}),
                e("#ajSliderBullets").css({width:slideW,left:-40,position:"absolute",display:"inline-block",bottom:"5%"}),
                e("#ajSliderBullets li").css({height:"15px",width:"15px",display:"inline-block","list-style":"none",margin:"10px","border-radius":"10px"});
            var p=n[0],h=window.getComputedStyle(p),u=h.getPropertyValue("top");textpostop=u.replace("%","")-3,textposbottom=u.replace("%",""),o[0].style.display="block",n[0].style.display="block","disable"!=i.slideshow&&(s=setTimeout(l,t))
    }
}(jQuery);