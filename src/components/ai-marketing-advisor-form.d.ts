import React from 'react';
interface PropsData {
    data: string;
    error: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleSlectInputChange: (value: string) => void;
    handleSubmit: () => Promise<void>;
    loading: boolean;
    prompt: {
        band_name: string;
        genre: string;
        target_audience: string;
        current_followers: string;
        streams: string;
        budget: string;
        advice: string;
    };
}
declare const AiMarketingAdvisorForm: ({ loading, handleInputChange, handleSlectInputChange, handleSubmit, prompt }: PropsData) => import("react/jsx-runtime").JSX.Element;
export default AiMarketingAdvisorForm;
