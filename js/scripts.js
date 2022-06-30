

window.addEventListener('DOMContentLoaded', event => {

    
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

   
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
location.hash = en;
    location.reload();



  function getLang()
{
    language = document.getElementById("select_lang").value;
    if (language == 'br'){
        window.location.assign("indexbr.html");
        }
    if (language == 'en'){
            window.location.assign("index.html");
            }
}

function changeLanguage(lang){
    if (lang = 'br'){
    window.location.assign("pt-br.html");
    }
    if (lang = 'en'){
    window.location.assign("index.html");
    }
}
