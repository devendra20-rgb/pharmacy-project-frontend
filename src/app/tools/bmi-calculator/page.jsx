"use client";

import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Label } from '../../../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';

const BMICalculator = () => {
  const [unit, setUnit] = useState('imperial');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    
    let bmiValue;
    if (unit === 'imperial') {
      const totalInches = (parseInt(feet) * 12) + parseInt(inches);
      bmiValue = (703 * parseFloat(weight)) / (totalInches * totalInches);
    } else {
      const heightInMeters = parseFloat(height) / 100;
      bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    }

    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  const getCategoryColor = () => {
    if (category === 'Underweight') return 'text-blue-600';
    if (category === 'Normal weight') return 'text-green-600';
    if (category === 'Overweight') return 'text-yellow-600';
    if (category === 'Obese') return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Calculator className="w-8 h-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">BMI Calculator</h1>
          <p className="text-lg text-gray-600">
            Calculate your Body Mass Index to assess your health status
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Calculate Your BMI</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={calculateBMI} className="space-y-6">
                <div>
                  <Label className="mb-3 block">Unit System</Label>
                  <RadioGroup value={unit} onValueChange={setUnit}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="imperial" id="imperial" />
                      <Label htmlFor="imperial" className="cursor-pointer">Imperial (lbs, ft, in)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="metric" id="metric" />
                      <Label htmlFor="metric" className="cursor-pointer">Metric (kg, cm)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="weight">Weight {unit === 'imperial' ? '(lbs)' : '(kg)'}</Label>
                  <Input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight"
                    required
                    step="0.1"
                  />
                </div>

                {unit === 'imperial' ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="feet">Height (feet)</Label>
                      <Input
                        id="feet"
                        type="number"
                        value={feet}
                        onChange={(e) => setFeet(e.target.value)}
                        placeholder="Feet"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="inches">Height (inches)</Label>
                      <Input
                        id="inches"
                        type="number"
                        value={inches}
                        onChange={(e) => setInches(e.target.value)}
                        placeholder="Inches"
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="Enter height"
                      required
                    />
                  </div>
                )}

                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Calculate BMI
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {bmi && (
              <Card className="bg-teal-50 border-teal-200">
                <CardHeader>
                  <CardTitle>Your Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-teal-600 mb-2">{bmi}</div>
                    <div className={`text-2xl font-semibold mb-4 ${getCategoryColor()}`}>
                      {category}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>BMI Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <span className="font-medium">Underweight</span>
                  <span className="text-sm text-gray-600">&lt; 18.5</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="font-medium">Normal weight</span>
                  <span className="text-sm text-gray-600">18.5 - 24.9</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                  <span className="font-medium">Overweight</span>
                  <span className="text-sm text-gray-600">25 - 29.9</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded">
                  <span className="font-medium">Obese</span>
                  <span className="text-sm text-gray-600">≥ 30</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Understanding BMI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Body Mass Index (BMI) is a screening tool that uses height and weight to estimate body fat. 
                  While BMI doesn't directly measure body fat, it correlates with more direct measures. 
                  Talk to your doctor about your BMI and overall health.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
