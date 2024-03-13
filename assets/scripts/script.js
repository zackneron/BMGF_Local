window.document.addEventListener('DOMContentLoaded', function(){
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  const headings = document.querySelectorAll('.card-body .title, .card h3');
  const contents = document.querySelectorAll('.card-body .content, .card p');
  const pressReleaseCardHeadings = document.querySelectorAll('.press-release-section-content .title');

  headings.forEach(heading => {
    if (heading.textContent.length > 25) {
      heading.textContent = heading.textContent.substring(0, 25) + '...';
    }
  });

  contents.forEach(content => {
    if (content.textContent.length > 220) {
      content.textContent = content.textContent.substring(0, 220) + '...';
    }
  });
                      
  pressReleaseCardHeadings.forEach(pressReleaseCardHeading => {
    if (pressReleaseCardHeading.textContent.length > 9) {
      pressReleaseCardHeading.textContent = pressReleaseCardHeading.textContent.substring(0, 6) + '...';
    }
  });

  menuToggle.onclick = function(){
    navbar.
    classList.toggle('active');
  }
});

filterArticles("all", "all");
function filterArticles(e, article){
  let tabPanel, i;
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(button => button.classList.remove("active"));
  const clickedButton = e === 'all' ? document.querySelector('.tab-btn[data-title="all"]') : document.querySelector('.tab-btn[data-title="' + e + '"]');
  clickedButton.classList.add("active");

  tabPanel = document.getElementsByClassName('tab-item');
  if(article == "all") {
    article = "";
  }
  for(i = 0; i < tabPanel.length; i++){
    removeClass(tabPanel[i], "show");
    if(tabPanel[i].className.indexOf(article) > -1) {
      addClass(tabPanel[i], "show");
    }
  }
}

function addClass(element, name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for(i = 0; i < arr2.length; i++){
    if(arr1.indexOf(arr2[i]) == -1){
      element.className += " " + arr2[i];
    }
    console.log('for loop 1');
  }
}
function removeClass(element, name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for(i = 0; i < arr2.length; i++){
    while(arr1.indexOf(arr2[i]) > -1){
      arr1.splice(arr1.indexOf(arr2[i]), 1)
      console.log('while loop');
    }
    console.log('for loop 2');
  }
  element.className = arr1.join(" ");
}
