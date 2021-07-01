import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class JoinRequestDto {
  @IsString()
  @ApiProperty({
    example: '023049832010111',
    description: 'グーグルID',
    required: false,
  })
  public googleId: string;

  @IsEmail()
  @ApiProperty({
    example: 'example@yahoo.jp',
    description: 'メールアドレス',
    required: true,
  })
  public email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '佐藤真由美',
    description: 'お名前',
    required: true,
  })
  public name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '3a54y88792hg5a435',
    description: '暗証番号',
    required: true,
  })
  public password: string;
}
