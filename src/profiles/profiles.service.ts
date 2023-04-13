import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Profile } from './profiles.model';
import { CreateProfileDto } from './dto/createProfileDto';
import { EventPattern } from '@nestjs/microservices';
@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile) private profileRepository: typeof Profile,
  ) {}

  async createProfile(dto: CreateProfileDto) {
    console.log(dto);
    const profileExists = await this.getProfile(dto.userID);
    if (profileExists.count === 0) {
      const profile = await this.profileRepository.create(dto);
      return profile;
    } else {
      throw new HttpException('Profile already exists', HttpStatus.BAD_REQUEST);
    }
  }

  async getProfile(userID: string) {
    const profile = await this.profileRepository.findAndCountAll({
      where: { userID },
    });
    return profile;
  }
}
