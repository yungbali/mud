import { type SignUpInput } from 'aws-amplify/auth';
export declare function useAuth(): {
    user: any;
    loading: boolean;
    error: string;
    login: (username: string, password: string) => Promise<void>;
    register: (input: SignUpInput) => Promise<void>;
    logout: () => Promise<void>;
    checkUser: () => Promise<void>;
};
