"use client";

import React, { useState } from 'react';
import { Droplets, Info, GlassWater, Trophy, CheckCircle2, Waves } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Label } from '../../../components/ui/label';

const WaterCalculator = () => {
  const [weight, setWeight] = useState('');
  const [exercise, setExercise] = useState('0');
  const [climate, setClimate] = useState('moderate');
  const [glassSize, setGlassSize] = useState('250'); 
  const [result, setResult] = useState(null);

  const calculateWater = (e) => {
    e.preventDefault();
    let liters = parseFloat(weight) * 0.033;
    liters += (parseInt(exercise) / 30) * 0.35;
    if (climate === 'hot') liters += 0.5;

    setResult({
      liters: liters.toFixed(1),
      glasses: Math.round(liters / (parseInt(glassSize) / 1000)),
      morning: (liters * 0.2).toFixed(1),
      afternoon: (liters * 0.5).toFixed(1),
      evening: (liters * 0.3).toFixed(1)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Teal Theme */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center animate-pulse">
              <Droplets className="w-8 h-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tight">
            Smart Hydration Tracker
          </h1>
          <p className="text-lg text-gray-600 font-medium italic">
            Personalized daily water goals for peak physical performance
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT: Input Form */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-sm overflow-hidden">
              <CardHeader className="bg-white border-b border-gray-50">
                <CardTitle className="text-xl font-bold text-gray-800">Hydration Profile</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={calculateWater} className="space-y-6">
                  <div>
                    <Label className="font-bold text-gray-700 uppercase text-[10px] tracking-widest">Your Weight (kg)</Label>
                    <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required placeholder="e.g. 75" className="mt-2 focus:ring-teal-500" />
                  </div>
                  <div>
                    <Label className="font-bold text-gray-700 uppercase text-[10px] tracking-widest">Exercise (Min/Day)</Label>
                    <Input type="number" value={exercise} onChange={(e) => setExercise(e.target.value)} required className="mt-2 focus:ring-teal-500" />
                  </div>
                  <div>
                    <Label className="font-bold text-gray-700 uppercase text-[10px] tracking-widest">Glass Size</Label>
                    <select className="w-full mt-2 p-2.5 bg-white border border-gray-200 rounded-md text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-teal-500" value={glassSize} onChange={(e) => setGlassSize(e.target.value)}>
                      <option value="250">Standard (250ml)</option>
                      <option value="330">Large (330ml)</option>
                      <option value="500">Bottle (500ml)</option>
                    </select>
                  </div>
                  <div>
                    <Label className="font-bold text-gray-700 uppercase text-[10px] tracking-widest">Climate</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <button type="button" onClick={() => setClimate('moderate')} className={`py-2 rounded-md font-black text-[10px] uppercase border transition-all ${climate === 'moderate' ? 'bg-teal-600 text-white border-teal-600 shadow-md' : 'bg-white text-gray-400 border-gray-100 hover:bg-gray-50'}`}>Moderate</button>
                      <button type="button" onClick={() => setClimate('hot')} className={`py-2 rounded-md font-black text-[10px] uppercase border transition-all ${climate === 'hot' ? 'bg-orange-500 text-white border-orange-500 shadow-md' : 'bg-white text-gray-400 border-gray-100 hover:bg-gray-50'}`}>Hot / Humid</button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-black h-12 uppercase tracking-widest transition-all shadow-lg active:scale-95">
                    Generate Water Plan
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-teal-900 text-white border-none shadow-sm">
              <CardContent className="p-5">
                <h4 className="flex items-center gap-2 font-black text-teal-300 text-[10px] uppercase mb-3 tracking-widest">
                   <Waves size={14} /> Hydration Insight
                </h4>
                <p className="text-[12px] leading-relaxed opacity-90 font-medium">
                  Dehydration can lead to fatigue, headaches, and decreased focus. Proper hydration keeps your organs running at 100%.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: Results & Schedule */}
          <div className="lg:col-span-2 space-y-6">
            {result ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Total Goal Card - MediLAB Teal */}
                  <Card className="bg-teal-600 text-white border-none shadow-xl overflow-hidden md:col-span-2">
                    <div className="bg-teal-700/50 p-3 text-center">
                      <h3 className="text-[10px] font-black uppercase tracking-widest">Daily Hydration Goal</h3>
                    </div>
                    <CardContent className="py-10 flex flex-col items-center justify-center">
                      <div className="flex items-baseline gap-2">
                        <span className="text-7xl font-black tracking-tighter">{result.liters}</span>
                        <span className="text-2xl font-bold text-teal-200">L / Day</span>
                      </div>
                      <div className="mt-6 flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full border border-white/20">
                        <GlassWater className="w-5 h-5 text-teal-200" />
                        <span className="font-black text-sm uppercase">Approx. {result.glasses} Glasses</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Schedule Breakdown */}
                  <Card className="border-none shadow-sm bg-white border-l-4 border-teal-500">
                    <CardHeader className="pb-2"><CardTitle className="text-[11px] font-black uppercase tracking-wider text-teal-900 flex items-center gap-2"><Trophy size={14} className="text-teal-600"/> Intake Guide</CardTitle></CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-teal-50/50 rounded border border-teal-100/50">
                        <span className="text-[10px] font-black text-gray-500 uppercase">Morning</span>
                        <span className="font-black text-teal-700">{result.morning}L</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-teal-50/50 rounded border border-teal-100/50">
                        <span className="text-[10px] font-black text-gray-500 uppercase">Afternoon</span>
                        <span className="font-black text-teal-700">{result.afternoon}L</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-teal-50/50 rounded border border-teal-100/50">
                        <span className="text-[10px] font-black text-gray-500 uppercase">Evening</span>
                        <span className="font-black text-teal-700">{result.evening}L</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Health Benefits Grid */}
                  <Card className="border-none shadow-sm bg-white">
                    <CardHeader className="pb-2"><CardTitle className="text-[11px] font-black uppercase tracking-wider text-teal-900 flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-600"/> Benefits</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                      {['Clear Skin', 'Mental Focus', 'Weight Control', 'Muscle Prep'].map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2 text-[11px] font-black text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500" /> {benefit}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <Card className="h-[430px] flex flex-col items-center justify-center border-dashed border-2 border-teal-100 bg-white p-12 text-center">
                <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                  <Waves className="w-10 h-10 text-teal-200 animate-pulse" />
                </div>
                <h3 className="text-xl font-black text-gray-400 uppercase tracking-tight">Personalized Plan</h3>
                <p className="text-sm text-gray-400 mt-2 max-w-xs font-medium italic">"Water is the driving force of all nature." - Leonardo da Vinci</p>
              </Card>
            )}

            {/* Medical Reference Box */}
            <Card className="border-none shadow-sm bg-teal-50">
              <CardContent className="p-5 flex gap-4">
                <Info className="text-teal-600 shrink-0 mt-1" size={20} />
                <div className="space-y-1">
                   <h5 className="font-black text-teal-900 text-[10px] uppercase tracking-widest">Medical Disclaimer</h5>
                   <p className="text-[11px] text-teal-800 leading-relaxed font-medium">
                     Hydration needs vary based on age, metabolism, and activity. This calculator uses a baseline weight-to-volume formula. Consult a healthcare provider if you have kidney or cardiac conditions.
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

export default WaterCalculator;