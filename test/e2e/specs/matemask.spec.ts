const puppeteer = require('puppeteer');
const dappeteer = require('@chainsafe/dappeteer');

async function main() {

    
    /**
     * dappeteer 5.0.1
     * puppeteer 19.9.0
     */
    const browser = await dappeteer.launch(puppeteer, {
        matamaskVersion: 'v10.31.0', /** 指定matamaskVersion得版本 */
        // headless: true,
        // defaultViewport: null,
        /** 默认是看不到执行界面得，若想看到执行界面，
         * 需要下载Chromium，该paty为Chromium的本地路径 
         * 地址：https://download-chromium.appspot.com/
         * C:\\your_workspace\\node_modules\\puppeteer\\.local-chromium\\win64-(version)\\chrome-win\\chrome.exe
         * */
        executablePath: 'D:\\code\\life-up\\website\\node_modules\\puppeteer\\.local-chromium\\win64-1909\\chrome-win\\chrome.exe',
        automation: 'puppeteer',
        args: [
            '--no-sandbox',
            'ozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36',
            /** 浏览器得视窗 */
            '--window-size=1200,800'
        ],
        slowMo: 200
    });
    await dappeteer.setupMetaMask(browser, {
        seed: 'father across hunt civil solid above genuine lanm cricket galaxy degree together' /** 助记词 */,
        hideSeed: true,
        password: '123456789'
    });
}

main();