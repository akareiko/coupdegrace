"use client";

import S3UploadForm from '@/app/components/S3UploadForm'
import Card from '@/app/components/Card'
import { Vortex } from "@/app/components/vortex";
import Main from "@/app/components/main"
import HeroScrollDemo from "@/app/components/scroll"
import LayoutGridDemo from "@/app/components/bento"
import Kek from "@/app/components/spline"
import SparklesPreview from "@/app/components/sparkle"
import MyDropzone from "@/app/components/dragndrop"

export default function Home() {
    return (
      <main className="min-h-screen p-5">
        <div class="h-[70vh] overflow-visible -mt-[10vh]">
        {/* <div class="h-[100vh] overflow-visible scale-150"> */}
            <Kek/>
        </div>
        <div class="flex justify-center">
            <div className="w-[40vw] bg-black rounded-2xl border-2 border-white border-dashed p-5 h-[10vh] flex justify-center items-center text-center">
                <MyDropzone/>
            </div>
            {/* <S3UploadForm/> */}
        </div>
      </main>
    );
  }
  
