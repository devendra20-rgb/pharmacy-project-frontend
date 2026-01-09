"use client";

import React, { useState } from 'react';
import { Ruler, Info, AlertTriangle, CheckCircle2, helpCircle } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Label } from '../../../components/ui/label';

const WHRCalculator = () => {
  const [gender, setGender] = useState('male');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [result, setResult] = useState(null);

  const calculateWHR = (e) => {
    e.preventDefault();
    const ratio = (parseFloat(waist) / parseFloat(hip)).toFixed(2);
    
    let risk = '';
    let color = '';
    if (gender === 'male') {
      if (ratio <= 0.90) { risk = 'Low Risk'; color = 'bg-green-500'; }
      else if (ratio <= 0.95) { risk = 'Moderate Risk'; color = 'bg-yellow-500'; }
      else { risk = 'High Risk'; color = 'bg-red-500'; }
    } else {
      if (ratio <= 0.80) { risk = 'Low Risk'; color = 'bg-green-500'; }
      else if (ratio <= 0.85) { risk = 'Moderate Risk'; color = 'bg-yellow-500'; }
      else { risk = 'High Risk'; color = 'bg-red-500'; }
    }
    setResult({ ratio, risk, color });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Ruler className="w-8 h-8 text-teal-600" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight">Waist-to-Hip Ratio</h1>
          <p className="text-lg text-gray-600 mt-2 font-medium italic underline decoration-teal-500 decoration-2">Measuring abdominal obesity and health risks</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT: Input Form */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-sm overflow-hidden">
              <CardHeader className="bg-white border-b border-gray-50">
                <CardTitle className="text-xl font-bold text-gray-800">Your Metrics</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={calculateWHR} className="space-y-6">
                  <div className="flex gap-4 p-1 bg-gray-100 rounded-md">
                    <button type="button" onClick={() => setGender('male')} className={`flex-1 py-2 rounded-md font-black text-xs uppercase transition-all ${gender === 'male' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-500'}`}>Male</button>
                    <button type="button" onClick={() => setGender('female')} className={`flex-1 py-2 rounded-md font-black text-xs uppercase transition-all ${gender === 'female' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-500'}`}>Female</button>
                  </div>
                  <div>
                    <Label className="font-bold text-[10px] uppercase tracking-widest text-gray-500">Waist (inches/cm)</Label>
                    <Input type="number" step="0.1" value={waist} onChange={(e) => setWaist(e.target.value)} required placeholder="Narrowest part" className="mt-2 focus:ring-teal-500" />
                  </div>
                  <div>
                    <Label className="font-bold text-[10px] uppercase tracking-widest text-gray-500">Hip (inches/cm)</Label>
                    <Input type="number" step="0.1" value={hip} onChange={(e) => setHip(e.target.value)} required placeholder="Widest part" className="mt-2 focus:ring-teal-500" />
                  </div>
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-black h-12 uppercase tracking-widest shadow-lg transition-transform active:scale-95">
                    Calculate Now
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Measuring Guide Section */}
            <Card className="bg-teal-900 text-white border-none shadow-sm">
              <CardContent className="p-5">
                <h4 className="flex items-center gap-2 font-black text-teal-300 text-[10px] uppercase mb-4 tracking-widest">
                  <Info size={14} /> How to measure?
                </h4>
                <ul className="text-[11px] space-y-3 font-medium opacity-90 leading-relaxed">
                  <li className="flex gap-2"><strong>Waist:</strong> Measure at the narrowest point of your torso, usually just above the belly button.</li>
                  <li className="flex gap-2"><strong>Hip:</strong> Measure around the widest part of your buttocks with heels together.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: Results & Interpretation */}
          <div className="lg:col-span-2 space-y-6">
            {result ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Card className="bg-white border-2 border-teal-600 shadow-xl overflow-hidden mb-6">
                  <div className="bg-teal-600 p-3 text-center">
                    <h3 className="text-white text-[10px] font-black uppercase tracking-widest">Calculated Ratio</h3>
                  </div>
                  <CardContent className="py-10 text-center">
                    <div className="text-7xl font-black text-teal-700 tracking-tighter mb-4">{result.ratio}</div>
                    <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full font-black uppercase text-xs text-white shadow-md ${result.color}`}>
                       {result.risk === 'Low Risk' ? <CheckCircle2 size={14}/> : <AlertTriangle size={14}/>}
                       {result.risk}
                    </div>
                  </CardContent>
                </Card>

                {/* Risk Breakdown Table */}
                <Card className="border-none shadow-sm bg-white overflow-hidden">
                  <CardHeader className="pb-2 border-b border-gray-50">
                    <CardTitle className="text-[11px] font-black uppercase tracking-widest text-gray-400">Health Risk Thresholds ({gender})</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-3 text-center divide-x divide-gray-100">
                      <div className={`p-4 ${gender === 'male' ? 'bg-green-50' : 'bg-green-50'}`}>
                        <p className="text-[10px] font-black text-green-700 uppercase">Low Risk</p>
                        <p className="text-lg font-black text-green-800 mt-1">{gender === 'male' ? '≤ 0.90' : '≤ 0.80'}</p>
                      </div>
                      <div className={`p-4 ${gender === 'male' ? 'bg-yellow-50' : 'bg-yellow-50'}`}>
                        <p className="text-[10px] font-black text-yellow-700 uppercase">Moderate</p>
                        <p className="text-lg font-black text-yellow-800 mt-1">{gender === 'male' ? '0.91 - 0.95' : '0.81 - 0.85'}</p>
                      </div>
                      <div className={`p-4 ${gender === 'male' ? 'bg-red-50' : 'bg-red-50'}`}>
                        <p className="text-[10px] font-black text-red-700 uppercase">High Risk</p>
                        <p className="text-lg font-black text-red-800 mt-1">{gender === 'male' ? '> 0.95' : '> 0.85'}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="h-[430px] flex flex-col items-center justify-center border-dashed border-2 border-teal-100 bg-white p-12 text-center">
                <Ruler className="w-16 h-16 text-teal-50 mb-4 animate-pulse" />
                <h3 className="text-xl font-black text-gray-300 uppercase tracking-tight italic">Waiting for Measurements</h3>
              </Card>
            )}

            {/* Medical Context Section */}
            <Card className="border-none shadow-sm bg-teal-50">
              <CardContent className="p-6 flex gap-4">
                <Info className="text-teal-600 shrink-0 mt-1" size={24} />
                <div className="space-y-3">
                   <h5 className="font-black text-teal-900 text-xs uppercase tracking-widest">Why WHR is a powerful tool?</h5>
                   <p className="text-xs text-teal-800 leading-relaxed font-medium italic">
                     Research by the <strong>World Health Organization (WHO)</strong> suggests that weight carried around the abdomen (Apple-shaped) is a significant predictor of cardiovascular diseases and metabolic disorders compared to weight carried on the hips (Pear-shaped).
                   </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WHRCalculator;