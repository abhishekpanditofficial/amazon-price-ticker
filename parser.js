require('dotenv').config();
const sendEmail = require('./email');

const nightmare = require('nightmare')()


const args= process.argv.slice(2)
const url= args[0]
const minPrice=args[1]

checkPrice();

async function checkPrice() {
    dhfiehfie
    try {
        const priceString= await nightmare.goto(url)
        .wait('#priceblock_ourprice')
        .evaluate(() => document.getElementById("priceblock_ourprice").innerText)
        .end()
    const updatedPriceString= priceString.replace(',','');
    const priceNumber= parseFloat(updatedPriceString.replace('₹', ''))
    if(priceNumber < minPrice) {
        console.log("Its is cheap");
       await  sendEmail({
          email: 'web@vandore.in',
          subject: 'Prie is Low',
          message: `The price on ${url} has dropped below ${minPrice}`
        });
    
    }else{
        console.log("it is expensive");
    } 
    } catch (error) {
        await  sendEmail({
             email: 'web@vandore.in',
             subject: 'Amazon Price Checker Error',
             message: error.message
         })
    }
 
}