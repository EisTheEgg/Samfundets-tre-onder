var graph = document.querySelector('.graph')
window.addEventListener('scroll', reveal);

function reveal() {
    var windowHeight = window.innerHeight;
    var graphtop = graph.getBoundingClientRect().top;
    var revealpoint = 150;

    if(graphtop < windowHeight - revealpoint) {
        graph.children[0].classList.add('active');
        graph.children[1].classList.add('active'); 
    }
    else {
        graph.children[0].classList.remove('active');
        graph.children[1].classList.remove('active'); 
    }
}

reveal();