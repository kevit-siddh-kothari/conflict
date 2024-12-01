import { IsNotEmpty, IsString } from 'class-validator';
export class CreateAddressDto {
  @IsNotEmpty({ message: `state should not be empty` })
  @IsString({ message: `please enter a valid string` })
  state: string;

  @IsNotEmpty({ message: `city should not be empty` })
  @IsString({ message: `please enter a valid string` })
  city: string;
}
