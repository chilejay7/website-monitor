import got from 'got';

const url = "https://www.thebriarfellowship.com/product-page/pre-order-raven-claw-orb-tamper-in-two-finishes";

const monitor = async () => {
    
    // Headers are needed to lend the request more validity when received by the server.  At times when there is increased traffic for a really popular item, headers are necessary to allow the request through.  It will more closely resemble regular browser requsets from a user.
    
    const myHeaders = {

    }
    const response = await got(url, {
        headers: myHeaders
    });
    console.log(response.statusCode);
};

monitor();