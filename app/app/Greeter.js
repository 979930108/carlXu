import React, {Component} from 'react'
import config from './config.json';
import styles from  './main.css';//使用require导入css文件
class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter