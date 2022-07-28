$(document).ready(function () {

    $.ajaxSetup({
        Headers: {
            'X-CRSF-TOKEN' : $('meta[name="csrf-token"]').attr('content')
        }

    });

    $('.submit-btn').click(function (e) {
        e.preventDefault();

        var coupon_code = $('.coupon_code').val();

        if($.trim(coupon_code).length == 0){
            error_coupon = "Please Enter Valiod Coupon";
            $('#error_coupon').text(error_coupon);
        }else{
            error_coupon = '';
            $('#error_coupon').text(error_coupon);
        }
        if(error_coupon != ''){
            return false;
        }

        $.ajax({
            method : "POST",
            url: "url",
            data: {
                'coupon_code' : coupon_code
            },
            dataType: "dataType",
            success: function(response){
                
            }
        })
    })
});