const getWishlist = () => {
  const wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];
  return wishlistData;
};

export default getWishlist;
