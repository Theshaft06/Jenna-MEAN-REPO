var $Dojo = function(selector) {
        return new Element(selector);
    };

    class Element {
        constructor(selector) {
            this.element = document.getElementById(selector);
        }
        click(callback) {
            this.element.addEventListener("click", callback);
        }
        mouseover(callback) {
            this.element.addEventListener("mouseover", callback);
        }
        mouseout(callback) {
            this.element.addEventListener("mouseout", callback);
        }
    }; 


$Dojo("clickButton").click(function() {
    console.log("clicked");
});

$Dojo("hoverBox").mouseover(function(){
    $(this).css("color", "red");
});
$Dojo("hoverBox").mouseout(function(){
    $(this).css("color", "black");
});