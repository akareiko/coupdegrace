"use client";

import S3UploadForm from '@/app/components/S3UploadForm'
import Card from '@/app/components/Card'
import { Vortex } from "@/app/components/vortex";
import Navbar from "@/app/components/navv";
import Main from "@/app/components/main"
import HeroScrollDemo from "@/app/components/scroll"
import LayoutGridDemo from "@/app/components/bento"
import Kek from "@/app/components/spline"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-black">
      <Navbar className="fixed top-5 z-50" />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <HeroScrollDemo/>
      <LayoutGridDemo/>
      </main>
  );
}
