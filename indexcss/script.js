document.addEventListener('DOMContentLoaded', function () {
    var body = document.body; 
    var colors = ['#caeeae', '#94bbe9']; 
    var index = 0;

    function changeGradient() {
        body.style.backgroundImage = 'linear-gradient(to bottom, ' + colors[index] + ', ' + colors[(index + 1) % colors.length] + ')';
        index = (index + 1) % colors.length;
    }

    setInterval(changeGradient, 2000); 
});