import got from 'got';

const url = 'https://www.thebriarfellowship.com/product-page/pre-order-raven-claw-orb-tamper-in-two-finishes';

const monitor = async () => {
    
    // Headers are needed to lend the request more validity when received by the server.  At times when there is increased traffic for a really popular item, headers are necessary to allow the request through.  It will more closely resemble regular browser requsets from a user.  The key value pairs can be copied from a request made to the site and viewed using the Network dev tools.  Enable the Raw option in the Dev tools to more easliy copy the headers needed.

    const myHeaders = {
        'Connection': 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:142.0) Gecko/20100101 Firefox/142.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Alt-Used': 'www.amazon.com',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': 1,
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Priority': 'u=0, i',
    }

    const response = await got(url, {
        headers: myHeaders
    });
    console.log(response.statusCode);
};

monitor();