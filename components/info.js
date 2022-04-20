class infoCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes(){
        return ["titulo",'informacion','importancia'];
    }

    attributeChangedCallback(attr, oldAttr, newAttr){
        if (oldAttr !== newAttr) {
            this[attr] = newAttr;
        }
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }

    getTemplate(){
        const template = document.createElement('TEMPLATE');
        template.innerHTML = `
            <div class="container">
                <h2>${this.titulo}</h2>
                <p>${this.informacion}</p>
            </div>
        ${this.getStyle()}
        `;
        return template;
    }

    getStyle(){
        return `
        <style>
            :host{
                --pocoImportante: #45aa5b;
                --importante: #c1ce5a;
                --muyImportante: #a93838;
            }

            .container{
                min-width: 250px;
                max-width: 320px;
                display: inline-block;
                min-height: 180px;
                background-color: var(--${this.importancia});
                font-family: sans-serif;
                color: #111;
                box-shadow: 0px 0px 5px 1px #000;
                box-sizing: border-box;
            }
            .container h2{
                margin: 0;
                font-size: 30px;
                font-weight: 700;
                padding-left: 10px;
                padding-top: 10px;
                text-align:center;
                text-shadow: 1px 1px #000;
            }
            .container p{
                text-align: center;
                font-size: 18px;
                font-weight: 500;
                padding: 5px;
                
            }
        </style>
        `;
    }

}

customElements.define("info-card", infoCard);