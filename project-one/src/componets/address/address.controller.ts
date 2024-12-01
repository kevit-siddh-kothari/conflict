import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseFilters,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import {
  addressResponse,
  filterQuery,
} from 'src/global-interface/global.interface';
import { Address, addressDocument } from './entities/address.entity';
import { HttpExceptionFilter } from 'src/exception-filter.ts/global';

@Controller('address')
@UseFilters(HttpExceptionFilter)
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async create(
    @Body() createAddressDto: CreateAddressDto,
  ): Promise<addressResponse> {
    return this.addressService.create(createAddressDto);
  }

  @Get()
  async findAll(@Query() query: filterQuery): Promise<addressDocument[]> {
    return this.addressService.findAll(query);
  }

  @Get(':id')
  @UseFilters(HttpExceptionFilter)
  async findOne(@Param('id') id: string): Promise<Address> {
    return this.addressService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ): Promise<addressDocument> {
    return this.addressService.update(id, updateAddressDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<addressResponse> {
    return this.addressService.remove(id);
  }
}
