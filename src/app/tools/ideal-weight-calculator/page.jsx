"use client";

import React, { useState } from 'react';
import { Target, Info, ArrowRightLeft } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Label } from '../../../components/ui/label';

const IdealWeightCalculator = () => {
  const [gender, setGender] = useState('male');
  const [unit, setUnit] = useState('ft'); // 'ft' or 'cm'
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [result, setResult] = useState(null);

  const calculateIBW = (e) => {
    e.preventDefault();
    
    let totalInches;
    if (unit === 'ft') {
      totalInches = (parseInt(feet || 0) * 12) + parseInt(inches || 0);
    } else {
      // Convert cm to inches
      totalInches = parseFloat(heightCm) / 2.54;
    }

    const inchesOver5ft = Math.max(0, totalInches - 60);
    
    let ibw;
    if (gender === 'male') {
      ibw = 50 + (2.3 * inchesOver5ft);
    } else {
      ibw = 45.5 + (2.3 * inchesOver5ft);
    }

    setResult(ibw.toFixed(1));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Target className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tight">Ideal Body Weight</h1>
          <p className="text-lg text-gray-600 font-medium italic">What should your healthy weight be?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-sm overflow-hidden">
            <CardHeader className="bg-white border-b border-gray-50">
              <CardTitle className="text-xl font-bold">Calculate Your Target</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={calculateIBW} className="space-y-6">
                
                {/* Gender Description & Toggle */}
                <div className="space-y-2">
                  <Label className="font-bold flex items-center gap-2">
                    1. Select Gender <span className="text-xs font-normal text-gray-400">(Biological sex affects bone density)</span>
                  </Label>
                  <div className="flex gap-4 p-1 bg-gray-100 rounded-md">
                    <button type="button" onClick={() => setGender('male')} className={`flex-1 py-2 rounded-md font-bold transition-all ${gender === 'male' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-500'}`}>Male</button>
                    <button type="button" onClick={() => setGender('female')} className={`flex-1 py-2 rounded-md font-bold transition-all ${gender === 'female' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-500'}`}>Female</button>
                  </div>
                </div>

                {/* Height Unit Toggle */}
                <div className="flex justify-between items-center bg-teal-50 p-3 rounded-md border border-teal-100">
                  <span className="text-sm font-bold text-teal-800">Height in {unit === 'ft' ? 'Feet/Inches' : 'Centimeters'}</span>
                  <button 
                    type="button" 
                    onClick={() => setUnit(unit === 'ft' ? 'cm' : 'ft')}
                    className="flex items-center gap-1 text-[11px] font-black uppercase text-teal-600 bg-white px-2 py-1 rounded border border-teal-200 hover:bg-teal-600 hover:text-white transition-all"
                  >
                    <ArrowRightLeft size={12} /> Switch to {unit === 'ft' ? 'CM' : 'Feet'}
                  </button>
                </div>

                {/* Height Input Section with Descriptions */}
                <div className="space-y-4">
                  <Label className="font-bold">2. Enter Height</Label>
                  {unit === 'ft' ? (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Input type="number" placeholder="Feet" value={feet} onChange={(e) => setFeet(e.target.value)} required />
                        <p className="text-[10px] text-gray-400 italic">Example: 5</p>
                      </div>
                      <div className="space-y-1">
                        <Input type="number" placeholder="Inches" value={inches} onChange={(e) => setInches(e.target.value)} required />
                        <p className="text-[10px] text-gray-400 italic">Example: 7</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <Input type="number" placeholder="CM" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} required />
                      <p className="text-[10px] text-gray-400 italic">Example: 170</p>
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold h-12 shadow-md">
                  Get My Target Weight
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {/* Result Display */}
            {result ? (
              <Card className="bg-white border-2 border-teal-600 shadow-xl overflow-hidden">
                <div className="bg-teal-600 p-3 text-center">
                  <h3 className="text-white font-bold uppercase tracking-widest text-[11px]">Calculated Ideal Weight</h3>
                </div>
                <CardContent className="py-10 text-center">
                  <div className="text-6xl font-black text-teal-600">{result} <span className="text-2xl font-bold">kg</span></div>
                  <p className="mt-4 text-[14px] text-gray-500 font-medium px-4">
                    Based on your height of {unit === 'ft' ? `${feet}ft ${inches}in` : `${heightCm}cm`}.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white border-dashed border-2 border-gray-200 h-[260px] flex flex-col items-center justify-center p-6 text-center">
                <Info className="w-10 h-10 text-gray-300 mb-3" />
                <p className="text-gray-400 font-bold">Enter your height to see your ideal body weight target.</p>
              </Card>
            )}

            {/* Educational Info */}
            <Card className="bg-teal-50 border-none">
              <CardContent className="p-5 space-y-3">
                <h4 className="font-bold text-teal-900 flex items-center gap-2 uppercase text-xs">
                  <Info size={14} /> Understanding the result
                </h4>
                <p className="text-xs text-teal-800 leading-relaxed">
                  The <strong>Devine Formula</strong> is used worldwide by healthcare professionals to estimate ideal body weight for medical purposes. It provides a baseline weight where health risks are statistically lowest.
                </p>
                <ul className="text-[10px] text-teal-700 space-y-1 list-disc pl-4 italic">
                  <li>Muscle mass can increase weight naturally.</li>
                  <li>Bone frame size affects the healthy range.</li>
                  <li>Always consult a doctor before starting a diet.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdealWeightCalculator;