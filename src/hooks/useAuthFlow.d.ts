import { signOut } from 'aws-amplify/auth';
export declare function useAuthFlow(): {
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    signOut: typeof signOut;
    loading: boolean;
    error: string;
};
