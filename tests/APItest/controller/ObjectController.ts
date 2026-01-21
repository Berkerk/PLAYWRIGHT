import { APIRequestContext, APIResponse } from '@playwright/test';
import { CreateUserRequest } from '../models/Request';
import * as apidata from '../ApiTestData/ApiData.json';

export class ObjectController {
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    /**
     * Yeni bir kullanıcı oluşturur (POST /objects)
     */
    async createUser(payload: CreateUserRequest): Promise<APIResponse> {
        return await this.request.post(apidata.url + '/create', {
            data: payload
        });
    }

    async updateUser(userid:number, payload: CreateUserRequest): Promise<APIResponse> {
        return await this.request.put(apidata.url + `/update/${userid}`, {
            data: payload
        });
    }

    async getEmployeeList(): Promise<APIResponse> {
        return await this.request.get(apidata.url + '/employees');
    }

    async getSingleEmployee(employeeid:number): Promise<APIResponse> {
        return await this.request.get(apidata.url + `/employee/${employeeid}`);
    }

    async deleteEmployee(employeeid:number): Promise<APIResponse> {
        return await this.request.delete(apidata.url + `/delete/${employeeid}`);
    }
}