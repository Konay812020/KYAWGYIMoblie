// For JQuery
// Start Jquery Area
$(document).ready(function () {
    // Start Header
    // Start Nav Bar
    $(".navbuttons").click(function () {
        $(this).toggleClass("crossxs");
    });
    //End Nav Bars 
    // Start Login Box
    $("#open-btn").click(function () {
        document.getElementById("form-popup").style.display = "block";
    })
    $("#form-close").click(function () {
        document.getElementById("form-popup").style.display = "none";
    })
    // End Login Box
    // End Header
});
// End Jquery Area

// start progress
$(window).scroll(function () {
    var getprogress = $("#progresses");
    var getprogressvalue = $("#progressvalues");
    var getscrolltop = $(this).scrollTop();
    console.log(getscrolltop);

    //By JQUERY

    // var getscrollheight = $(document).height();
    // console.log(getscrollheight);

    // var getclientheight = $(window).height();
    // console.log(getclientheight);

    // var calheight = getscrollheight - getclientheight;
    // var getfinalheight = Math.round(getscrolltop * 100 / calheight);

    //console.log(getfinalheight);

    // formula
    //st*100/(projectheight-currentviewhright)


    //By Javascrpt
    var getscrollheight = document.documentElement.scrollHeight;
    console.log(getscrollheight);
    var getclientheight = document.documentElement.clientHeight;
    console.log(getclientheight);
    var calheight = getscrollheight - getclientheight;
    var getfinalheight = Math.round(getscrolltop * 100 / calheight);




    getprogressvalue.text(`${getfinalheight}%`);

    getprogress.css({
        "background": `conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
    })


})
const getyear = document.getElementById("getyear");
const getfullyear = new Date().getUTCFullYear();
getyear.textContent = getfullyear;
//end progress