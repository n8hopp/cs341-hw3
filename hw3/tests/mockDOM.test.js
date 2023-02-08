// file by Nate Hopper, 2/8

var fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');

test('test selectEvent', () => {

    // Read index.html into string
    var html = fs.readFileSync('public/index.html', 'utf8');
    expect(html).toEqual(expect.anything());

    //put the HTML into a testing DOM and do a sanity check
    document.body.innerHTML = html;
    const $ = require('jquery');
    expect($('h1').html()).toBe("Cheesecake Order Form");
})