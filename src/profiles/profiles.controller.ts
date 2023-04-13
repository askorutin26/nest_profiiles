import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateProfileDto } from './dto/createProfileDto';
import { ProfileService } from './profiles.service';
@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfileService) {}

  @EventPattern('create profile')
  @Post()
  createProfile(@Body() profileDto: CreateProfileDto) {
    return this.profileService.createProfile(profileDto);
  }

  @Get(':userID') //найти пользователя по почте
  async getProfile(@Param('userID') userID: string) {
    const result = await this.profileService.getProfile(userID);
    return result.rows;
  }
}
