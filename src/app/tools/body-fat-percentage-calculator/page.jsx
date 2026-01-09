"use client";

import React, { useState } from 'react';
import { Fingerprint, Info, Activity, AlertCircle } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Label } from '../../../components/ui/label';

const BodyFatCalculator = () => {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [hip, setHip] = useState(''); // Only for females
  const [result, setResult] = useState(null);

  const calculateBodyFat = (e) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(waist);
    const n = parseFloat(neck);
    const hp = parseFloat(hip);

    let fatPercent;
    if (gender === 'male') {
      // US Navy Formula for Men (using cm)
      fatPercent = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      // US Navy Formula for Women (using cm)
      fatPercent = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.221 * Math.log10(h)) - 450;
    }

    const fatMass = ((parseFloat(fatPercent) / 100) * 70).toFixed(1); // Example weight 70kg for mass
    
    let category = '';
    if (gender === 'male') {
      if (fatPercent < 6) category = 'Essential Fat';
      else if (fatPercent < 14) category = 'Athlete';
      else if (fatPercent < 18) category = 'Fitness';
      else if (fatPercent < 25) category = 'Average';
      else category = 'Obese';
    } else {
      if (fatPercent < 13) category = 'Essential Fat';
      else if (fatPercent < 21) category = 'Athlete';
      else if (fatPercent < 25) category = 'Fitness';
      else if (fatPercent < 32) category = 'Average';
      else category = 'Obese';
    }

    setResult({ percent: fatPercent.toFixed(1), category });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Fingerprint className="w-8 h-8 text-teal-600" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 uppercase">Body Fat Percentage</h1>
          <p className="text-gray-600 mt-2 font-medium italic">U.S. Navy Method: Precision tracking for fitness goals</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card className="border-none shadow-sm">
            <CardHeader className="border-b border-gray-50">
              <CardTitle className="text-xl font-bold">Input Measurements (cm)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={calculateBodyFat} className="space-y-6">
                <div className="flex gap-4 p-1 bg-gray-100 rounded-md">
                  <button type="button" onClick={() => {setGender('male'); setResult(null);}} className={`flex-1 py-2 rounded-md font-bold transition-all ${gender === 'male' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-500'}`}>Male</button>
                  <button type="button" onClick={() => {setGender('female'); setResult(null);}} className={`flex-1 py-2 rounded-md font-bold transition-all ${gender === 'female' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-500'}`}>Female</button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label className="font-bold text-[10px] uppercase">Height (cm)</Label>
                    <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required placeholder="e.g. 175" />
                  </div>
                  <div className="space-y-1">
                    <Label className="font-bold text-[10px] uppercase">Neck (cm)</Label>
                    <Input type="number" value={neck} onChange={(e) => setNeck(e.target.value)} required placeholder="Below Adam's apple" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label className="font-bold text-[10px] uppercase">Waist (cm)</Label>
                    <Input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} required placeholder="At navel" />
                  </div>
                  {gender === 'female' && (
                    <div className="space-y-1">
                      <Label className="font-bold text-[10px] uppercase">Hips (cm)</Label>
                      <Input type="number" value={hip} onChange={(e) => setHip(e.target.value)} required placeholder="Widest part" />
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-black h-12 uppercase tracking-widest shadow-lg">Calculate Fat %</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {result ? (
              <Card className="bg-teal-600 text-white border-none shadow-xl overflow-hidden">
                <div className="bg-teal-700 p-3 text-center uppercase text-[10px] font-black tracking-widest">Your Body Composition</div>
                <CardContent className="py-10 text-center">
                  <div className="text-7xl font-black mb-2">{result.percent}%</div>
                  <p className="text-xl font-bold text-teal-100 uppercase tracking-tight">{result.category}</p>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-[300px] flex flex-col items-center justify-center border-dashed border-2 border-gray-200 p-10 text-center">
                <Activity className="w-12 h-12 text-gray-200 mb-4" />
                <p className="text-gray-400 font-bold italic">Measure yourself with a tape and enter the values to see your body fat percentage.</p>
              </Card>
            )}

            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-5 space-y-4">
                <h4 className="font-black text-teal-800 text-xs uppercase flex items-center gap-2">
                  <Info size={16} /> Measurement Guide
                </h4>
                <div className="text-[11px] text-gray-600 space-y-2 leading-relaxed font-medium">
                  <p><strong>Waist:</strong> Measure at the horizontal level of the navel for men, and at the smallest point for women.</p>
                  <p><strong>Neck:</strong> Measure below the larynx (Adam's apple), sloping slightly downward to the front.</p>
                  <p><strong>Hips (Women only):</strong> Measure at the largest horizontal circumference of the buttocks.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyFatCalculator;