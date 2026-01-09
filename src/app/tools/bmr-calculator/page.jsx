"use client";

import React, { useState } from "react";
import { Activity, Info, Flame, Zap } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";

const BMRCalorieCalculator = () => {
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("1.2"); // Default: Sedentary
  const [results, setResults] = useState(null);

  const calculateMetrics = (e) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);
    const factor = parseFloat(activity);

    // BMR Logic (Mifflin-St Jeor Equation)
    let bmrValue;
    if (gender === "male") {
      bmrValue = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmrValue = 10 * w + 6.25 * h - 5 * a - 161;
    }

    setResults({
      bmr: Math.round(bmrValue),
      tdee: Math.round(bmrValue * factor),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Activity className="w-8 h-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tight">
            Metabolic & Calorie Hub
          </h1>
          <p className="text-lg text-gray-600 font-medium italic">
            Understand your body's energy needs at rest and during activity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Input Form */}
          <Card className="border-none shadow-sm">
            <CardHeader className="border-b border-gray-50">
              <CardTitle className="text-xl font-bold">Your Metrics</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={calculateMetrics} className="space-y-6">
                <div>
                  <Label className="mb-3 block font-bold text-gray-700 uppercase text-xs tracking-wider">
                    Select Gender
                  </Label>
                  <RadioGroup
                    value={gender}
                    onValueChange={setGender}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label
                        htmlFor="male"
                        className="cursor-pointer font-bold"
                      >
                        Male
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label
                        htmlFor="female"
                        className="cursor-pointer font-bold"
                      >
                        Female
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="age"
                      className="font-bold text-gray-700 text-xs uppercase"
                    >
                      Age (Years)
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                      placeholder="e.g. 25"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="weight"
                      className="font-bold text-gray-700 text-xs uppercase"
                    >
                      Weight (kg)
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                      placeholder="e.g. 70"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="height"
                    className="font-bold text-gray-700 text-xs uppercase"
                  >
                    Height (cm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                    placeholder="e.g. 175"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="activity"
                    className="font-bold text-gray-700 text-xs uppercase"
                  >
                    Daily Activity Level
                  </Label>
                  <select
                    id="activity"
                    className="w-full p-2.5 bg-white border border-gray-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                  >
                    <option value="1.2">
                      Sedentary (Little to no exercise)
                    </option>
                    <option value="1.375">
                      Lightly Active (Exercise 1-3 days/week)
                    </option>
                    <option value="1.55">
                      Moderately Active (Exercise 3-5 days/week)
                    </option>
                    <option value="1.725">
                      Very Active (Exercise 6-7 days/week)
                    </option>
                    <option value="1.9">
                      Extra Active (Hard exercise & physical job)
                    </option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-black h-12 uppercase tracking-widest shadow-md transition-all"
                >
                  Analyze Energy Needs
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results Side */}
          <div className="space-y-6">
            {results ? (
              <div className="space-y-6 animate-in fade-in duration-500">
                {/* TDEE Result */}
                <Card className="bg-teal-600 text-white border-none shadow-xl overflow-hidden">
                  <div className="bg-teal-700/50 p-3 text-center">
                    <h3 className="text-[10px] font-black uppercase tracking-widest">
                      Total Daily Calories (TDEE)
                    </h3>
                  </div>
                  <CardContent className="py-8 text-center">
                    <div className="flex justify-center items-center gap-2 mb-2">
                      <Flame className="w-6 h-6 text-orange-300 fill-orange-300" />
                      <div className="text-6xl font-black">{results.tdee}</div>
                    </div>
                    <p className="text-teal-50 font-bold italic">
                      Calories to maintain your current weight
                    </p>
                  </CardContent>
                </Card>

                {/* BMR Result */}
                <Card className="bg-white border border-teal-100 shadow-sm">
                  <CardContent className="py-6 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                        Base Metabolic Rate (BMR)
                      </p>
                      <p className="text-3xl font-black text-teal-700">
                        {results.bmr}{" "}
                        <span className="text-sm font-bold text-gray-400">
                          kcal/day
                        </span>
                      </p>
                    </div>
                    <Zap className="w-10 h-10 text-teal-100 fill-teal-100" />
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="bg-white border-dashed border-2 border-gray-200 h-[300px] flex flex-col items-center justify-center p-8 text-center">
                <Info className="w-12 h-12 text-gray-200 mb-4" />
                <p className="text-gray-400 font-bold italic">
                  Enter your metrics to calculate your resting and active energy
                  needs.
                </p>
              </Card>
            )}

            {/* Educational Content */}
            <Card className="bg-white border-none shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-black uppercase tracking-wider text-teal-800">
                  Understanding the Difference
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                  <h4 className="font-bold text-orange-900 text-sm mb-1">
                    BMR (Basal Metabolic Rate)
                  </h4>
                  <p className="text-xs text-orange-800 leading-relaxed font-medium">
                    "This represents the calories your body burns while in 'Rest
                    Mode.' Even if you stay in bed all day, your body still
                    consumes this much energy to keep your heart, lungs, and
                    brain functioning."{" "}
                  </p>
                </div>
                <div className="p-3 bg-teal-50 rounded-lg border-l-4 border-teal-400">
                  <h4 className="font-bold text-teal-900 text-sm mb-1">
                    TDEE (Total Daily Calories)
                  </h4>
                  <p className="text-xs text-teal-800 leading-relaxed font-medium">
                    "This is your 'Real World' calorie burn. It is the total sum
                    of your BMR plus the energy used for walking, exercising,
                    and performing your daily activities."{" "}
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

export default BMRCalorieCalculator;
