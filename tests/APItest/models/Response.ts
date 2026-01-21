import { CreateUserRequest } from "./Request"  

export interface CreateUserResponse{
    status : string;
    data : UserData;
} 

export interface UserData extends CreateUserRequest{
    id : number;
}
export interface Employee {
    id: string;
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    profile_image: string;
}

export interface EmployeeListResponse {
    status: string;
    data: Employee[]; // Burada diziyi (array) tanımlıyoruz
}

export interface SingleEmployeeResponse {
    status: string;
    data: Employee;
}

export interface DeleteEmployeeResponse {
    status: string;
    message: string;
}