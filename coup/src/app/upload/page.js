"use client";

import S3UploadForm from '@/app/components/S3UploadForm'
import Card from '@/app/components/Card'
import { Vortex } from "@/app/components/vortex";
import Navbar from "@/app/components/navv";
import Main from "@/app/components/main"
import HeroScrollDemo from "@/app/components/scroll"
import LayoutGridDemo from "@/app/components/bento"
import Kek from "@/app/components/spline"
import SparklesPreview from "@/app/components/sparkle"

export default function Home() {
  return (
    <main className="min-h-screen p-5 bg-black">
        <Navbar className="fixed items-center top-5 z-50" />
        {/* <div class="flex flex-row mt-40">
        <div class="basis-1/5 border"></div>
        <div class="basis-1/5 border"><Main/></div>
        <div class="basis-1/5 border"></div>
        <div class="basis-1/4 border"><Kek/></div>
        <div class="basis-1/5 border"></div>
        </div> */}
        <Kek/>
      </main>
  );
}
