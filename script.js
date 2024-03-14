function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function closeSidebar(event){
    event.preventDefault(); 
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}





document.addEventListener("DOMContentLoaded", function () {
    var animatedElement = document.querySelector(".About");

    function animateOnScroll() {
      var trigger = window.innerHeight * 0.8;
      var elementPosition = animatedElement.getBoundingClientRect().top;

      if (elementPosition < trigger) {
        animatedElement.classList.add("animate");
      } else {
        animatedElement.classList.remove("animate");
      }
    }

    animateOnScroll();

    window.addEventListener("scroll", animateOnScroll);
  });


  document.addEventListener("DOMContentLoaded", function () {
    var animatedElement = document.querySelector(".skills");

    function animateOnScroll() {
      var trigger = window.innerHeight * 0.8;
      var elementPosition = animatedElement.getBoundingClientRect().top;

      if (elementPosition < trigger) {
        animatedElement.classList.add("animate");
      } else {
        animatedElement.classList.remove("animate");
      }
    }

    animateOnScroll();

    window.addEventListener("scroll", animateOnScroll);
  });