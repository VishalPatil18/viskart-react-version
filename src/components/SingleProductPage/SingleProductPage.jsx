import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import { Breadcrumb } from "../../components";
import { ICONS_URL } from "../../constants";
import {
  useLoader,
  useCart,
  useAuth,
  useAuthModal,
  useWishlist,
} from "../../context";
import {
  addToCartHandler,
  addToWishlistHandler,
  isInArrayList,
  removeFromWishlistHandler,
  getSingleProductHandler,
} from "../../utilities";
import styles from "./SingleProductPage.module.css";

const SingleProductPage = () => {
  const { productID } = useParams();
  const { setLoader } = useLoader();
  const { authModalHandler } = useAuthModal();
  const { authState } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const [product, setProduct] = useState([]);

  const [itemAdded, setItemAdded] = useState(
    isInArrayList(product, cartState.cart)
  );
  const [isWishlisted, setIsWishlisted] = useState(
    isInArrayList(product, wishlistState.wishlist)
  );

  useEffect(() => {
    setLoader(true);
    (async () => {
      try {
        const productFromResponse = await getSingleProductHandler(productID);
        setProduct(productFromResponse);
        setItemAdded(isInArrayList(productFromResponse, cartState.cart));
        setIsWishlisted(
          isInArrayList(productFromResponse, wishlistState.wishlist)
        );
        setLoader(false);
      } catch (error) {
        setLoader(false, "I'm Working");
        toast.error("Something went wrong! Please try again later");
      }
    })();
  }, []);

  return (
    <>
      <Breadcrumb
        links={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.title, path: `/product/${productID}` },
        ]}
      />
      <article className={styles.productCard}>
        {product.discount !== "0" && (
          <div className={`card__badge ${styles.cardBadge}`}>
            <img
              className={`badge__icon icon-danger ${styles.badgeIconWidth}`}
              src={`${ICONS_URL}/bookmark.svg`}
              alt="bookmark-icon"
            />
            <span className={`card__discount ${styles.cardDiscount}`}>
              {product.discount}% OFF
            </span>
          </div>
        )}
        <div className={styles.imgWrapper}>
          <img className={styles.productImage} src={product.imageSrc} />
        </div>
        <div className={styles.detailsWrapper}>
          <h5 className={`h-5 ${styles.title}`}>{product.title}</h5>
          <small className={styles.vendor}>{product.vendor}</small>
          <div className={styles.categoryWrapper}>
            {product.categoryName
              ? product.categoryName.map((category) => (
                  <span key={category} className={`chip ${styles.category}`}>
                    {category}
                  </span>
                ))
              : null}
          </div>
          <p className={styles.description}>{product.desc}</p>
          <div className={styles.ratingAndPriceWrapper}>
            <p className={styles.cardPrice}>
              ${product.discount !== "0" && <strike>{product.price}</strike>}
              {
                <span
                  className={`card__content--newprice ${styles.cardNewPrice}`}
                >
                  {product.discount === "0"
                    ? product.price
                    : (
                        product.price -
                        Number.parseFloat(
                          product.price * (product.discount / 100)
                        )
                      ).toFixed(2)}
                </span>
              }
              /-
            </p>
            <div className={styles.rating}>
              <img
                className={`icon-light ${styles.ratingStar}`}
                src={`${ICONS_URL}/star-solid.svg`}
              />
              {product.rating}
            </div>
          </div>
          <div className={styles.btnsWrapper}>
            <button className={`button btn-solid-primary ${styles.buyButton}`}>
              <img
                className="icon-md icon-light"
                src={`${ICONS_URL}/shipping-fast.svg`}
              />
              Buy
            </button>
            <div className={styles.CartbtnsWrapper}>
              {!itemAdded ? (
                <button
                  className={`button btn-solid-dark ${styles.buyButton}`}
                  onClick={() => {
                    if (authState.token) {
                      setItemAdded(true);
                      return addToCartHandler(
                        product,
                        cartDispatch,
                        authState.token
                      );
                    }
                    toast.warning("You're not logged in");
                    return authModalHandler("LOGIN");
                  }}
                >
                  <img
                    className="icon-md icon-light"
                    src={`${ICONS_URL}/shopping-cart.svg`}
                    alt="cart"
                  />
                  Add to cart
                </button>
              ) : (
                <Link
                  to="/cart"
                  className={`button btn-solid-success ${styles.buyButton}`}
                >
                  Go to Cart
                </Link>
              )}
              <button
                className={`button btn-solid-dark ${styles.wishlistBtn}`}
                onClick={() => {
                  if (authState.token) {
                    if (!isWishlisted) {
                      setIsWishlisted(true);
                      return addToWishlistHandler(
                        product,
                        wishlistDispatch,
                        authState.token
                      );
                    } else {
                      setIsWishlisted(false);
                      return removeFromWishlistHandler(
                        product,
                        wishlistDispatch,
                        authState.token
                      );
                    }
                  }
                  toast.warning("You're not logged in");
                  return authModalHandler("LOGIN");
                }}
              >
                <img
                  className={`icon-sm icon-danger ${styles.wishlistIcon}`}
                  src={`${ICONS_URL}/${
                    isWishlisted ? "heart" : "heart-regular"
                  }.svg`}
                  alt="heart-icon"
                />
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export { SingleProductPage };
