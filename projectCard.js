import { LitElement, html, css } from 'lit-element';

class ProjectCard extends LitElement {
    // defined css styling
    static get styles() {
        return css`
            .card{
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                width: 300px;
            }
            .card:hover{
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            }
            .info{
                padding: 2px 16px;
            }
        `;
    }

    render() {
        return html`
            <div class="card">
                <img src="${this.img}" width=100%>
            <div class="info">
                <h3><b> ${this.name}</b> </h3>
                <p><slot name = "College"></slot></p>
                <p><slot name = "Major"></slot></p>
                <p> <a href="${this.url}"> Website </a></p>
                </div>
            </div>
        `;
    }

    constructor() {
        super();
        this.name = "Person's name";
        this.url = "";
        this.img = "";
        this.college ="";
        this.major = "";
    }

    static get properties() {
        return {
            name: { type: String },
            url: { type: String },
            img: { type: String },
            college: { type: String},
            major: { type: String}
        };
    }

}

customElements.define('project-card', ProjectCard);