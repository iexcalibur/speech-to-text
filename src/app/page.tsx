'use client';

import React, { useState } from 'react';
import { useAudioRecorder } from '../hooks/useAudioRecorder';

export default function Home() {
  const [transcribedText, setTranscribedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isRecording, startRecording, stopRecording, getAudioBlob } = useAudioRecorder();

  const handleToggleRecording = async () => {
    setError(null);
    
    if (!isRecording) {
      console.log('Starting recording...');
      try {
        await startRecording();
        console.log('Recording started successfully');
      } catch (err) {
        console.error('Failed to start recording:', err);
        setError('Failed to access microphone. Please ensure you have granted microphone permissions.');
      }
    } else {
      console.log('Stopping recording...');
      setIsLoading(true);
      
      try {
        await stopRecording();
        const audioBlob = getAudioBlob();
        if (audioBlob) {
          console.log('Audio blob size:', audioBlob.size, 'bytes');
          const formData = new FormData();
          formData.append('audio', audioBlob);

          console.log('Sending audio to API...');
          const response = await fetch('/api/transcribe', {
            method: 'POST',
            body: formData,
          });
          
          if (!response.ok) {
            throw new Error(`API returned ${response.status}`);
          }
          
          const data = await response.json();
          console.log('API Response:', data);
          
          if (data.text) {
            setTranscribedText(data.text);
          } else if (data.error) {
            setError(data.error);
          }
        } else {
          console.error('No audio blob available');
          setError('No audio recorded. Please try again.');
        }
      } catch (err) {
        console.error('Error processing audio:', err);
        setError('Failed to process audio. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleClear = () => {
    setTranscribedText('');
    setError(null);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-2xl space-y-6">
        
        <div 
          className="
            w-[300px] 
            h-[200px] 
            border-[2.5px] 
            border-solid 
            border-blue-500 
            rounded-[7px] 
            p-4 
            bg-white 
            mx-auto 
            overflow-auto
            shadow-sm
          "
        >
          {transcribedText || (
            <span className="text-gray-400">
              Your transcribed text will appear here...
            </span>
          )}
        </div>

        <div className="flex flex-col items-center gap-8">
        
          <button
            onClick={handleToggleRecording}
            disabled={isLoading}
            className={`
              px-6 py-3
              rounded-full
              transition-all duration-200 transform
              ${isRecording 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-blue-500 hover:bg-blue-600'
              }
              ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
              text-white font-medium min-w-[100px]
            `}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                Processing...
              </span>
            ) : (
              isRecording ? 'Stop' : 'Play'
            )}
          </button>

          {transcribedText && (
            <button
              onClick={handleClear}
              className="px-6 py-2 bg-white text-blue-500 border-2 border-blue-500 rounded-md
                         hover:bg-blue-50 transition-colors"
            >
              clear
            </button>
          )}
        </div>

        {error && (
          <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}
      </div>
    </main>
  );
} 