import { Header } from "../views/Header/Header";
import { Footer } from "../views/Footer/Footer";


const Main = ({ children }: any) => {
/**
 * This is the main component. We have the reserved word "Children" for showing the data.
 * */
  return (
    <>
      <Header />
      <main className="pb-5">{children}</main>
      <Footer />
    </>
  );
};

export default Main;