import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { WriteUpFormDto } from 'src/write-up/dtos/WriteUpForm.dto';
import { WriteUpService } from 'src/write-up/write-up.service';

@Injectable()
export class AdminService {
  constructor(
    private userService: UserService,
    private writeUpService: WriteUpService,
  ) {}

  public async getAllUsers(idToExclude: string) {
    const allUsers = await this.userService.findUsers();
    return allUsers.filter((user) => user.id.toHexString() !== idToExclude)
  }

  public async getUserWriteUps(userId: string) {
    return await this.writeUpService.getUserWriteUps(userId);
  }

  public async updateWriteUp(writeUpId: string, newWriteUp: WriteUpFormDto) {
    await this.writeUpService.update(writeUpId, newWriteUp);
  }
}
