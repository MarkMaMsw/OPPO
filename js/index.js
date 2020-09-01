function clicknews(){
    let news = document.getElementById("news");
    let face = document.getElementById("facebook");
    if (news.classList.contains("style2")){
        news.classList.remove("style2");
        news.classList.add("style1");
        face.classList.remove("style1");
        face.classList.add("style2")
    }
}
function clickface(){
    let news = document.getElementById("news");
    let face = document.getElementById("facebook");
    if (face.classList.contains("style2")){
        face.classList.remove("style2");
        face.classList.add("style1");
        news.classList.remove("style1");
        news.classList.add("style2")
    }
}

$(window).scroll(function(){
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollT);
    var backTop = $("#accessory").offset().top - $(window).height();
    // console.log(backTop)
    if(scrollT > (backTop+500)){
        $(".phone_case").addClass("animate__animated animate__fadeInLeft show").removeClass("fade");
        $(".charger").addClass("animate__animated animate__fadeInDown show").removeClass("fade");
        $(".cable").addClass("animate__animated animate__fadeInRight show").removeClass("fade");
        $(".all_acc").addClass("animate__animated animate__fadeInUp show").removeClass("fade");
    }
});
$(window).scroll(function(){
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollT);
    var backTop = $("#world").offset().top - $(window).height();
    // console.log(backTop)
    if(scrollT > (backTop+500)){
        $(".a1").addClass("animate__animated animate__fadeInLeft show").removeClass("fade");
        $(".a2").addClass("animate__animated animate__fadeInDown show").removeClass("fade");
        $(".a3").addClass("animate__animated animate__fadeInRight show").removeClass("fade");
        $(".a4").addClass("animate__animated animate__fadeInUp show").removeClass("fade");
    }
});

window.onload = function(){
    var nav = document.getElementById("nav");
    var navTop = nav.offsetTop;
    window.onscroll = function(){
        let backTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (backTop >= navTop){
            nav.style.position = "fixed";
            nav.style.top = "0";
            nav.style.left = "0";
            nav.style.zIndex = "100";
        } else {
            nav.style.position = "";
        }
    }
    
    var totop = document.getElementById("btt");
    var timer = null;
    totop.onclick = function(){
        timer = setInterval(function(){
            let backTop = document.documentElement.scrollTop || document.body.scrollTop;
            let speedTop = backTop/4;
            document.documentElement.scrollTop -= speedTop;
            if (backTop == 0){
                clearInterval(timer);
            }
        }, 30);
    }
}