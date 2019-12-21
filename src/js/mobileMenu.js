$(document).ready(function(){$('header nav .mobileMenu').click(function(){$('main, header, nav.mobileNav').toggleClass('active');});});window.setInterval(function(){$genderHeight=$('.genderChoice .male').width();$genderHeightMobile=$('.genderChoiceMobile .male').width();$squareHeight=$('#profile .square').width();$rainbowHeight=$('#profile .rainbow').width();$('.genderChoice .male,.genderChoice .female').css({height:$genderHeight});$('.genderChoiceMobile .male,.genderChoiceMobile .female').css({height:$genderHeightMobile});$('#profile .square').css({height:$squareHeight});$('#profile .rainbow').css({height:$rainbowHeight});},100);$(document).ready(function(){$.ajax({url:'/ajax/getProgressRight',method:'POST',success:function(data){$('.progressHolder').html(data);}});});
$(document).ready(function () {
    $('.genderChoiceElem').on('click', function () {
        var gender = $(this).data('gender');
        $('#genderInput').val(gender);
        $('#genderForm').submit();
    });
});
