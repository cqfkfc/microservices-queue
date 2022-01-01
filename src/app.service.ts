import {Injectable} from "@nestjs/common";
import {IsEmail, IsString} from "class-validator";

@Injectable()
export class AppService {
  async createUser(email, password: createUserFormat): Promise<string> {
    return "user with email: " + email + " is created.";
  }
}

export class createUserFormat {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
