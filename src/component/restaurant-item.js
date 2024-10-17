class RestaurantItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _restaurant = {
    id: null,
    name: null,
    description: null,
    pictureId: null,
    city: null,
    rating: null
  };

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  set note(value) {
    this._restaurant = value;

    // Render ulang
    this.render();
  }

  get note() {
    return this._restaurant;
  }

  _updateStyle() {
    this._style.textContent = `
    :host {
        border-radius: 8px;
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
        overflow: hidden;
        font-family: sans-serif;
        display: block;
        max-width: 400px;
        margin: 20px;
        background-color: #b6e3ce;
        min-height: 300px;
        max-height: 350px;
      }
  
      .card {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        padding: 16px;
      }
  
      img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 8px;
      }
  
      .restaurant-detail__city {
        position: absolute;
        top: 16px;
        left: 16px;
        background-color: #6ae9ae;
        color: #000;
        min-width: 20%;
        border-radius: 0 0 16px 0;
        font-size: 12px;
        padding: 8px;
        margin: 0;
      }

      .restaurant-detail__city h2 {
        margin: 0;
      }
  
      .restaurant-detail__rating {
        display: flex;
        position: absolute;
        top: 16px;
        right: 16px;
      }
  
      .restaurant-detail__rating h2 {
          display: inline-block;
          font-size: 16px;
          margin: 0;
          padding: 8px;
          color: #000;
          z-index: 1;
          ;
        }

        .restaurant-detail__rating img {
            position: absolute;
            width: 38px;
            height: 38px;
        }
        
        .restaurant-detail__name h2 {
          font-size: 20px;
          margin: 0;
        }

      .restaurant-detail__description p {
        
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
        
        font-size: 14px;
        color: #666;
      }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="card" tabindex="0" role="article" aria-label="${this._restaurant.name}, ${this._restaurant.city}">
        <div class="restaurant-detail">
          <img src="${this._restaurant.pictureId}" alt="${this._restaurant.name} image" role="img">
          <div class="restaurant-detail__city">
              <h2>${this._restaurant.city}</h2>
          </div>
           

          </div>
          <div class="restaurant-detail__name">
            <h2>${this._restaurant.name}</h2>
          </div>
          <div class="restaurant-detail__description">
            <p>${this._restaurant.description}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("restaurant-item", RestaurantItem);

/*<div class="restaurant-detail__rating">
                <img src="../icon/star-solid.svg" width="8px" alt="starImage">
                <h2>${this._restaurant.rating}</h2>
            </div>
*/