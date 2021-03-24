import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/services/auth.service';
import {JwtAuthGuard} from "./auth/guards/jwt-auth.guard";

@Controller()
export class AppController {
  constructor(
      private authService: AuthService,
  ) {}

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
