import { Footer } from "../footer/footer";
import { Header } from "../header/header";

type BaseLayoutProps = {
  children: React.ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="2xl::container mx-auto px-4 md:px-2">
      {children}
      </div>
      <Footer />
    </div>
  );
};
