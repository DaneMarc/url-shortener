import { Body, Controller, Post } from '@nestjs/common';
import { UrlDto } from './url.dto';
import { UrlService } from './url.service';

@Controller('url')
export class UrlController {
  constructor(private service: UrlService) {}

  @Post('shorten')
  shortenUrl(
    @Body()
    urlDto: UrlDto,
  ) {
    return this.service.shorten(urlDto);
  }
}
