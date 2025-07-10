import {test, expect} from './herokuFixtures/heroku.fixture';

test('upload a file', async ({uploadFilePage}) => {
    await uploadFilePage.goto();
    
    const filePath = 'upload-files/demo.txt';
    await uploadFilePage.setInputFiles(filePath);
    
    await uploadFilePage.clickUploadButton();
    await uploadFilePage.verifyUploadedFile('demo.txt');
});