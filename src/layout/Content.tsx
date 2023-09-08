import { FC } from 'react';
import Footer from './Footer';

interface IContentProps {
  children: React.ReactNode;
}
const Content: FC<IContentProps> = ({ children }) => {
  return <>
<section className="bg-white max-w-md m-auto shadow-lg rounded-2xl">
      {children}
      <Footer></Footer>
    </section>
  </>
}

export default Content;