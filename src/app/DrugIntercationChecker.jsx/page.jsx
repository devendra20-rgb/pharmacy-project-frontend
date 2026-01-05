"use client";

import React, { useState } from 'react';
import { AlertTriangle, Plus, X } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

const DrugInteractionChecker = () => {
  const [drugSearch, setDrugSearch] = useState('');
  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [results, setResults] = useState(null);

  const commonDrugs = [
    'Aspirin', 'Ibuprofen', 'Acetaminophen', 'Lisinopril', 'Metformin',
    'Atorvastatin', 'Amlodipine', 'Omeprazole', 'Losartan', 'Gabapentin',
    'Levothyroxine', 'Metoprolol', 'Hydrochlorothiazide', 'Simvastatin'
  ];

  const mockInteractions = [
    {
      drug1: 'Aspirin',
      drug2: 'Ibuprofen',
      severity: 'Moderate',
      description: 'Taking these medications together may increase the risk of gastrointestinal bleeding.',
      recommendation: 'Consult your doctor before taking these medications together.'
    },
    {
      drug1: 'Lisinopril',
      drug2: 'Ibuprofen',
      severity: 'Moderate',
      description: 'NSAIDs like ibuprofen may reduce the blood pressure-lowering effects of lisinopril.',
      recommendation: 'Monitor blood pressure regularly and consult your doctor.'
    }
  ];

  const addDrug = (drug) => {
    if (!selectedDrugs.includes(drug) && selectedDrugs.length < 10) {
      setSelectedDrugs([...selectedDrugs, drug]);
      setDrugSearch('');
    }
  };

  const removeDrug = (drug) => {
    setSelectedDrugs(selectedDrugs.filter(d => d !== drug));
    setResults(null);
  };

  const checkInteractions = () => {
    if (selectedDrugs.length >= 2) {
      setResults(mockInteractions);
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'major': return 'bg-red-100 text-red-700';
      case 'moderate': return 'bg-yellow-100 text-yellow-700';
      case 'minor': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredDrugs = commonDrugs.filter(drug => 
    drug.toLowerCase().includes(drugSearch.toLowerCase()) && !selectedDrugs.includes(drug)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Drug Interaction Checker</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check for potential interactions between medications, supplements, and vitamins
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add Medications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Search for a medication..."
                      value={drugSearch}
                      onChange={(e) => setDrugSearch(e.target.value)}
                      className="mb-3"
                    />
                    {drugSearch && filteredDrugs.length > 0 && (
                      <div className="border rounded-lg p-2 max-h-48 overflow-y-auto">
                        {filteredDrugs.map((drug) => (
                          <div
                            key={drug}
                            onClick={() => addDrug(drug)}
                            className="px-3 py-2 hover:bg-teal-50 cursor-pointer rounded transition-colors"
                          >
                            {drug}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Or select from common medications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {commonDrugs.slice(0, 10).map((drug) => (
                        <Badge
                          key={drug}
                          onClick={() => addDrug(drug)}
                          className={`cursor-pointer px-3 py-2 text-sm transition-all ${
                            selectedDrugs.includes(drug)
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : 'bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-700'
                          }`}
                        >
                          <Plus className="w-3 h-3 mr-1" />
                          {drug}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {results && results.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Potential Interactions Found</h3>
                {results.map((interaction, index) => (
                  <Card key={index} className="border-l-4 border-yellow-500">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">
                            {interaction.drug1} + {interaction.drug2}
                          </h4>
                        </div>
                        <Badge className={getSeverityColor(interaction.severity)}>
                          {interaction.severity}
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-1">Interaction:</p>
                          <p className="text-sm text-gray-600">{interaction.description}</p>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                          <p className="text-sm font-semibold text-yellow-800 mb-1">Recommendation:</p>
                          <p className="text-sm text-yellow-700">{interaction.recommendation}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {results && results.length === 0 && (
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="text-green-600 font-semibold mb-2">No Known Interactions</div>
                  <p className="text-sm text-gray-600">
                    No significant interactions were found between the selected medications. 
                    However, always consult your healthcare provider.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Selected Medications ({selectedDrugs.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedDrugs.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No medications selected</p>
                ) : (
                  <>
                    <div className="space-y-2 mb-6">
                      {selectedDrugs.map((drug) => (
                        <div key={drug} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                          <span className="text-sm font-medium text-gray-700">{drug}</span>
                          <button
                            onClick={() => removeDrug(drug)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={checkInteractions}
                      disabled={selectedDrugs.length < 2}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Check Interactions
                    </Button>
                    {selectedDrugs.length < 2 && (
                      <p className="text-xs text-gray-500 text-center mt-2">
                        Add at least 2 medications to check interactions
                      </p>
                    )}
                  </>
                )}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-sm">Important Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs text-gray-600">
                  <p>• This tool is for informational purposes only</p>
                  <p>• Not all interactions are listed</p>
                  <p>• Always consult your healthcare provider</p>
                  <p>• Report any side effects to your doctor</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugInteractionChecker;
