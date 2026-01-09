"use client";

import React, { useState } from 'react';
import { Calendar, Info, Heart, Baby, Activity } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Label } from '../../../components/ui/label';

const OvulationCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState('');
  const [cycleLength, setCycleLength] = useState('28');
  const [results, setResults] = useState(null);

  const calculateOvulation = (e) => {
    e.preventDefault();
    const start = new Date(lastPeriod);
    const length = parseInt(cycleLength);

    const ovulationDay = new Date(start);
    ovulationDay.setDate(start.getDate() + (length - 14));

    const fertileStart = new Date(ovulationDay);
    fertileStart.setDate(ovulationDay.getDate() - 3);

    const fertileEnd = new Date(ovulationDay);
    fertileEnd.setDate(ovulationDay.getDate() + 1);

    const nextPeriod = new Date(start);
    nextPeriod.setDate(start.getDate() + length);

    setResults({
      ovulationDay: ovulationDay.toDateString(),
      fertileWindow: `${fertileStart.toDateString()} - ${fertileEnd.toDateString()}`,
      nextPeriod: nextPeriod.toDateString(),
      follicularPhase: `${start.toDateString()} - ${new Date(ovulationDay.getTime() - 86400000).toDateString()}`,
      lutealPhase: `${new Date(ovulationDay.getTime() + 86400000).toDateString()} - ${new Date(nextPeriod.getTime() - 86400000).toDateString()}`
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
              <Calendar className="w-8 h-8 text-pink-600" />
            </div>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tight">Ovulation & Fertility Tracker</h1>
          <p className="text-lg text-gray-600 font-medium">Advanced medical cycle tracking for reproductive health</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT: Input Form */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-sm">
              <CardHeader className="bg-white border-b border-gray-50">
                <CardTitle className="text-xl font-bold">Cycle Details</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={calculateOvulation} className="space-y-6">
                  <div>
                    <Label className="font-bold text-gray-700">Last Period Start Date</Label>
                    <Input type="date" value={lastPeriod} onChange={(e) => setLastPeriod(e.target.value)} required className="mt-2" />
                    <p className="text-[10px] text-gray-400 mt-1 italic">When your last bleeding began</p>
                  </div>
                  <div>
                    <Label className="font-bold text-gray-700">Cycle Length (Days)</Label>
                    <Input type="number" min="20" max="45" value={cycleLength} onChange={(e) => setCycleLength(e.target.value)} required className="mt-2" />
                    <p className="text-[10px] text-gray-400 mt-1 italic">Average time between periods (Standard: 28)</p>
                  </div>
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-black h-12 uppercase tracking-widest transition-all">
                    Calculate Cycle
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Conception Tips Card */}
            <Card className="bg-pink-50 border-none">
              <CardContent className="p-5">
                <h4 className="flex items-center gap-2 font-black text-pink-800 text-xs uppercase mb-3">
                  <Baby size={16} /> Conception Chance
                </h4>
                <ul className="text-xs text-pink-900 space-y-2 font-medium">
                  <li className="flex gap-2"><span>•</span> <strong>High:</strong> During your fertile window (5 days).</li>
                  <li className="flex gap-2"><span>•</span> <strong>Peak:</strong> 24 hours before & day of ovulation.</li>
                  <li className="flex gap-2"><span>•</span> <strong>Low:</strong> Outside fertile window.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: Results & Medical Breakdown */}
          <div className="lg:col-span-2 space-y-6">
            {results ? (
              <>
                {/* Main Prediction Card */}
                <Card className="bg-teal-600 text-white border-none shadow-xl overflow-hidden">
                  <div className="bg-teal-700 p-3 text-center">
                    <h3 className="text-[10px] font-black uppercase tracking-widest">Calculated Fertile Window</h3>
                  </div>
                  <CardContent className="py-8 grid md:grid-cols-2 gap-8 text-center items-center">
                    <div className="border-r border-teal-500/50">
                      <p className="text-teal-100 text-[10px] font-black uppercase">Ovulation Day</p>
                      <p className="text-3xl font-black mt-1">{results.ovulationDay}</p>
                    </div>
                    <div>
                      <p className="text-teal-100 text-[10px] font-black uppercase">Next Period Due</p>
                      <p className="text-2xl font-black mt-1">{results.nextPeriod}</p>
                    </div>
                  </CardContent>
                  <div className="bg-teal-800 p-4 text-center">
                    <p className="text-sm font-bold">Fertile Window: <span className="underline decoration-pink-400 decoration-2">{results.fertileWindow}</span></p>
                  </div>
                </Card>

                {/* Medical Phases */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-none shadow-sm bg-blue-50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-black text-blue-900 uppercase">Follicular Phase</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[11px] font-bold text-blue-700 mb-2">{results.follicularPhase}</p>
                      <p className="text-xs text-blue-800 leading-relaxed">Your body prepares to release an egg. Estrogen levels rise during this time.</p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-sm bg-orange-50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-black text-orange-900 uppercase">Luteal Phase</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[11px] font-bold text-orange-700 mb-2">{results.lutealPhase}</p>
                      <p className="text-xs text-orange-800 leading-relaxed">Progesterone increases to prepare the uterine lining for potential pregnancy.</p>
                    </CardContent>
                  </Card>
                </div>
              </>
            ) : (
              <Card className="h-[400px] flex flex-col items-center justify-center border-dashed border-2 border-gray-200 p-12 text-center">
                <Activity className="w-16 h-16 text-gray-200 mb-4 animate-pulse" />
                <h3 className="text-xl font-bold text-gray-400">Awaiting Cycle Data</h3>
                <p className="text-sm text-gray-400 mt-2 max-w-sm">Please enter your last period date and cycle length to generate your personalized fertility calendar.</p>
              </Card>
            )}

            {/* Educational Reference */}
            <Card className="border-none shadow-sm">
              <CardHeader className="border-b border-gray-50 flex flex-row items-center gap-2">
                <Heart className="text-pink-600" size={20} />
                <CardTitle className="text-lg">Cycle Science & Tracking</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ovulation typically occurs **14 days before** your next period begins. However, the exact timing can vary based on your cycle length and hormonal balance.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">
                    <p className="font-black text-gray-900 text-[10px] uppercase mb-1">Standard Cycle</p>
                    <p className="text-[11px] text-gray-600 font-medium italic">28 days is standard, but 21-35 days is considered normal for adults.</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">
                    <p className="font-black text-gray-900 text-[10px] uppercase mb-1">Fertile Window</p>
                    <p className="text-[11px] text-gray-600 font-medium italic">Sperm can survive up to 5 days inside the body, extending your fertile window.</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">
                    <p className="font-black text-gray-900 text-[10px] uppercase mb-1">Physical Signs</p>
                    <p className="text-[11px] text-gray-600 font-medium italic">Tracking cervical mucus and body temperature can improve prediction accuracy.</p>
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

export default OvulationCalculator;