import { Header } from "../views/Header/Header";
import { Footer } from "../views/Footer/Footer";


const Main = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="pb-5">{children}</main>
      <Footer />
    </>
  );
};

export default Main;