var dictionary = {
    'greet': {
        'es': 'Hola',
        'en': 'Hello',
        'pt': 'Oi',
    }
};

var current_lang = 'en';

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("language");
var btns = btnContainer.getElementsByClassName("filter");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (element) {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        lang(element.currentTarget.dataset.value);
        translate();
    });
}

function lang(select) {
    switch (select) {
        case 'en':
            current_lang = 'en';
            break;
        case 'es':
            current_lang = 'es';
            break;
        case 'pt':
            current_lang = 'pt';
            break;
        default:
            current_lang = 'en';
    }
    translate();
}

function translate() {
    //   $("[data-translate]").each(function(){
    //       var key = $(this).data('translate');
    //       $(this).html(dictionary[key][current_lang] || "N/A");
    //   });
    Array.from(document.getElementsByClassName('lang')).forEach(function (elem) {
        if (elem.classList.contains('lang-' + current_lang)) {
            elem.style.display = 'initial';
        }
        else {
            elem.style.display = 'none';
        }
    });

}

translate();