import Logo from "./assets/images/Logo.png";
import Rectangle from "./assets/images/Rectangle_1.png";
import RectangleT from "./assets/images/Rectangle_2.png";
import BoxOfDoughnut from "./assets/images/BoxOfDoughnut.jpg";
import Phone from "./assets/images/phone.png";
import Google from "./assets/images/Google.png";

export { Logo, Rectangle, RectangleT, BoxOfDoughnut, Phone, Google };

export const formattedPrice = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
});
