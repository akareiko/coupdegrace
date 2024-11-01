"use client";

import { useState, useEffect } from "react";
import MyDropzone from "./dragndrop";
import { useFileContext } from "@/app/components/filecontext"; // Keep this import

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/3d-card";
import Link from "next/link";

const UploadForm = () => {
  const { addFiles } = useFileContext(); // Access addFiles from the context
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uid, setUid] = useState(null);

  // Retrieve UID from localStorage when component mounts
  useEffect(() => {
    const storedUid = localStorage.getItem("anonymousUserId");
    if (storedUid) {
      setUid(storedUid);
      console.log("Using UID from localStorage:", storedUid);
    } else {
      console.warn("UID not found in localStorage.");
    }
  }, []);

  const handleFileSelect = (file) => {
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !uid) {
      console.error("File or UID is missing");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("uid", uid); // Add UID to the form data

    try {
      const response = await fetch("https://coupte.org/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Upload response:", data);

      if (data.images) {
        const images = data.images; // Assuming this is an array of image URLs
        addFiles(images, "images"); // Store image URLs
      } else {
        console.error("No images returned from the server");
      }

      setUploading(false);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploading(false);
    }
  };

  return (
    <div>
      <h1 className="text-white font-sans">process</h1>
      <MyDropzone onFileSelect={handleFileSelect} />
      <div className="flex justify-center w-full mt-4">
        <form onSubmit={handleSubmit} className="flex justify-center">
          <button
            type="submit"
            disabled={!file || uploading}
            className={`flex items-center justify-center w-12 h-12 rounded-full text-white bg-black ${
              !file || uploading ? "bg-gray-400 cursor-not-allowed" : "hover:bg-gray-800"
            }`}
          >
            {uploading ? (
              <span className="animate-spin">⏳</span> // Spinner icon while uploading
            ) : (
              <span>↑</span> // Arrow up icon
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
