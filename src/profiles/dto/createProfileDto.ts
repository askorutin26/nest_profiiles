//структура данных для обмена клиент-сервер (сервер-сервер), какие данные приходят и возвращаются
import { IsString } from 'class-validator';
export class CreateProfileDto {
  @IsString({ message: 'Profile name Should be string' })
  readonly name: string;

  @IsString({ message: 'Profile surname Should be string' })
  readonly surname: string;

  @IsString({ message: 'Profile phone Should be string' })
  readonly phone: string;

  @IsString({ message: 'Profile userID Should be string' })
  readonly userID: string;
}
