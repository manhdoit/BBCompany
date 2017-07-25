$( document ).ready(function() {
    function showNavigation() {
        // $('.btn-menu').addClass('active');
        $('.btn-menu').click(function () {
            // $(this).addClass("important")
            console.log('adf')
            $('.main-nav').toggleClass('intro');
        })
    }
    showNavigation();
    //
    function showInputSearch() {
        $('.search-btn').click(function(){
            $('.search-input').toggleClass('intro');
        })
    }

        showInputSearch();

    function smoothLyScroll() {

        $('.wrap-mouse a').click(function(){

            if (this.has !==""){
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;
                })
            }
        })
    }
    smoothLyScroll()
    function scrollTop(){
        $('.to-top').click(function () {

            $('html, body').animate({
                scrollTop:0}, 500);
            })
        }



    scrollTop()
});

