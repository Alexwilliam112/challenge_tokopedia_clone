import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductList from "@/components/home/productList";
import { getProducts, ProductModel } from "@/db/models/products";
import ErrorModal from "@/components/modals/errorMessage";
import SuccessModal from "@/components/modals/successMessage";
import { Suspense } from "react";
import LoadingFallback from "@/components/loadingFallback";

export default async function Home() {
  const products: ProductModel[] = await getProducts(5);

  return (
    <>
    <Suspense fallback={<LoadingFallback />}>
      <Header />
      <div className="pageBody">
        <SuccessModal />
        <ErrorModal />
        <ProductList products={products} />
      </div>
      <Footer />
      </Suspense>
    </>
  );
}
