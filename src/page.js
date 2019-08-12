$(document).ready(function () {
    if ($(window).width() < 576) {
        //change way of showing cart between desktop and device
        $("#cart-link").click(function () {
            $(this).toggleClass("cart-link-hover");
            $(".cart-content").toggleClass("show");
        })
    } else {
        $("#cart-link").hover(function () {
            $(this).addClass("cart-link-hover");
            $(".cart-content").addClass("show");
        }, function(){
            $(this).removeClass("cart-link-hover");
            $(".cart-content").removeClass("show");
        })
    }

    $(".product-option a").click(function () {
        //size selection response
        $(".product-option a").each(function () {
            $(this).removeClass("selected");
        })
        $(this).toggleClass("selected");

        var size = $(".product-option .selected").text();
        $("#product-size").text(size);
    })

});