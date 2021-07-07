// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      "mongodb+srv://Admin:eBHhXgVKcgnjNo1P@reactreserve.wdooo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    JWT_SECRET: "<insert-jwt-secret>",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dweimb3da/image/upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>",
  },
};
