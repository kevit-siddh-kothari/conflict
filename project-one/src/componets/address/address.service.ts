import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Collection } from 'src/global-constants/global.enum';
import { Address, addressDocument } from './entities/address.entity';
import { Model } from 'mongoose';
import { error } from 'console';
import {
  addressResponse,
  filterQuery,
} from 'src/global-interface/global.interface';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Collection.ADDRESS)
    private addressRepo: Model<addressDocument>,
  ) {}
  async create(createAddressDto: CreateAddressDto): Promise<addressResponse> {
    try {
      const addressDocument = new this.addressRepo(createAddressDto);
      await addressDocument.save();
      return { message: `Sucess`, data: addressDocument };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findAll(requestQuery: filterQuery): Promise<addressDocument[]> {
    try {
      const filter: filterQuery = {};

      requestQuery.limit ? (filter.limit = requestQuery.limit) : undefined;

      requestQuery.sort ? (filter.sort = requestQuery.sort) : null;

      requestQuery.skip ? (filter.skip = requestQuery.skip) : null;

      return await this.addressRepo
        .find()
        .sort(filter.sort)
        .skip(filter.skip)
        .limit(filter.limit);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findOne(id: string): Promise<Address> {
    try {
      console.log('hiii', typeof id);
      let isAddressExisting = await this.addressRepo.findById(id).lean();
      console.log('hello');
      if (!isAddressExisting) {
        console.log('hey');
        throw new HttpException(
          { error: `address not found` },
          HttpStatus.NOT_FOUND,
        );
      }
      return isAddressExisting;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else {
        throw new Error(error.message);
      }
    }
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    try {
      await this.findOne(id);
      return await this.addressRepo.findOneAndUpdate(
        { _id: id },
        updateAddressDto,
        { new: true },
      );
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async remove(id: string): Promise<addressResponse> {
    try {
      await this.findOne(id);
      await this.addressRepo.findByIdAndDelete(id);
      return { message: `user with ${id} deleted successfully` };
    } catch (error: any) {
      throw new error(error.message);
    }
  }
}
