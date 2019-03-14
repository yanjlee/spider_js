var puppeteer = require('puppeteer')
const conf = {
    // userDataDir:'./tmp',
    headless: false,
    defaultViewport: {
        width: 1300,
        height: 900
    },
    args: []
}
puppeteer.launch(conf).then(async browser => {
    var page = await browser.newPage()
    await page.goto('https://passport.aliyun.com/reg/enter_reg.htm?_lang=zh&_regfrom=ALIYUN&cssStyle=&_country=null&_extra=null&tg=https%3A%2F%2Faccount.aliyun.com%3A443%2Fregister%2Fsuccess.htm%3F%26fromSite%3D6%26params%3D%257B%2522site%2522%253A%25226%2522%257D%26umidToken%3DY069f5de87ef4cd758b798b6648d46fe1%26regFlag%3D1%26accounttraceid%3D0a2f3e4b-d774-4110-9434-5ee089b148dd&rnd=0.061778880918162526')
    await page.evaluate(async () => {
        Object.defineProperty(navigator, 'webdriver', {get: () => false})
    })
    await page.evaluate(async () => {
        window.scrollBy(0, 200)
    })
    console.log(await page.evaluate('navigator.webdriver'))
    try {
        var slide_btn = await page.waitForSelector('#nc_1_n1z', {timeout: 3000})
        const rect = await page.evaluate((slide_btn) => {
            const {top, left, bottom, right} = slide_btn.getBoundingClientRect();
            return {top, left, bottom, right}
        }, slide_btn)
        console.log(rect)
        rect.left = rect.left + 10
        rect.top = rect.top + 10
        const mouse = page.mouse
        await mouse.move(rect.left, rect.top)
        await page.touchscreen.tap(rect.left, rect.top) // h5需要手动分发事件 模拟app的事件分发机制。
        await mouse.down()
        var start_time = new Date().getTime()
        await mouse.move(rect.left + 800, rect.top, {steps: 25})
        await page.touchscreen.tap(rect.left + 800, rect.top,)
        console.log(new Date().getTime() - start_time)
        await mouse.up()
        console.log(await page.evaluate('navigator.webdriver'))
        console.log('end')
    } catch (e) {
        console.log(e)
        console.log(await page.evaluate('navigator.webdriver'))
    }
})
