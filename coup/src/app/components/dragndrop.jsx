import React from "react";
import { useDropzone } from "react-dropzone";

const MyDropzone = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone();

  return (
    <div
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-white">Drop the files here ...</p>
      ) : (
        <p className="text-white">Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}

export default MyDropzone;