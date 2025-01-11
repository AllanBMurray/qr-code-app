"use client";

import {QRCodeSVG} from 'qrcode.react';
import QRCode from "react-qr-code";
import { useState } from 'react';

export default function Home() {

  const [testUrl, setTestUrl] = useState("https://www.google.com");

  return (
    <div className="min-h-screen flex flex-col items-center justify-items-center gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="bg-slate-400 min-w-full p-4">
        <h1 className="text-2xl text-center">QR Code Generator</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-items-center gap-8">  
        <div className="flex items-center gap-2 mb-4">
          <label className="text-lg">Input URL:</label>
          <input 
            type="text" 
            value={testUrl} 
            onChange={(e) => setTestUrl(e.target.value)} 
            className="border p-2 rounded"
            placeholder="Enter URL"
          />
        </div>
        
        <div className="flex gap-4">
          <div>
            <div> qrcode.react:</div>
            <QRCodeSVG value={testUrl} title={testUrl}/>
          </div>
          <div>
            <div> qrcode.react With Image:</div>
            <QRCodeSVG value={testUrl} title={testUrl} imageSettings={{src:"/smiley.svg", height:30, width:30, excavate: true}}/>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <div>react-qr-code:</div>
            <QRCode
              size={128}
              value={testUrl}
            />
          </div>
          <div>
            <div>react-qr-code Large:</div>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={testUrl}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
      </main>
      <footer className="bg-slate-400 min-h-20 min-w-full">
      </footer>
    </div>
  );
}
