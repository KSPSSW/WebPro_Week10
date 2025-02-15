import { IsString, IsNumber, IsIn, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'ชื่อสินค้า', example: 'Latte' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'ราคาสินค้า', example: 120, minimum: 0 })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    description: 'ประเภทสินค้า',
    example: 'drink',
    enum: ['drink', 'bakery'],
  })
  @IsString()
  @IsIn(['drink', 'bakery'])
  category: 'drink' | 'bakery';
}
