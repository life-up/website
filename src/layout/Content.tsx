import { FC } from 'react';
import Footer from './Footer';
import style from './Content.module.less';
import { Outlet } from 'react-router-dom';
interface IContentProps {
  // children: React.ReactNode;
}
// const Content: FC<IContentProps> = ({ children }) => {
const Content: FC<IContentProps> = () => {
  return (
    <>
      <div className={`${style.content} min-h-screen bg-white flex flex-col max-w-md m-auto shadow-lg rounded-2xl overflow-hidden`}>
        <section className='flex-1'>
          <Outlet />
        </section>
        {/* {children} */}
        <Footer></Footer>
      </div>
    </>
  );
};
Content.displayName = 'ContentComponent';

export default Content;
