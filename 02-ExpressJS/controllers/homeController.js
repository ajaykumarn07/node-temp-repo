// import { people } from "../data.js";

const homeController = (req, res) => {
  let data = {
    userId: 10,
    name: "Ajay",
  };
  res.render("index", data);
};

export { homeController };
