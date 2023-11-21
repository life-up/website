import { FC } from 'react';
import Footer from './Footer';
import style from './Content.module.less';
interface IContentProps {
  children: React.ReactNode;
}
const Content: FC<IContentProps> = ({ children }) => {
  return (
    <>
      <section className={`${style.content} bg-white max-w-md m-auto shadow-lg rounded-2xl overflow-hidden`}>
        {children}
        <Footer></Footer>
      </section>
    </>
  );
};
Content.displayName = 'ContentComponent';

export default Content;
