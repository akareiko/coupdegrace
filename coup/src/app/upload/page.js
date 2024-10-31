"use client";

import S3UploadForm from '@/app/components/S3UploadForm';
import Kek from "@/app/components/spline";

export default function Home() {
  return (
    <main className="min-w-screen p-5 relative">
      <Kek className="absolute inset-0 -z-10" /> {/* Negative z-index for Kek */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2"> {/* Position at the bottom center */}
        <S3UploadForm />
      </div>
    </main>
  );
}
