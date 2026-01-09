"use client";

import React, { useState } from 'react';
import { Baby, Info } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Label } from '../../../components/ui/label';

const DueDateCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState('');
  const [result, setResult] = useState(null);

  const calculateDueDate = (e) => {
    e.preventDefault();
    const lmp = new Date(lastPeriod);
    
    // Logic: LMP + 280 days (40 weeks)
    const dueDate = new Date(lmp);
    dueDate.setDate(lmp.getDate() + 280);

    // Current Progress
    const today = new Date();
    const diffTime = Math.abs(today - lmp);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);
    const days = diffDays % 7;

    setResult({
      date: dueDate.toDateString(),
      progress: `${weeks} Weeks, ${days} Days`
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <Baby className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-2 uppercase">Due Date Calculator</h1>
          <p className="text-gray-600">Find out your baby's expected arrival date</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-sm">
            <CardHeader><CardTitle>Pregnancy Details</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={calculateDueDate} className="space-y-6">
                <div>
                  <Label className="font-bold">First Day of Last Period (LMP)</Label>
                  <Input type="date" value={lastPeriod} onChange={(e) => setLastPeriod(e.target.value)} required className="mt-2" />
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold h-12">Calculate Due Date</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {result ? (
              <Card className="bg-purple-600 text-white border-none shadow-lg">
                <CardContent className="py-10 text-center">
                  <p className="text-purple-100 text-sm font-bold uppercase mb-2">Estimated Due Date</p>
                  <div className="text-4xl font-black mb-4">{result.date}</div>
                  <div className="inline-block px-4 py-2 bg-purple-500 rounded-full text-sm font-bold">
                    Current Progress: {result.progress}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center border-dashed border-2 text-gray-400 font-bold p-10">
                Enter LMP to see due date
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DueDateCalculator;