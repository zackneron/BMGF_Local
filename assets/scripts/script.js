window.document.addEventListener('DOMContentLoaded', function(){
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  const headings = document.querySelectorAll('.card-body .title, .card h3');
  const contents = document.querySelectorAll('.card-body .content, .card p');
  const contentsLimit = document.querySelectorAll('.content-limit p');
  const pressReleaseCardHeadings = document.querySelectorAll('.press-release-section-content .title');
  
  headings.forEach(heading => {
    if (heading.textContent.length > 25) {
      heading.textContent = heading.textContent.substring(0, 25) + '...';
    }
  });

  contentsLimit.forEach(content => {
    console.log('length', content.textContent.length)
    if (content.textContent.length > 166) {
      content.textContent = content.textContent.substring(0, 166) + '...';
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
