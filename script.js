function run() {
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    output.contentWindow.eval(js);

}

document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    function saveCode() {
        console.log("save data triggered");
        let html = document.getElementById("html").value;
        let css = document.getElementById("css").value;
        let js = document.getElementById("js").value;

        localStorage.setItem("html", html);
        localStorage.setItem("css", css);
        localStorage.setItem("js", js);

        console.log("data saved");
    }


    function retrieveCode() {
        let html = localStorage.getItem("html");
        let css = localStorage.getItem("css");
        let js = localStorage.getItem("js");

        if (html && css && js) {
            document.getElementById("html").value = html;
            document.getElementById("css").value = css;
            document.getElementById("js").value = js;
        }
    }

    document.getElementById("html").addEventListener("input", saveCode);
    document.getElementById("css").addEventListener("input", saveCode);
    document.getElementById("js").addEventListener("input", saveCode);
    window.addEventListener("load", retrieveCode);
});


function FontSize(size) {
   /*  console.log("trigger 1"); */
    var elements = document.querySelectorAll('#html, #css, #js');
   /*  console.log("trigger 2"); */
    elements.forEach(function (element) {
        switch (size) {
            case 'small':
                /* console.log("triggered small "); */
                element.style.fontSize = '15px';
                break;

            case 'medium':
               /*  console.log("triggered medium "); */
                element.style.fontSize = '20px';
                break;

            case 'large':
               /*  console.log("triggered large "); */
                element.style.fontSize = '25px';
                break;
        }
    })
}

function theme() {
    /* console.log("trigger 1"); */
    var elements = document.querySelectorAll('textarea');
    var ogColor = '';
    if (elements.length > 0) {
        ogColor = elements[0].style.backgroundColor || getComputedStyle(elements[0]).backgroundColor;
    }
   /*  console.log("trigger 2"); */
    var newColor = (ogColor === 'rgb(255, 255, 255)') ? '' : 'rgb(255, 255, 255)';
    elements.forEach(function (el) {
        el.style.backgroundColor = newColor;
    })
var themeIcon = document.getElementById('themeIcon');
themeIcon.style.color = "#454545";
   /*  console.log(" final trigger "); */
}
