"use client";

import React, { useState } from 'react';
import { Activity, Info, Heart, Zap, Timer, Flame } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Label } from '../../../components/ui/label';

const HeartRateCalculator = () => {
  const [age, setAge] = useState('');
  const [results, setResults] = useState(null);

  const calculateZones = (e) => {
    e.preventDefault();
    const mhr = 220 - parseInt(age);
    
    const zonesData = [
      { name: 'Warm Up', min: 0.5, max: 0.6, color: 'bg-green-500', lightColor: 'bg-green-50', textColor: 'text-green-700', activity: 'Walking, light stretching', benefit: 'Improves health and recovery.' },
      { name: 'Fat Burn', min: 0.6, max: 0.7, color: 'bg-teal-500', lightColor: 'bg-teal-50', textColor: 'text-teal-700', activity: 'Jogging, brisk walking', benefit: 'Optimal for weight management.' },
      { name: 'Aerobic', min: 0.7, max: 0.8, color: 'bg-blue-500', lightColor: 'bg-blue-50', textColor: 'text-blue-700', activity: 'Running, cycling, swimming', benefit: 'Strengthens heart and lungs.' },
      { name: 'Anaerobic', min: 0.8, max: 0.9, color: 'bg-orange-500', lightColor: 'bg-orange-50', textColor: 'text-orange-700', activity: 'Hard running, HIIT', benefit: 'Increases speed and endurance.' },
      { name: 'Max Effort', min: 0.9, max: 1.0, color: 'bg-red-500', lightColor: 'bg-red-50', textColor: 'text-red-700', activity: 'Sprints, heavy lifting', benefit: 'Max performance and power.' }
    ];

    const calculatedZones = zonesData.map(zone => ({
      ...zone,
      range: `${Math.round(mhr * zone.min)} - ${Math.round(mhr * zone.max)}`
    }));

    setResults({ mhr, zones: calculatedZones });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Heart className="w-8 h-8 text-red-600 fill-red-600" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight">Heart Rate Intensity Hub</h1>
          <p className="text-lg text-gray-600 font-medium italic underline decoration-teal-500 decoration-2">Training zones personalized for your heart health</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT: Input Card */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-sm overflow-hidden">
              <CardHeader className="bg-white border-b border-gray-50">
                <CardTitle className="text-xl font-bold">Your Bio-Data</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={calculateZones} className="space-y-6">
                  <div className="space-y-2">
                    <Label className="font-bold text-[10px] uppercase tracking-widest text-gray-500">Your Current Age</Label>
                    <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} required placeholder="e.g. 28" className="mt-1 focus:ring-teal-500 h-12 text-lg font-bold" />
                    <p className="text-[10px] text-gray-400 italic">Used to estimate your Maximum Heart Rate (MHR).</p>
                  </div>
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-black h-12 uppercase tracking-widest shadow-lg transition-transform active:scale-95">
                    Analyze My Zones
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Science Box */}
            <Card className="bg-teal-900 text-white border-none shadow-sm">
              <CardContent className="p-5">
                <h4 className="flex items-center gap-2 font-black text-teal-300 text-[10px] uppercase mb-4 tracking-widest">
                  <Zap size={14} /> The 220-Age Rule
                </h4>
                <p className="text-[11px] font-medium opacity-90 leading-relaxed">
                  This calculator uses the Fox formula to predict your peak intensity. Knowing these zones helps you avoid overtraining and maximizes fat oxidation during workouts.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: Results & Breakdown */}
          <div className="lg:col-span-2 space-y-6">
            {results ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                
                {/* Max Heart Rate Result */}
                <Card className="bg-white border-2 border-teal-600 shadow-xl overflow-hidden">
                  <div className="bg-teal-600 p-3 text-center">
                    <h3 className="text-white text-[10px] font-black uppercase tracking-widest text-teal-50">Estimated Maximum Heart Rate (MHR)</h3>
                  </div>
                  <CardContent className="py-8 text-center bg-teal-50/30">
                    <div className="text-7xl font-black text-teal-700 tracking-tighter">{results.mhr}</div>
                    <p className="font-bold text-teal-600 uppercase text-xs mt-2 tracking-widest">Beats Per Minute</p>
                  </CardContent>
                </Card>

                {/* Zones Grid */}
                <div className="grid gap-4">
                  {results.zones.map((zone, idx) => (
                    <Card key={idx} className="border-none shadow-sm group hover:shadow-md transition-all overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className={`w-2 ${zone.color} shrink-0`} />
                        <div className="flex-1 p-5 grid md:grid-cols-2 gap-4 items-center">
                          <div>
                            <div className="flex items-center gap-2">
                               <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${zone.lightColor} ${zone.textColor}`}>Zone {idx + 1}</span>
                               <h4 className="text-xl font-black text-gray-800 uppercase tracking-tight">{zone.name}</h4>
                            </div>
                            <p className="text-[11px] text-gray-500 font-medium mt-1 leading-relaxed">
                               <strong>Activity:</strong> {zone.activity}
                            </p>
                          </div>
                          <div className="md:text-right flex md:flex-col justify-between items-center md:items-end">
                             <span className="text-3xl font-black text-gray-900 tracking-tighter">{zone.range}</span>
                             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">BPM (Beats Per Min)</span>
                          </div>
                        </div>
                      </div>
                      <div className={`px-5 py-2 ${zone.lightColor} text-[10px] font-bold ${zone.textColor} italic border-t border-white/50`}>
                        <Info size={12} className="inline mr-2" />
                        {zone.benefit}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <Card className="h-[430px] flex flex-col items-center justify-center border-dashed border-2 border-teal-100 bg-white p-12 text-center">
                <Activity className="w-16 h-16 text-teal-50 mb-4 animate-pulse" />
                <h3 className="text-xl font-black text-gray-300 uppercase tracking-tight italic">Waiting for Age Input</h3>
                <p className="text-sm text-gray-400 mt-2">Enter your age to see your personalized training roadmap.</p>
              </Card>
            )}

            {/* Scientific Explanation Card */}
            <Card className="border-none shadow-sm bg-white">
              <CardHeader className="border-b border-gray-50">
                <CardTitle className="text-sm font-black uppercase tracking-widest text-teal-800 flex items-center gap-2">
                   <Timer size={18} /> How to use these zones?
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Flame className="text-orange-500" size={16} />
                      <h5 className="font-bold text-sm">For Weight Loss</h5>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">
                      Spend 60-70% of your workout in <strong>Zone 2 (Fat Burn)</strong>. This is where your body burns the highest percentage of calories from fat.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Timer className="text-blue-500" size={16} />
                      <h5 className="font-bold text-sm">For Endurance</h5>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">
                      Focus on <strong>Zone 3 (Aerobic)</strong> to improve your heart's efficiency and increase your lung capacity for longer runs or rides.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeartRateCalculator;