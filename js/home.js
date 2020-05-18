$(document).ready(
    function () {
        $('#menu ul').hide();

        $('#menu li a').mouseenter(
            function () {
                $(this).next().slideToggle('slow');
            });
    }
);


