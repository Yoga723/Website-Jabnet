class Preload extends HTMLElement {
     connectedCallback() {
    this.innerHTML = `
      <div id="preloader" class="preloader ">
        <button class="th-btn th-radius preloaderCls">Cancel Preloader </button>
        <div id="loader" class="th-preloader">
            <div class="animation-preloader">
                <div class="txt-loading">
                    <span preloader-text="J" class="characters">J</span>

                    <span preloader-text="A" class="characters">A</span>

                    <span preloader-text="B" class="characters">B</span>

                    <span preloader-text="N" class="characters">N</span>

                    <span preloader-text="E" class="characters">E</span>

                    <span preloader-text="T" class="characters">T</span>
                </div>
            </div>
        </div>
    </div> 
    `;
  }
}

customElements.define('main-preload', Preload);