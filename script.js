function run() {
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    output.contentWindow.eval(js);

}

document.addEventListener("DOMContentLoaded", function() {
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

