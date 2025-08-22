import got from 'got';
const HTMLParser = require('node-html-parser');

const url = 'https://www.amazon.com/Nintendo-Switch-Mario-World-Bundle-2/dp/B0FC5FJZ9Z/ref=sr_1_1?crid=2CBF0H2J2665Z&dib=eyJ2IjoiMSJ9.aWB7UsjDSpzvVxh4jhDCyF-v7VJ_-t1ibB-X1OU51iTOPsq0K2rAaQoR1E-n3YpdSUuTMDZhPJqUDgvZFOmXI8JQ1SiTa4vHoguCgs9S-pad2SyWRu3efzRLkP9Xw17gV56nhD4H881MeHLJctRCZP-ko2Sue4tatDxjK0De5BkPnMBKw0NNut0INP7XGrBKm2YZLhbjEHRclozh5geo0XTIUiHoabTTKH_Fz7JOBEc.U3l3JQJ3uDWXeXZVLM9kwgRVhRMkxn3eOG8sUdaD1GM&dib_tag=se&keywords=switch+2&qid=1755832210&sprefix=switch+%2Caps%2C175&sr=8-1';

const monitor = async () => {
    
    // Headers are needed to lend the request more validity when received by the server.  At times when there is increased traffic for a really popular item, headers are necessary to allow the request through.  It will more closely resemble regular browser requsets from a user.  The key value pairs can be copied from a request made to the site and viewed using the Network dev tools.  Enable the Raw option in the Dev tools to more easliy copy the headers needed.

    // The same headers can be used to make a request to any URL. The only value that will need to be updated is the 'Alt-Used' to include the root of the site the request is made to.

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

    if(response && response.statusCode == 200) {
        
        let root = HTMLParser.parse(response.body);
        let availabiiltyDiv = root.querySelector('#availabiilty');
        
        // The childNodes are accessed through the console in the browser by using document.getElementbyId('availability').childNodes
        // We look for the innerText property that contains the information related to the stock of the item we're looking for.
        
        if(availabiiltyDiv) {
            let stockText = availabiiltyDiv.childNodes[1].innerText.toLowerCase();
        }
    }
};

monitor();