import React, { useState } from 'react';
import { Upload, Image as ImageIcon, X, ScanSearch } from 'lucide-react';
import { Button } from './Button';
import { analyzeImage } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

export const ImageAnalyzer: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!image) return;
    setIsAnalyzing(true);
    const analysis = await analyzeImage(image, "Explain the English text or objects in this image. Translate any foreign text to English and provide a vocabulary list.");
    setResult(analysis);
    setIsAnalyzing(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row h-auto md:h-[600px]">
      
      {/* Left Side: Upload & Preview */}
      <div className="w-full md:w-1/2 p-8 bg-slate-50 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-slate-100">
        
        {!image ? (
          <div className="w-full h-64 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors cursor-pointer relative group">
             <input 
               type="file" 
               accept="image/*"
               onChange={handleImageUpload}
               className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
             />
             <Upload size={48} className="mb-4 group-hover:scale-110 transition-transform duration-300 text-orange-400" />
             <p className="font-medium text-slate-600">Upload Homework or Photo</p>
             <p className="text-xs mt-2">Supports JPG, PNG</p>
          </div>
        ) : (
          <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden shadow-md">
            <img src={image} alt="Upload" className="w-full h-full object-contain bg-black" />
            <button 
              onClick={() => { setImage(null); setResult(null); }}
              className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-slate-800 hover:bg-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        )}

        <div className="mt-8 w-full">
           <Button 
             onClick={handleAnalyze} 
             disabled={!image || isAnalyzing} 
             className="w-full"
             variant="secondary"
           >
             {isAnalyzing ? 'Analyzing...' : <><ScanSearch size={18}/> Analyze with Gemini</>}
           </Button>
        </div>
      </div>

      {/* Right Side: Results */}
      <div className="w-full md:w-1/2 p-8 flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <ImageIcon className="text-orange-500" /> Analysis Result
        </h3>
        
        <div className="flex-1 bg-white rounded-2xl border border-slate-100 p-6 overflow-y-auto h-[300px] md:h-auto shadow-inner">
          {result ? (
             <div className="prose prose-sm prose-slate max-w-none">
               <ReactMarkdown>{result}</ReactMarkdown>
             </div>
          ) : isAnalyzing ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
              <p>Reading your image...</p>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center">
              <p>Upload an image and click analyze to see AI insights here.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
