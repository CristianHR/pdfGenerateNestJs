import { Controller, Get, Header, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('generate-pdf')
  @Header('Content-Type', 'application/pdf')
  async generatePdf(@Res() res): Promise<void>{

    const buffer = await this.appService.generatePdf();
    
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attached; filename=example.pdf',
      'Content-Length': buffer.length
    })
    res.end(buffer);

  }
}
