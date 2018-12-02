(function() {
  class MyTitle extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <style>
          h1 {
            font-size: 2.5rem;
            color: hotpink;
            font-family: monospace;
            text-align: center;
            text-decoration: pink solid underline;
            text-decoration-skip: ink;
          }
        </style>
        <h1>Hello Alligator!</h1>
      `;
    }
  }
      window.customElements.define('my-title', MyTitle);
})();
