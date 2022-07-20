export class EmployeeBean {
    reset() {
      throw new Error('Method not implemented.');
    }
    public employeeId: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public phoneNumber: number;
    public hireDate: Date;
    public salary: number;
    public jobId: string;
    public managerId: number;
    public departmentId: number;

    constructor(employeeId: number, firstName: string, lastName: string, email: string, phoneNumber: number, 
        hireDate: Date, salary: number, jobId: string,  managerId: number, departmentId: number) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.hireDate = hireDate;
        this.salary = salary;
        this.jobId = jobId;
        this.managerId = managerId;
        this.departmentId = departmentId;
    }
}