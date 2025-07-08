import {test, expect} from './herokuFixtures/heroku.fixture';
import * as fs from 'fs';

test('download a file', async ({downloadFilePage}) => {
    await downloadFilePage.goto();
    const downloadFile = await downloadFilePage.downloadJpegFile();
    
    const suggestedFilename = downloadFile.suggestedFilename();
    expect(suggestedFilename).toBe('Jpeg_with_exif.jpeg');

    const filePath = await downloadFilePage.saveDownloadedFile(downloadFile, 'download');
    expect(fs.existsSync(filePath)).toBeTruthy();
});

test('download multiple files', async ({downloadFilePage}) => {
    await downloadFilePage.goto();
    const fileNames = ["demo.txt","bb.txt"];
    
    const filePaths = await downloadFilePage.downloadMultipleFiles(fileNames, 'download');

    for(let i = 0; i < fileNames.length; i++) {
        expect(filePaths[i]).toContain(fileNames[i]);
        expect(fs.existsSync(filePaths[i])).toBeTruthy();
    }
});