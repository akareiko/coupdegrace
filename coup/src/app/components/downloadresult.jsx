import { useFileContext } from "@/app/components/filecontext";
import { CardBody, CardContainer, CardItem } from "@/app/components/3d-card";

const FileGallery = () => {
  const { files } = useFileContext();
  const image1 = "http://43.201.250.98/get_image?path=original_image_slice.png&uid=1729223740";
  const image2 = "http://43.201.250.98/get_image?path=overlay_slice.png&uid=1729223740";
  const image3 = "http://43.201.250.98/get_image?path=saliency_map_slice.png&uid=1729223740";

  const staticImages = [
    { src: image1, title: "Original Slice" },
    { src: image2, title: "Overlay Slice" },
    { src: image3, title: "Saliency Map" },
  ];

  return (
    <div>
      <h2>Images:</h2>
      <div className="grid grid-cols-3 gap-4">
        {staticImages.length > 0 ? (
          staticImages.map((imageObj, index) => (
            <CardContainer className="inter-var" key={index}>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[27rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {imageObj.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img 
                    src={imageObj.src} 
                    alt={`Processed image ${index + 1}`} 
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
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
