import { BrowserRouter } from "react-router-dom";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Product from "./components/Products";
import { GlobalStyle } from "./globalStyle";
import { productData, productDataTwo } from "./components/Products/fakeData";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Hero />
      <Product heading="Choose your favorite" products={productData} />
      <Feature />
      <Product heading="Sweet Treats for You" products={productDataTwo} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
