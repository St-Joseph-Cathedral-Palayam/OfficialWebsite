import React, { useState } from "react";
import { FaFilePdf, FaExternalLinkAlt, FaPlayCircle } from "react-icons/fa";

export default function PdfPreview() {
  const [loadPdf, setLoadPdf] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center my-20 px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 overflow-hidden border border-gray-200 transition-all duration-300">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-slate-50 to-gray-100 p-8 flex flex-col md:flex-row items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-5 text-slate-700">
            <div className="p-3 bg-white shadow-sm rounded-2xl border border-gray-200">
              <FaFilePdf size={42} className="text-rose-600" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold m-0 tracking-tight">
                വിശുദ്ധ യൗസേപിതാവിൻ്റെ തിരുനാൾ മഹോത്സവം
              </h3>
            </div>
          </div>
          <a
            href="/pdf/StJoseph2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-700 border border-gray-200 font-semibold rounded-full shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Open PDF <FaExternalLinkAlt size={14} className="ml-1" />
          </a>
        </div>

        {/* PDF Render Preview Container */}
        <div className="bg-slate-50 w-full h-[500px] md:h-[650px] flex flex-col justify-center items-center p-6 md:p-8">
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-inner border-2 border-slate-200 bg-white relative group flex items-center justify-center">
            {!loadPdf ? (
              <div className="flex flex-col items-center justify-center text-center p-8">
                <div className="bg-slate-100 p-5 rounded-full mb-4 text-slate-400">
                  <FaFilePdf size={48} />
                </div>
                <h4 className="text-xl font-semibold text-slate-700 mb-2">
                  PDF Document Preview
                </h4>
                <p className="text-slate-500 mb-6 max-w-md">
                  Click below to load the interactive PDF viewer. This step
                  saves data on mobile and slow networks.
                </p>
                <button
                  onClick={() => setLoadPdf(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white font-semibold rounded-full shadow-md hover:bg-rose-700 transition-colors"
                >
                  <FaPlayCircle size={18} /> Load PDF Viewer
                </button>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 z-0">
                  <p>Loading PDF viewer...</p>
                </div>
                <iframe
                  src="/pdf/StJoseph2026.pdf#view=FitH"
                  className="w-full h-full relative z-10 bg-transparent"
                  title="St. Joseph's 2026 PDF Document"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
