"use client";


import React, { useState } from 'react';
import { Search, AlertCircle, Activity } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState(null);

  const commonSymptoms = [
    'Headache', 'Fever', 'Cough', 'Fatigue', 'Sore Throat',
    'Nausea', 'Dizziness', 'Back Pain', 'Chest Pain', 'Shortness of Breath',
    'Stomach Pain', 'Joint Pain', 'Muscle Aches', 'Loss of Appetite', 'Chills'
  ];

  const bodyParts = [
    { name: 'Head', symptoms: ['Headache', 'Dizziness', 'Vision Problems'] },
    { name: 'Chest', symptoms: ['Chest Pain', 'Shortness of Breath', 'Heart Palpitations'] },
    { name: 'Abdomen', symptoms: ['Stomach Pain', 'Nausea', 'Bloating'] },
    { name: 'Back', symptoms: ['Back Pain', 'Lower Back Pain', 'Neck Pain'] },
    { name: 'Legs', symptoms: ['Leg Pain', 'Swelling', 'Cramps'] }
  ];

  const mockResults = [
    {
      condition: 'Common Cold',
      probability: 'High',
      description: 'A viral infection of your nose and throat. Usually harmless and resolves in a week.',
      symptoms: ['Cough', 'Sore Throat', 'Fatigue']
    },
    {
      condition: 'Influenza (Flu)',
      probability: 'Medium',
      description: 'A viral infection that attacks your respiratory system.',
      symptoms: ['Fever', 'Cough', 'Fatigue', 'Muscle Aches']
    },
    {
      condition: 'Seasonal Allergies',
      probability: 'Low',
      description: 'An immune system response to foreign substances.',
      symptoms: ['Cough', 'Fatigue']
    }
  ];

  const handleSymptomToggle = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleCheckSymptoms = () => {
    if (selectedSymptoms.length > 0) {
      setResults(mockResults);
    }
  };

  const getProbabilityColor = (prob) => {
    switch(prob.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Activity className="w-8 h-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Symptom Checker</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check your symptoms to explore possible causes and find helpful information.
          </p>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-3xl mx-auto">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> This tool does not provide medical advice. It is intended for informational purposes only. Always consult a qualified healthcare provider for diagnosis and treatment.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Symptom Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search Symptoms */}
            <Card>
              <CardHeader>
                <CardTitle>Search Symptoms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search for a symptom..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Common Symptoms */}
            <Card>
              <CardHeader>
                <CardTitle>Common Symptoms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {commonSymptoms.map((symptom) => (
                    <Badge
                      key={symptom}
                      onClick={() => handleSymptomToggle(symptom)}
                      className={`cursor-pointer px-4 py-2 text-sm transition-all ${
                        selectedSymptoms.includes(symptom)
                          ? 'bg-teal-600 text-white hover:bg-teal-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {symptom}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Body Parts */}
            <Card>
              <CardHeader>
                <CardTitle>Select by Body Part</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bodyParts.map((part) => (
                    <div key={part.name}>
                      <h4 className="font-semibold text-gray-900 mb-2">{part.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {part.symptoms.map((symptom) => (
                          <Badge
                            key={symptom}
                            onClick={() => handleSymptomToggle(symptom)}
                            className={`cursor-pointer px-3 py-1 text-xs transition-all ${
                              selectedSymptoms.includes(symptom)
                                ? 'bg-teal-600 text-white hover:bg-teal-700'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {symptom}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            {results && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Possible Conditions</h3>
                {results.map((result, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-xl font-semibold text-gray-900">{result.condition}</h4>
                        <Badge className={getProbabilityColor(result.probability)}>
                          {result.probability} Match
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{result.description}</p>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Matching Symptoms:</p>
                        <div className="flex flex-wrap gap-2">
                          {result.symptoms.map((symptom, idx) => (
                            <Badge key={idx} className="bg-gray-100 text-gray-700">
                              {symptom}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Selected Symptoms */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Selected Symptoms ({selectedSymptoms.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedSymptoms.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No symptoms selected</p>
                ) : (
                  <>
                    <div className="space-y-2 mb-6">
                      {selectedSymptoms.map((symptom) => (
                        <div key={symptom} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm text-gray-700">{symptom}</span>
                          <button
                            onClick={() => handleSymptomToggle(symptom)}
                            className="text-red-600 hover:text-red-700 text-xs font-semibold"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={handleCheckSymptoms}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                    >
                      Check Symptoms
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;
