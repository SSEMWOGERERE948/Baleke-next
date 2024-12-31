"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useRouter } from 'next/navigation';

export default function DonatePage() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const router = useRouter();

  const handleDonation = async () => {
    // Here you would integrate with your payment processor (e.g., Stripe, PayPal)
    console.log('Processing donation:', { amount, paymentMethod });
    alert(`Thank you for your donation of $${amount}!`);
  };

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
