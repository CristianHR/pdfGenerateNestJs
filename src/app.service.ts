import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs-extra';
import puppeteer from 'puppeteer';
import Handlebars from "handlebars";

@Injectable()
export class AppService {
  data:any = {
    id: {
      name: {
        fistName: "Cristian",
        lastName: "Hilario Rentera",
      },
      birthday: '15/02'
    }, 
    shots: [  {
      type: 'heardWorm',
      date: "2017-07-27"
    }]
  };
  
  getHello(): string {
    return 'Hello vdsfds Worls fromd NESTs!';
  }

  async generatePdf(): Promise<Buffer>{
    console.log('Generating PDF ...');
    
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
    await page.setContent('<h1>Demo PDF</h1>')
    
    await page.emulateMediaType("screen"); 
    
    const pdf = await page.pdf({
      format: "A4",
      // verificar si el archivo pdf existe sino arrojará un error
      path: 'mydemo4.pdf',
      printBackground: true, 
      margin: {
        left: "0.5cm",
        top: "2cm",
        right: "0.5cm",
        bottom: "2cm"
      },
      displayHeaderFooter: true,
      // no admite rutas de imagenes, se le pasa mediante base64
      headerTemplate: `<div style="font-size:30px">This is a header</div>`,
      footerTemplate: `<div style="font-size:30px">This is a fooder</div>`
    }); 
    
    await browser.close();
    console.log('Generated PDF');
    return pdf;
  }

  async compile(templateName, data){
    const filePath = path.join(process.cwd(), 'templates',  `${templateName}.hbs`);
    const html = await fs.readFile(filePath, 'utf-8');
    return Handlebars.compile(html)(data)
  }

  async generatePdfAndSearch(): Promise<Buffer>{
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
      },
      displayHeaderFooter: true,
      // no admite rutas de imagenes, se le pasa mediante base64
      headerTemplate: '<p style="font-size. 30px">This is a header</p>',
      footerTemplate: '<p>This is a fooder</p>'
    }); 

    await browser.close();
    return pdf;
  }

}
