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
  }
}
function removeClass(element, name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for(i = 0; i < arr2.length; i++){
    while(arr1.indexOf(arr2[i]) > -1){
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
