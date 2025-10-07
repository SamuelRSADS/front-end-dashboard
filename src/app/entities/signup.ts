export interface SignupPayload {
    name: string;
    nameComplement?: string;
    email: string;
    password: string;
    zipCode: string;
    address: string;
    number: string;
    city: string;
    state: string;
    addressComplement?: string;
    phone: string;
  }