import { CreateUserRequest } from "../models/Request";

export const createUserData = (overrides?: Partial<CreateUserRequest>): CreateUserRequest => {
    const defaultData: CreateUserRequest = {
        name: "DefaultName",
        salary: "5000",
        age: "30"
    };

    return { ...defaultData, ...overrides };
}