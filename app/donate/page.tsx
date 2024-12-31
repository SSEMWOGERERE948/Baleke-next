"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { auth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function DonatePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleDonation = async () => {
    // Here you would integrate with your payment processor (e.g., Stripe)
    console.log('Processing donation:', { amount, paymentMethod });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center">
        <Card className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Sign in to Donate</h2>
          <p className="text-gray-600 text-center mb-8">
            Please sign in with your Google account to proceed with your donation.
          </p>
          <Button
            onClick={handleGoogleSignIn}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Sign in with Google
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="max-w-md mx-auto">
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">Make a Donation</h2>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="amount">Donation Amount ($)</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="mt-1"
              />
            </div>

            <div>
              <Label>Payment Method</Label>
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card">Credit/Debit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
              </RadioGroup>
            </div>

            <Button
              onClick={handleDonation}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Complete Donation
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}