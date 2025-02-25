import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsNumber, Min } from 'class-validator';

export class OrderItemDto {
  @ApiProperty({ description: 'id สินค้า', example: 1 })
  @IsNumber()
  @Min(1, { message: 'Product Id must more than 1.' })
  productId: number;

  @ApiProperty({ description: 'จำนวนสินค้า', example: 1 })
  @IsNumber()
  @Min(1, { message: 'Qty must more than 1.' })
  qty: number;
}

export class CreateOrderDto {
  @ApiProperty({ description: 'User Id' })
  @IsNumber()
  @Min(1, { message: 'User Id must more than 1.' })
  userId: number;

  @ApiProperty({ type: [OrderItemDto] })
  @ArrayMinSize(1)
  orderItems: OrderItemDto[];
}
