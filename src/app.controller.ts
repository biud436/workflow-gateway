import { Body, Controller, Get, HttpService, Post, Req } from '@nestjs/common';
import * as nest from '@nestjs/common';
import { AppService } from './app.service';
import * as cp from 'child_process';
import { Request } from 'express';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private httpService: HttpService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/webhook')
  async webhook(@Req() req: Request, @Body() body: any) {
    const gateway =
      cp.execSync("ip route | grep default | awk '{print $3}'") || '172.17.0.1';
    const port = '3000';

    // const url = `http://${gateway}:${port}/webhook`;
    // const options = <AxiosRequestConfig>{
    //   method: 'POST',
    //   headers: req.headers,
    // };
    // const response = await this.httpService
    //   .post(url, body, options)
    //   .toPromise();

    const url = `http://${gateway}:${port}/a`;
    const options = <AxiosRequestConfig>{
      method: 'GET',
      headers: req.headers,
    };
    const response = await this.httpService.get(url, options).toPromise();
    return response.data;
  }
}
