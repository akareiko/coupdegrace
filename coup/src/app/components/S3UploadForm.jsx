"use client";
import { useState } from "react";
import MyDropzone from "./dragndrop"; // Assuming it's in the same folder

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (file) => {
    setFile(file); // This will set the file selected from MyDropzone
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data.status);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <>
    <div>
      <h1 className="text-white">Upload Files to S3 Bucket</h1>

      <MyDropzone onFileSelect={handleFileSelect} />

      <form onSubmit={handleSubmit}>
        <button 
          type="submit" 
          disabled={!file || uploading}
          className={`mt-4 px-4 py-2 text-white ${!file || uploading ? "bg-gray-400" : "bg-blue-500"} rounded`}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>
      </div>
    </>
  );
};

export default UploadForm;
