import React, { useState } from "react";

import JSZip from "jszip";
import { saveAs } from "file-saver";
import { IScreen } from "../models/screen";

interface DownloadProps {
    title: string;
    screens: IScreen[];
}

const DownloadButton: React.FC<DownloadProps> = ({ title, screens }) => {
    const [isDownloading, setIsDownloading] = useState(false);

    const downloadImagesAsZip = async (screens: IScreen[]) => {
        const imageUrls = screens.map((screen) => screen.image);
        const folderName = `images_${title.toLowerCase().replace(/\s/g, "_")}`;

        setIsDownloading(true);

        const zip = new JSZip();
        const imgFolder = zip.folder(folderName);

        if (!imgFolder) {
            console.error("Failed to create a folder in the zip file");
            return;
        }

        const promises = imageUrls.map(async (url, index) => {
            const response = await fetch(url);
            const blob = await response.blob();
            imgFolder.file(`image${index + 1}.png`, blob);
        });

        await Promise.all(promises);

        zip.generateAsync({ type: "blob" })
            .then((content) => {
                saveAs(content, `${folderName}.zip`);
                setIsDownloading(false);
            })
            .catch((error) => {
                console.error("Failed to generate zip file:", error);
                setIsDownloading(false);
            });
    };

    return (
        <div>
            <button
                className={"btn w-100 btn-primary text-uppercase"}
                disabled={isDownloading}
                onClick={() => downloadImagesAsZip(screens)}
            >
                {isDownloading ? (
                    <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                ) : (
                    "Download Images"
                )}
            </button>
        </div>
    );
};

export default DownloadButton;
