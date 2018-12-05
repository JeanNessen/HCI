
 (function() {
  const template = document.createElement('template');

  template.innerHTML = `
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
      <h1 id="frage_1">Frage 1</h1>
        <h1 id="frage_2" style="display:none">Frage 2</h1>
        <button id="ryo_button" onclick="document.getElementById('frage_2').style.display='block'">"ryo"</button>


  `;

  class MyTitle extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
  }

  window.customElements.define('my-title', MyTitle);
})();

