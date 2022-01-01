import {Controller} from "@nestjs/common";
import {MessagePattern, Payload} from "@nestjs/microservices";
import {AppService} from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern("create_user")
  async createAUser(@Payload() payload: any) {
    const user = await this.appService.createUser(
      payload.email,
      payload.password
    );
    console.log("create_user is called. ", user);
    return user;
  }
}
