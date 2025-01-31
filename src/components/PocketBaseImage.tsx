import classnames from "classnames";
import { useMemo } from "react";

type PocketbaseImageProps = {
    alt: string,
    className?: string | null,
    collectionId: string,
    fileName: string,
    height?: number,
    recordId: string,
    width?: number
};

const BASE_URL = import.meta.env.VITE_POCKETBASE_URL;

export const PocketBaseImage = ({ alt, className, collectionId, fileName, height, recordId, width } : Readonly<PocketbaseImageProps>) => {
    const filePath : string = useMemo(() => {
        let basePath = `${BASE_URL}/api/files/${collectionId}/${recordId}/${fileName}`;
        if (height || width) {
            const size = height && width
                ? `${width}x${height}`
                : !height
                    ? `${width}x0`
                    : `0x${height}`;

            basePath += `thumb=${size}`;
        }

        return basePath;
    }, [ collectionId, fileName, height, recordId, width ]);

    return (
        <img className={classnames(className as any)} src={filePath} alt={alt} />
    );
};