import { ApiProperty } from '@nestjs/swagger';

export class createProduct {
  @ApiProperty({ example: 'iphone' })
  name: string;
}
