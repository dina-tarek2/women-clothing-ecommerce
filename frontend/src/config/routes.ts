export const ROUTES = {
  //Shop
  home: "/",
  shop: "/shop",
  sale: "/sale",
  productDetails: (slug: string) => `/products/${slug}`,
  cart: "/cart",
  trackOrder: "/track-order",
  orderSuccess: (id: string) => `/order-success/${id}`,
  wishlist: "/wishlist",
  about: "/about",

  //Auth
  login: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",
  verifyCode: "/verify-code",

  // Account (protected)
  account: "/account",
} as const;
