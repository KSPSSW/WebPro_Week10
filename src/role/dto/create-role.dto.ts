import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({
    description: 'ชื่อตำแหน่ง',
    example: 'admin',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
