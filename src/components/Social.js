import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a
          href="https://github.com/SuphakornChopthum"
          target="_blank"
          rel="noopender noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/spk_boss/"
          target="_blank"
          rel="noopender noreferrer"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://web.facebook.com/suphakorn.chopthum"
          target="_blank"
          rel="noopender noreferrer"
        >
          <i class="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/suphakorn-chopthum"
          target="_blank"
          rel="noopender noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    );
  }
}

export default Social;
