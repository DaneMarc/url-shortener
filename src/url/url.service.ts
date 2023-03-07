import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from './url.entity';
import { UrlDto } from './url.dto';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private repo: Repository<Url>,
  ) {}

  async shorten(UrlDto: UrlDto) {
    try {
      const test = new URL(UrlDto.url);
    } catch (e) {
      throw new BadRequestException();
    }
    const code = Math.random().toString(32).substring(2, 7);

    let urlObj = await this.repo.findOneBy({ url: UrlDto.url });
    if (urlObj) return 'http://localhost:3000/' + urlObj.code;

    try {
      urlObj = this.repo.create({
        code: code,
        url: UrlDto.url,
      });
      this.repo.save(urlObj);
    } catch (e) {
      console.log(e);
      throw new BadRequestException();
    }

    return 'http://localhost:3000/' + code;
    //return process.env.BASE + '/' + code;
  }

  async getCode(code: string) {
    try {
      const urlObj = await this.repo.findOneBy({ code: code });
      if (urlObj) return urlObj.url;
    } catch (error) {
      console.log(error);
      throw new NotFoundException();
    }
  }
}
