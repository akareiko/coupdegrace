"use client";

import { useState, useEffect } from "react";
import MyDropzone from "./dragndrop";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/3d-card";
import Link from "next/link";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uid, setUid] = useState(null);
  const [images, setImages] = useState([]); // New state for images

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
      const response = await fetch("http://43.201.250.98/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Upload response:", data);

      if (data.images) {
        console.log("Received image URLs:", data.images);
        setImages(data.images); // Set the URLs of processed images
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
      <h1 className="text-white font-sans">Process</h1>
      <MyDropzone onFileSelect={handleFileSelect} />
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          disabled={!file || uploading}
          className={`mt-4 px-4 py-2 text-white font-sans ${
            !file || uploading ? "bg-gray-400" : "bg-blue-500"
          } rounded`}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>

      <div className="mt-4">
        {images.length > 0 && (
          <div>
            <h2 className="text-white font-sans">Processed Images:</h2>
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                // <img key={index} src={image} alt={`Processed image ${index + 1}`} className="w-full h-auto" />
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      Make things float in air
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      Hover over this card to unleash the power of CSS perspective
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      {/* <Image
                        src={wall}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      /> */}
                      // <img 
                            key={index}  
                            src={image} 
                            alt={`Processed image ${index + 1}`} 
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href=""
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        Try now →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Sign up
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadForm;
