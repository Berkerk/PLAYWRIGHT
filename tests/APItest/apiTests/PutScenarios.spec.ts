import { test, expect } from '@playwright/test';
import { ObjectController } from '../controller/ObjectController';
import { CreateUserRequest } from '../models/Request';
import { CreateUserResponse } from '../models/Response';
import { createUserData } from '../utils/DataFactory';

test.describe('Restful API - User Edit', () => {
    
    test('Kullanıcı başarıyla güncellenebilmeli', async ({ request }) => {
        const objectController = new ObjectController(request);

        // 1. Request verisini hazırla (Request Modeline uygun)
        const newUser: CreateUserRequest = createUserData();

        // 2. Servis çağrısını yap
        const response = await objectController.updateUser(1,newUser);
        
        // 3. HTTP durum kodunu kontrol et
        expect(response.status()).toBe(200);

        // 4. Response body'sini modelle (Response Modeline cast et)
        const responseBody: CreateUserResponse = await response.json();
        console.log(responseBody);

        // 5. Assertions (Doğrulamalar)
        expect(responseBody.status).toBe('success');
        expect(responseBody.data.name).toBe(newUser.name);
        expect(responseBody.data.salary).toBe(newUser.salary);
        expect(responseBody.data.age).toBe(newUser.age);
       //expect(responseBody.data.id).toBeDefined();
        

    });
});