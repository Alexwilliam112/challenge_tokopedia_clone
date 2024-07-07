import Header from "@/components/header";
import Footer from "@/components/footer";
import { Suspense } from "react";
import LoadingFallback from "@/components/loadingFallback";

const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Header />
      <main>
        <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
      </main>
      <Footer />
    </section>
  );
};

export default HomepageLayout;
