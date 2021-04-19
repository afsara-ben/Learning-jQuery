$(document).ready(function() {
    // $('#btn1').click(function() {
    //     alert('btn1 clicked');
    // });

    // $('#btn2').on('click', function() {
    //     alert('btn2 clicked');
    // });

    // $('#btn1').on('click', function() {
    //     $('.para1').hide();
    //     // $('.para1').toggle();
    // });

    // $('#btn2').on('click', function() {
    //     $('.para1').show();
    // });

    // $('#btn1').dblclick(function() {
    //     $('.para1').hide();
    //     // $('.para1').toggle();
    // });

    // $('#btn2').hover(function() {
    //     $('.para1').show();
    // });

    // $('#btn1').on('mouseenter', function() {
    //     $('.para1').toggle();
    // });

    // $('#btn1').on('mouseleave', function() {
    //     $('.para1').toggle();
    // });

    // $('#btn1').on('mouseup', function() {
    //     $('.para1').toggle();
    // });

    // $('#btn1').on('mousedown', function() {
    //     $('.para1').toggle();
    // });

    // $('#btn1').click(function(e) {
    //     alert(e.currentTarget.id);
    //     alert(e.currentTarget.innerHTML);
    //     alert(e.currentTarget.outerHTML);
    // });

    // $(document).on('mousemove', function(e) {
    //     $('#coords').html('Coords: Y: ' + e.clientY + ' X: ' + e.clientX);
    // });

    // $('input').focus(function() {
    //     // alert('focused');
    //     // $('input#name').css('background', 'pink');
    //     $(this).css('background', 'pink');
    // });

    // $('input').blur(function() {
    //     $(this).css('background', 'white');
    // });

    // $('input').keyup(function(e) {
    //     console.log(e);
    //     $('#coords').html(e.target.value);
    // });

    $('select#gender').change(function(e) {
        $('#coords').html(e.target.value);
    });

    $('#form').submit(function(e) {
        e.preventDefault();
        console.log('submiited');

        let name = $('input#name').val();
        console.log(name);
    })
})