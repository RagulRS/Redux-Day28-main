import Total from "./Total";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

import { useDispatch, useSelector } from "react-redux";

import "./ProductList.css";

import {
  DecreaseQuantity,
  IncreaseQuantity,
  RemoveCart,
} from "../Features/ProductSlice";

const ProductList = () => {
  const cartData = useSelector((state) => state.productReducer.productData);

  const dispatch = useDispatch();

  const increaseQuantity = (id, qua) => {
    let param = { proId: id, proQua: qua };
    dispatch(IncreaseQuantity(param));
  };

  const decreaseQuantity = (id, qua) => {
    let param = { proId: id, proQua: qua };
    dispatch(DecreaseQuantity(param));
  };

  const removeCart = (id) => {
    dispatch(RemoveCart(id));
  };

  return (
    <>
      <div className="container pt-5 product-container position-relative">
        <div className="row d-flex justify-content-center mb-4">
          
          {cartData.length === 0 ? (
            <h3 className="h3 text-center py-3">
              Your Cart is Empty &#128549;
            </h3>
          ) : (
            cartData.map((item) => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-10 col-xl-10 mb-4"
                  key={item.id}
                >
                  <div className="card p-3 h-100">
                    <div className="row h-auto">
                      <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 d-flex justify-content-center align-items-center">
                        <div
                          id={`carouselExampleControls${item.id}`}
                          className="carousel carousel-dark slide"
                          data-bs-ride="carousel"
                        >
                          <div className="carousel-inner">
                            {item.images.map((img, index) => (
                              <div
                                key={index}
                                className={`carousel-item ${
                                  index === 0 ? "active" : ""
                                }`}
                              >
                                <img
                                  src={img}
                                  className="d-block"
                                  alt={`${item.title} image`}
                                />
                              </div>
                            ))}
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target={`#carouselExampleControls${item.id}`}
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target={`#carouselExampleControls${item.id}`}
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7">
                        <div className="card-body">
                          <h2 className="card-title">{item.title}</h2>
                          <p className="card-text mb-0">
                            <b>Brand : </b>
                            {item.brand}
                          </p>
                          <p className="card-text mb-0">
                            <b>Description : </b>
                            {item.description}
                          </p>
                          <p className="card-text text-danger">
                            In Stock :&nbsp;
                            {`${
                              item.quantity === item.stock
                                ? "Out of Stock"
                                : item.stock - (item.quantity || 1)
                            }`}
                          </p>
                          <div className="border border-dark d-inline-block mb-3">
                            <button
                              className="btn btn-secondary px-2"
                              onClick={() =>
                                decreaseQuantity(item.id, item.quantity || 1)
                              }
                            >
                              -
                            </button>
                            <span className="px-3">{item.quantity || 1}</span>
                            <button
                              className="btn btn-secondary px-2"
                              onClick={() =>
                                increaseQuantity(item.id, item.quantity || 1)
                              }
                            >
                              +
                            </button>
                          </div>
                          <p className="card-text mb-0">
                            <b>
                              <FontAwesomeIcon
                                icon={faDollarSign}
                                flip
                              ></FontAwesomeIcon>
                              &nbsp;
                              {item.price}.00
                            </b>
                          </p>
                          <p className="card-text sm-text mb-0">
                            <span>M.R.P: </span>
                            <s>
                              {(
                                item.price /
                                (1 - item.discountPercentage / 100)
                              ).toFixed(2)}
                            </s>{" "}
                            <span className="text-white bg-info px-2 py-1 fw-bold rounded-pill">
                              {item.discountPercentage}% off
                            </span>
                          </p>
                          <div className="ratings my-2">
                            {(() => {
                              const stars = [];
                              for (
                                let starIndex = 0;
                                starIndex < 5;
                                starIndex++
                              ) {
                                stars.push(
                                  <FontAwesomeIcon
                                    key={starIndex}
                                    icon={
                                      starIndex < Math.round(item.rating)
                                        ? solidStar
                                        : regularStar
                                    }
                                    className={
                                      starIndex < Math.round(item.rating)
                                        ? "text-warning"
                                        : ""
                                    }
                                  />
                                );
                              }
                              return stars;
                            })()}
                          </div>
                          <p className="my-4 text-center">
                            <a
                              className="btn btn-danger w-75"
                              type="button"
                              onClick={() => removeCart(item.id)}
                            >
                              Remove
                            </a>
                          </p>
                          <div className="row border-top mt-3 py-2">
                            <div className="col-6 text-muted text-start">
                              <p className="card-text mb-0">SHIPPING : </p>
                              <p className="card-text mb-0">SUB-TOTAL : </p>
                            </div>
                            <div className="col-6 text-end">
                              <p className="card-text mb-0">
                                <b>FREE</b>
                              </p>
                              <p className="card-text mb-0">
                                <b>
                                  <FontAwesomeIcon
                                    icon={faDollarSign}
                                    flip
                                  ></FontAwesomeIcon>
                                  &nbsp;
                                  {(item.quantity || 1) * item.price}.00
                                </b>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <Total />
      </div>
    </>
  );
};

export default ProductList;
