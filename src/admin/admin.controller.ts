import { Body, Controller, Get, Param, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { RolesGuard } from "src/roles.guard";
import { Roles } from "src/roles.decorator";
import { Role } from "src/role.enum";
import { AdminService } from "./admin.service";
import { WriteUpFormDto } from "src/write-up/dtos/WriteUpForm.dto";

@Roles(Role.Admin)
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('api/v1/admin-user/:id')
export class AdminController {
  constructor(private adminService: AdminService){}
  
  @Get('users')
  public async getUsers() {
    return await this.adminService.getAllUsers()
  }

  @Get('users/:userId/write-ups')
  public async getUserWriteUps(@Param('userId') userId: string) {
    return await this.adminService.getUserWriteUps(userId)
  }

  @Put('users/:userId/write-ups/:writeUpId')
  public async updateWriteUpState(
    @Param('writeUpId') id: string,
    @Body() writeUpBody: WriteUpFormDto
  ){
    return await this.adminService.updateWriteUp(id, writeUpBody)
  }
}