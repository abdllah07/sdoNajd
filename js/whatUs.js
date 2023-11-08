function hideAllButOne(index) {
    const divs = document.querySelectorAll('.vision-left');
    for (let i = 0; i < divs.length; i++) {
        if (i === index - 1) {
            // divs[i].style.display = 'flex';
            // divs[i].style.transition = 'all 10s ease';

            divs[i].style.opacity = '1';

        } else {
            divs[i].style.opacity = '0';
            // divs[i].style.display = 'none';

        }
    }

    // تغيير لون الخلفية عند الضغط على الزر
    const buttons = document.querySelectorAll('.vis-btn');
    for (let i = 0; i < buttons.length; i++) {
        if (i === index - 1) {
            buttons[i].classList.add('active');
        } else {
            buttons[i].classList.remove('active');
        }
    }
}
  // Get the button
  let mybutton1 = document.getElementById("myBtn2");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton1.style.display = "block";

    } else {
      mybutton1.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }



