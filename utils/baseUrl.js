const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://reactreserve-jv88899.vercel.app/"
    : "http://localhost:3000";

export default baseUrl;
