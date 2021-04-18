import React from "react";

function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png"
          alt=""
        />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://images.macrumors.com/t/M6OOZi1LBirkudS4HQ3yibhQqgY=/800x0/filters:quality(90)/article-new/2017/09/iphonexdesign.jpg?lossy"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>Phone</span>
          <span>Price : 1000$</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
