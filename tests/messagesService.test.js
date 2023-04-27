import { jest } from "@jest/globals";

import * as messagesService from "../src/services/messagesService.js";
import messagesRepository from "../src/repositories/messagesRepository.js";
import { mongoClient } from "../src/config/database.js";

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("messagesService", () => {
    it("should be 0", () => {
      expect(0).toBe(0);
    });
    it("should be 1", () => {
      expect(1).toBe(1);
    });
    it("should be 1", () => {
      expect(1).toBe(2);
    });
    it("should get all messages", () => {
          const messages = [{
            _id: "6449e7bdb691570f8079f467",
            username: "Gabriel",
            message: "Hello!"
          }];
          jest.spyOn(messagesRepository, "getAll").mockImplementationOnce(() => messages);
          const promise = messagesService.getAllMessages();
          expect(promise).resolves.toBe(messages);
    });
    it("should get all messages", () => {
      const newMessage = {
        username: "Gabriel",
        message: "Hello!"
      };
      jest.spyOn(messagesRepository, "post").mockImplementationOnce(() => { return { acknowledged: true } });
      const promise = messagesService.postMessage(newMessage);
      expect(promise).resolves.toEqual(expect.objectContaining({acknowledged: true}));
});
  });

afterAll(() => {
  mongoClient.close();
});
