// Central configuration – edit values here only.
window.RT_CONFIG = {
  name: "RT-Groceryhub", tagline: "Fresh Choices, Happy Living!",
  phone: "7861986128",
  email: "groceryhub_rt2gmaile.com", emailVerified: false, // unverified: no mailto link is ever created
  github: "https://github.com/shahrishabh1513-jsk",
  repo: "https://github.com/shahrishabh1513-jsk/RT-Groceryhub",
  developer: "RT1504", owner: "RISHABH SHAH",
  currency: "INR", symbol: "₹", country: "India",
  deliveryCharge: 40, freeDeliveryAbove: 499,
  coupons: { FRESH10: { type: "pct", value: 10, max: 100, min: 199, label: "10% off (max ₹100) on orders above ₹199" },
             SAVE50:  { type: "flat", value: 50, min: 599, label: "₹50 off orders above ₹599" } },
  offerEndsAt: null,                 // ISO date string to enable promo countdown
  demoMode: true,
  paymentGateway: null,              // set when a real gateway exists; online payment stays disabled until then
  trackingMode: "demo",              // "demo" | "real" (real needs a backend)
  demoStageSeconds: 15,              // demo tracking advances one stage per N seconds
  serviceablePinPrefixes: ["380", "382", "390"] // demo PIN checker only
};
