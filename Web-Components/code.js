/*
class UserCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<h2 class="xdd">${this.getAttribute('name')}</h2>`
    }
}.0

window.customElements.define('user-card',UserCard);
*/

const template = document.createElement('template');
template.innerHTML = `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
        h2 {
            color: black;
            font-size: 22px;
            font-weight: 200;
        }
        
        .user-card {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-radius: 20px;
            background: #f5f5f5;
            box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
            padding: 20px 30px;
            margin: 10px 0;
            width: 350px;
            height: 200px;
        }
        
        .image {
            border-radius: 50%;
            margin-right: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        img {
            border-radius: 50%;
        }

        .details {
            font-family: 'Quicksand', sans-serif;
        }

        #toogle-info {
            background-color: white; 
            color: black; 
            border: 2px solid #008CBA;
            border-radius: 5px;
            padding: 5px 10px
        }
          
        #toogle-info:hover {
            background-color: #008CBA;
            color: white;
            cursor:pointer;
        }
       
    </style>
    <div class="user-card">
        <div class="image">
            <img>
        </div>
        
        <div class="details">
            <h2></h2>
            <div class="info">
                <p>
                    <slot name="email"/>
                </p>
                <p>
                    <slot name="phone"/>
                </p>
            </div>
            <button id="toogle-info">Hide Info</button>
        </div>
        
    </div>
`;

class UserCard extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true;

        this.attachShadow({
            mode: 'open'
        })
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name')
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar')
    }

    toggelInfo() {
        this.showInfo = !this.showInfo;
        const info = this.shadowRoot.querySelector(".info");
        const toogleBtn = this.shadowRoot.querySelector("#toogle-info");
        if (this.showInfo) {
            info.style.display = "block"
            toogleBtn.innerHTML = "Hide Info"
        } else {
            info.style.display = "none"
            toogleBtn.innerHTML = "Show Info"
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector("#toogle-info").addEventListener('click', () => {
            this.toggelInfo();
        })
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector("#toogle-info").removeEventListener();
    }
}


window.customElements.define('user-card', UserCard)