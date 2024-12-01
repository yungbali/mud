import React from 'react';
interface PropsData {
    data: string;
    error: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleSubmit: () => Promise<void>;
    loading: boolean;
    prompt: {
        artist_name: string;
        biography: string;
        genre: string;
        profile_picture: FileList | null;
        music_links: string;
        social_media: string;
        press_release_news: string;
        achievements: string;
        contact_information: string;
    };
}
declare const EpkGenerationForm: ({ loading, handleInputChange, handleSubmit, prompt }: PropsData) => import("react/jsx-runtime").JSX.Element;
export default EpkGenerationForm;
