import { Controller, Get, Param, Res } from '@nestjs/common';
import { UrlService } from './url/url.service';

@Controller()
export class AppController {
  constructor(private readonly urlService: UrlService) {}

  @Get(':code')
  async redirect(
    @Res() res,
    @Param('code')
    code: string,
  ) {
    const url = await this.urlService.getCode(code);

    return res.redirect(url);
  }
}
