import React from 'react';
interface PropsData {
    data: string;
    error: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleSubmit: () => Promise<void>;
    loading: boolean;
    prompt: {
        goals: string;
        artist_name: string;
        genre: string;
        target_audience: string;
        additional_information: string;
        assets: string;
        budget: string;
        channels: string;
        timeline: string;
    };
}
declare const MarketingPlansForm: ({ loading, handleInputChange, handleSubmit, prompt }: PropsData) => import("react/jsx-runtime").JSX.Element;
export default MarketingPlansForm;
