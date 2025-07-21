// Trong file httpUtils.js
export class HttpUtils {
  static async checkImageStatus(imgSrc: string, baseUrl: string = 'https://the-internet.herokuapp.com'): Promise<{ status: number; url: string }> {
    const fullUrl = `${baseUrl}/${imgSrc}`;
    const response = await fetch(fullUrl); // Hoặc sử dụng API của Playwright
    return { status: response.status, url: fullUrl };
  }
}