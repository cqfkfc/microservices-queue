import {Test, TestingModule} from "@nestjs/testing";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it("should return nothing", async () => {
      const mockedPayload = {
        email: "fake_email@gmail.com",
        password: "fake_password",
      };
      expect(await appController.createAUser(mockedPayload)).toBe(
        "user with email: fake_email@gmail.com is created."
      );
    });
  });
});
