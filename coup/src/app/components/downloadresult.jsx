import { useFileContext } from "@/app/components/filecontext";

const FileGallery = () => {
  const { files } = useFileContext();

  return (
    <div>
      <h2>Images:</h2>
      <div className="grid grid-cols-3 gap-4">
        {files.images.length > 0 ? (
          files.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} className="w-full h-auto" />
          ))
        ) : (
          <p>No images available.</p>
        )}
      </div>

      <h2>Other Files:</h2>
      <ul>
        {files.otherFiles.length > 0 ? (
          files.otherFiles.map((file, index) => (
            <li key={index}>{file}</li>
          ))
        ) : (
          <p>No other files available.</p>
        )}
      </ul>
    </div>
  );
};

export default FileGallery;
