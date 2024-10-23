import './GoToTop.css'

import React from 'react'

const GoToTop = () => {

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  return (
    <div className="GoToTop" onClick={topFunction} id="myBtn">
      <i className="fa-solid fa-arrow-up"></i>
    </div>
  )
}

export default GoToTop