import Header from "@/components/header";
import Footer from "@/components/footer";
import ServerProtectedComponents from "@/components/serverProtectedComponent";

const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Header />
      <main>
        <ServerProtectedComponents>{children}</ServerProtectedComponents>
      </main>
      <Footer />
    </section>
  );
};

export default HomepageLayout;
