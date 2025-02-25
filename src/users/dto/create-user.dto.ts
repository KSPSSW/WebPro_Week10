import {
  IsEmail,
  IsNotEmpty,
  Length,
  IsIn,
  IsNumber,
  Min,
  Max,
  IsArray,
  ArrayMinSize,
  IsInt,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'อีเมลสำหรับเข้าสู่ระบบ',
    example: 'user@example.com',
  })
  @IsEmail()
  login: string;

  @ApiProperty({
    description: 'รหัสผ่าน (ต้องมีความยาว 8-32 ตัวอักษร)',
    example: 'StrongPass123!',
    minLength: 8,
    maxLength: 32,
  })
  @IsNotEmpty()
  @Length(8, 32)
  password: string;

  // @IsArray()
  // @ApiProperty({ description: 'บทบาทของผู้ใช้', example: ['admin', 'user'], isArray: true })
  // roles: ('admin' | 'user')[];

  @ApiProperty({
    description: 'เพศของผู้ใช้',
    example: 'male',
    enum: ['male', 'female'],
  })
  @IsNotEmpty()
  @IsIn(['male', 'female'])
  gender: 'male' | 'female';

  @ApiProperty({
    description: 'อายุของผู้ใช้ (ค่าต้องอยู่ระหว่าง 1 ถึง 120 ปี)',
    example: 25,
    minimum: 1,
    maximum: 120,
  })
  @IsNumber()
  @Min(1)
  @Max(120)
  age: number;

  @ApiProperty({
    description: 'ชุด id ของ roles',
    example: [1, 2],
  })
  @IsArray()
  @ArrayMinSize(1)
  @IsInt({ each: true })
  roleIds: number[];
}
