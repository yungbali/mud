'use client'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthFlow } from '../hooks/useAuthFlow';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Alert, AlertDescription } from './ui/alert';
import { LucideLoaderCircle } from 'lucide-react';

export default function LoginScreen() {
  const { login, loading, error } = useAuthFlow();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(formData.email, formData.password);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-3xl text-[#8A4757] font-bold text-center">Musette</h1>
          <Card className="border-0 shadow-xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
              <CardDescription className="text-center">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    required
                    className="border-gray-300"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#8A4757] hover:bg-[#9D5465]"
                  disabled={loading}
                >
                  {loading ? (
                    <LucideLoaderCircle className="animate-spin mr-2" />
                  ) : null}
                  Sign In
                </Button>
              </form>
              <div className="text-center mt-4">
                <span className="text-sm text-gray-600">Don't have an account? </span>
                <Link to="/signup" className="text-[#8A4757] hover:underline font-medium">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right side - Image */}
      <div 
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/placeholder.svg")',
          backgroundColor: '#F5F5F5',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="h-full w-full bg-gradient-to-br from-[#8A4757]/30 to-transparent backdrop-blur-sm">
          <div className="flex flex-col justify-center items-center h-full text-white p-8">
            <h2 className="text-4xl font-bold mb-4">Welcome to Musette</h2>
            <p className="text-xl text-center max-w-md">
              Your all-in-one platform for music marketing and promotion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}