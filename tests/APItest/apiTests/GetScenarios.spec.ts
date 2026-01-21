import { test, expect } from '@playwright/test';
import { ObjectController } from '../controller/ObjectController';
import { EmployeeListResponse } from '../models/Response';
import { SingleEmployeeResponse } from '../models/Response';

test.describe('Restful API - Employee List', () => {
    
    test('Employee list successfully retrieved', async ({ request }) => {
        const objectController = new ObjectController(request);

        // 1. Request verisini hazırla (Request Modeline uygun)

        // 2. Servis çağrısını yap
        const response = await objectController.getEmployeeList();
        
        // 3. HTTP durum kodunu kontrol et
        expect(response.status()).toBe(200);

        // 4. Response body'sini modelle (Response Modeline cast et)
        const responseBody: EmployeeListResponse = await response.json();
        console.log(responseBody);

        // 5. Assertions (Doğrulamalar)
        expect(responseBody.status).toBe('success');
        expect(responseBody.data[0].employee_name).toBe('Tiger Nixon');
        

    });

    test('system can handle single employee retrieval', async ({ request }) => {
        const objectController = new ObjectController(request);

        // 1. Request verisini hazırla (Request Modeline uygun)

        // 2. Servis çağrısını yap
        const response = await objectController.getSingleEmployee(2);

        // 3. HTTP durum kodunu kontrol et
        expect(response.status()).toBe(200);

        // 4. Response body'sini modelle (Response Modeline cast et)
        const responseBody: SingleEmployeeResponse = await response.json();
        console.log(responseBody);

        // 5. Assertions (Doğrulamalar)
        expect(responseBody.status).toBe('success');
        expect(responseBody.data.employee_name).toBe('Garrett Winters');
        expect(responseBody.data.employee_salary).toBe('170750');
        expect(responseBody.data.employee_age).toBe('63');
        expect(responseBody.data.profile_image).toBe('');
    });
});