import { FC } from 'react';
import style from './login.module.less';
const LoginPage: FC = () => {
    return <div className={`${style.login}` }>
        <span>一个🌰</span>
    </div> 
   
}
LoginPage.displayName = 'LoginPage';

export default LoginPage;