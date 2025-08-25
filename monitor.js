import got from 'got';
import HTMLParser from 'node-html-parser';

const url = 'https://www.amazon.com/Peterson-Pipe-Lighter-Grey/dp/B07PV71S52/ref=sr_1_1?crid=B0B4MJGAUEC8&dib=eyJ2IjoiMSJ9.VmzVyTDVcGyZd1J8BVrBI1bUh4GDW0BPjTzphR-kCvVzqwhXht0jbG0dBTuU8jy4dFUAw3jdAZBtfCE1OVGYppyjM75FUcRQPo60-WDvUnMQylqWED5Fc6fyuaPRqGow_b_rhDn7AubSOTSYTMbqiLB3qxYNl5jEaJo1FINWR2Yuz4J9cR9P-bBiFfZqVn6hIVjdPVYdZwaDsQVOLURPMR1PdCWpI04cuRiLTwlud9JDQFesIFXaN2H3XyMTECWnswRSykfdwduKwgQp30y2EXS7QSXvXYLJTgXMHq_K7Oo.zXIcZ-Xc85Bo39lYLq3IcpXqcTDDdU3w-KjtiUk7WiE&dib_tag=se&keywords=peterson+pipe+lighter&qid=1755835463&sprefix=peterson+pipe+lighte%2Caps%2C171&sr=8-1';

const monitor = async () => {
    
    // Headers are needed to lend the request more validity when received by the server.  At times when there is increased traffic for a really popular item, headers are necessary to allow the request through.  It will more closely resemble regular browser requsets from a user.  The key value pairs can be copied from a request made to the site and viewed using the Network dev tools.  Enable the Raw option in the Dev tools to more easliy copy the headers needed.

    // The same headers can be used to make a request to any URL. The only value that will need to be updated is the 'Alt-Used' to include the root of the site the request is made to.

    const urlHeaders = {
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
        headers: urlHeaders,
    });

    console.log(response.statusCode);

    if(response && response.statusCode == 200) {
        
        let root = HTMLParser.parse(response.body);
        console.log(root);
        let availabilityDiv = root.querySelector('#availability');

        // This object is being returned as null when automated.  Amazon appears to be serving different data in the response to the automated requests as the code works in the browser's window.
        
        console.log(availabilityDiv);
        
        // The childNodes are accessed through the console in the browser by using document.getElementbyId('availability').childNodes
        // We look for the innerText property that contains the information related to the stock of the item we're looking for.

        if(availabilityDiv) {
            let stockText = availabilityDiv.childNodes[1].innerText.toLowerCase();
            console.log(stockText);
        }
    }
};

monitor();