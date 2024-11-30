import { useState } from 'react';
import { useUserProfile } from '../hooks/useUserProfile';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Alert, AlertDescription } from './ui/alert';
import { LucideLoaderCircle } from 'lucide-react';
import type { ArtistInput } from '../types/marketing';

export default function ProfileManagement() {
  const { profile, loading, error, updateProfile } = useUserProfile();
  const [formData, setFormData] = useState<ArtistInput>({
    name: [''],
    genre: [''],
    targetAudience: [''],
    biography: [''],
    socialMediaLinks: [''],
    musicLinks: [''],
    achievements: [''],
    contactInformation: [''],
    followers: ['0'],
    monthlyStreams: ['0'],
    marketingBudget: ['0']
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: [value]
    }));
  };

  const handleSubmit = async () => {
    try {
      await updateProfile(formData);
    } catch (err) {
      console.error('Failed to update profile:', err);
    }
  };

  if (loading) {
    return <div className="flex justify-center"><LucideLoaderCircle className="animate-spin" /></div>;
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Artist Profile</CardTitle>
        <CardDescription>Manage your artist information</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="name">Artist Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="genre">Genre</Label>
            <Input
              id="genre"
              value={formData.genre}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetAudience">Target Audience</Label>
            <Input
              id="targetAudience"
              value={formData.targetAudience}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="biography">Biography</Label>
            <Textarea
              id="biography"
              value={formData.biography}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="socialMediaLinks">Social Media Links</Label>
            <Textarea
              id="socialMediaLinks"
              value={formData.socialMediaLinks}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="musicLinks">Music Links</Label>
            <Textarea
              id="musicLinks"
              value={formData.musicLinks}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="achievements">Achievements</Label>
            <Textarea
              id="achievements"
              value={formData.achievements}
              onChange={handleInputChange}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <LucideLoaderCircle className="animate-spin mr-2" />
            ) : null}
            Save Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 