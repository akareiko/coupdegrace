"use client";

import React, { createContext, useState, useContext } from "react";

const FileContext = createContext();

export const useFileContext = () => useContext(FileContext);

export const FileProvider = ({ children }) => {
  const [files, setFiles] = useState({ images: [], otherFiles: [] });

  const addFiles = (files, type) => {
    setFiles((prevFiles) => {
      const updatedFiles = { ...prevFiles };

      if (type === "images") {
        updatedFiles.images = [...updatedFiles.images, ...files]; // Store images
      } else if (type === "otherFiles") {
        updatedFiles.otherFiles = [...updatedFiles.otherFiles, ...files]; // Store other files
      }

      console.log("Updated Files:", updatedFiles); // Log the updated files
      return updatedFiles;
    });
  };


  return (
    <FileContext.Provider value={{ files, addFiles }}>
      {children}
    </FileContext.Provider>
  );
};
