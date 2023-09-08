import { FC } from "react";
import style from "./login.module.less";
import IMG from "@assets/images/cli.png";
const LoginPage: FC = () => {
    return <div className={`${style.login}` }>
        <span>一个🌰</span>
        <img src={IMG}/>
    </div> 
   
}

export default LoginPage;