$(document).ready(function() {
    // $('p.para1').css('color', 'red');
    // $('p.para1').css({
    //     color: 'red',
    //     background: 'yellow'
    // });

    // $('p.para2').addClass('myClass');
    // $('p.para2').removeClass('myClass');
    // $('#btn1').click(function() {
    //     $('p.para2').toggleClass('myClass');
    // });

    // $('#myDiv').text('Hello world');
    // $('#myDiv').html('<h1>Hello world</h1>');

    // $('ul#list').append('<li>List item appended</li>')
    // $('ul#list').prepend('<li>List item prepended</li>')

    // $('.para2').prependTo('.para1');
    // $('.para1').appendTo('.para2');

    // $('a').attr('target', '_blank');

    // $('#newItem').keyup(function(e) {
    //     let code = e.which;
    //     if (code == 13) {
    //         e.preventDefault();
    //         $('ul').append('<li>' + e.target.value + '</li>');
    //     }
    // });

    // let myArr = ['afsara', 'benazir', 'sadia'];

    // $.each(myArr, function(i, val) {
    //     $('#users').append('<li>' + val + '</li>');
    // });

    let newArr = $('ul#list li').toArray();
    // $('#newArrDisplay').html(newArr);
    $.each(newArr, function(i, val) {
        $('#newArrDisplay').append(val.innerHTML);
    })
});