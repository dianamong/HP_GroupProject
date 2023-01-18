let btn = document.getElementById("btnEnd");
let btnStart = document.getElementById("btnStart");
let block = document.getElementById("block");

btnEnd.onclick = () => {
    block.scrollBy(0, 120); // на 120 px вниз
};
btnStart.onclick = () => {
    block.scrollBy(0, -120); // на 120 px вверх
};

$(document).ready(function() {
    $.fn.animate_Text = function() {
        let string = this.text();
        return this.each(function() {
            var $this = $(this);
            $this.html(string.replace(/./g, '<span class="new">$&</span>'));
            $this.find("span.new").each(function(i, el) {
                setTimeout(function() {
                    $(el).addClass("div_opacity");
                }, 59 * i);
            });
        });
    };
    $("#plav-text").show();
    $("#plav-text").animate_Text();
});