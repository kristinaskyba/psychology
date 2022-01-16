jQuery(document).ready(function ($) {

    var coll = document.getElementsByClassName("options__all");
    var i;
    window.onload = function () {
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            })
        }
    }
})
