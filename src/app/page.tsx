import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductList from "@/components/home/productList";
import { getProducts, ProductModel } from "@/db/models/products";
import ErrorModal from "@/components/modals/errorMessage";
import SuccessModal from "@/components/modals/successMessage";

export default async function Home() {
  const products: ProductModel[] = await getProducts(5);

  return (
    <>
      <Header />
      <div className="pageBody">
        <SuccessModal />
        <ErrorModal />
        <ProductList products={products} />
      </div>
      <Footer />
    </>
  );
}
