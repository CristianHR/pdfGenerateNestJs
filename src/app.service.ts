import { Injectable } from '@nestjs/common';
import * as path from 'path';
import puppeteer from 'puppeteer';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello vdsfds Worls fromd NESTs!';
  }

  async generatePdf(): Promise<Buffer>{
    const browser = await puppeteer.launch({
      headless: "new",
      defaultViewport: {
        width: 750, 
        height: 500,
        deviceScaleFactor: 1,
        isMobile: true, 
        hasTouch: false, 
        isLandscape: false
      }
    });
    const page = await browser.newPage();
    await page.goto("https://www.google.com", {
      waitUntil: "networkidle0"
    }); 

    await page.emulateMediaType("screen"); 
    
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true, 
      margin: {
        left: "0.5cm",
        top: "2cm",
        right: "0.5cm",
        bottom: "2cm"
      }
    }); 

    await browser.close();
    return pdf;
  }

}
