import { ApiProperty } from '@nestjs/swagger';

export class userCreate {
  @ApiProperty({ example: 'alex' })
  userName: string;
  @ApiProperty({ example: 'alex@gmail.com' })
  email: string;
  @ApiProperty({ example: '900099090' })
  phone: string;
  @ApiProperty({ example: '1234' })
  password: string;
}
