window.addEventListener('load', function() {

    var timer = setTimeout(function() {
        alert(123)
    }, 3000)
    $.ajax({
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        dataType: 'JSON',
        success: function(res) {
            var str = template('datalist', res)
            $('.main').html(str)
        }
    })


    $('.main').on('click', function(e) {
        console.log(e.target);
    })
})