import Header from "@/components/header";
import Footer from "@/components/footer";

const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default HomepageLayout;
