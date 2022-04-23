import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { UserService } from 'src/user/user.service';
import { WriteUpFormDto } from 'src/write-up/dtos/WriteUpForm.dto';
import { WriteUpService } from 'src/write-up/write-up.service';

@Injectable()
export class AdminService {
  constructor(
    private userService: UserService,
    private writeUpService: WriteUpService,
  ) {}

  public async getAllUsers() {
    return await this.userService.findUsers();
  }

  public async getUserWriteUps(userId: string | ObjectId) {
    return await this.writeUpService.getUserWriteUps(userId);
  }

  public async updateWriteUp(writeUpId: string, newWriteUp: WriteUpFormDto) {
    await this.writeUpService.update(writeUpId, newWriteUp);
  }
}
