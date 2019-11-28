export interface IUser {
	id: string;
	Email: string;
	FirstName: string;
	LastName: string;
	Initials: string;
	Title: string;
	Address: string;
	City: string;
	Region: string;
	PostalCode: string;
	HomePhone: string;
	CellPhone: string;
	BirthDate: Date;
	HireDate: Date;
	EmergencyName: string;
	EmergencyPhone: string;
	Notes: string;
	Active: boolean;
	Image: string;
	Roles: Array<string>;
}
