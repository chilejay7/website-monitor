const got = require('got');

const url = "https://www.thebriarfellowship.com/product-page/pre-order-raven-claw-orb-tamper-in-two-finishes";

const monitor = async () => {
    const response =- await got(url);

    console.log(response.statusCode);
}