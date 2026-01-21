import { test, expect } from '@playwright/test';
import { ObjectController } from '../controller/ObjectController';
import { DeleteEmployeeResponse } from '../models/Response';

test.describe('Restful API - User Delete', () => {
    
    test('Kullanıcı başarıyla silinebilmeli', async ({ request }) => {
        const objectController = new ObjectController(request);

        // 1. Servis çağrısını yap
        const response = await objectController.deleteEmployee(2);

        // 2. HTTP durum kodunu kontrol et
        expect(response.status()).toBe(200);

        // 3. Response body'sini modelle (Response Modeline cast et)
        const responseBody: DeleteEmployeeResponse = await response.json();
        console.log(responseBody);

        // 4. Assertions (Doğrulamalar)
        expect(responseBody.status).toBe('success');
        expect(responseBody.message).toBe('Successfully! Record has been deleted');
    });
});