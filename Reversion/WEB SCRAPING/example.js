const puppeteer = require('puppeteer');

const webscraping = async () => {
    const browser = await puppeteer.launch({headless :false});
    const page = await browser.newPage();
    await page.goto('https://www.google.com/search?q=react+jobs&ei=4duYYpLRJYq94-EPqfK90AE&uact=5&oq=react+jobs&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMggIABCABBDJAzIFCAAQkgMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIABBHOgUIABCRAjoUCC4QgAQQsQMQgwEQxwEQ0QMQ1AI6CAguEIAEELEDOgUILhCABDoLCAAQgAQQsQMQgwE6BAgAEEM6DgguEIAEELEDEMcBEKMCOgsILhDHARCvARCRAjoHCAAQyQMQQzoOCC4QgAQQsQMQxwEQ0QM6CAgAEIAEELEDOggILhCABBDUAjoLCC4QgAQQsQMQ1AI6DQgAELEDEIMBEMkDEEM6CAgAELEDEIMBOgoIABCxAxCDARANOgQIABANOgcIABDJAxANSgQIQRgASgQIRhgAUJseWIgzYOczaANwAngAgAGmAYgB5AqSAQQwLjExmAEAoAEBsAEAyAEIwAEB&sclient=gws-wiz&ibp=htl;jobs&sa=X&ved=2ahUKEwi546uOj4_4AhXh6zgGHQlPDQYQutcGKAF6BAgHEAY#htivrt=jobs&htidocid=mgcm3ypKcwgAAAAAAAAAAA%3D%3D&fpstate=tldetail');
    await page.screenshot({ path: 'example.png' });
    
    const Title = await page.evaluate(()=>{

       return Array.from(
            document.querySelectorAll(".BjJfJf"),
            (element) => element.textContent
        )
    })
   
    const CompanyName = await page.evaluate(() => {
        return Array.from(
            document.querySelectorAll(".vNEEBe"),
            (element) => element.textContent
        )
    })
  
    const Location = await page.evaluate(() => {
        return Array.from(
            document.querySelectorAll(".Qk80Jf"),
            (element) => element.textContent
        )
    })
    
    
    

    
    await browser.close();
    return {Location,CompanyName,Title}
    
    
    
   
};
module.exports = webscraping;