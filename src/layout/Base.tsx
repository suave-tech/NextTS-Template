import { AppConfig } from "@/utils/AppConfig";
import { IChildren, ITailwindClass } from "@/utils/Types";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Meta } from "./Meta";

type IBase = IChildren & {
  className: ITailwindClass;
  title?: string;
  description?: string;
};

const Base = ({ children, className, title, description }: IBase) => {
  return (
    <div className={className}>
          <Meta title={title ?? AppConfig.title} description={description ?? AppConfig.description} />

      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export { Base };