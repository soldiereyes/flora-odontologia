import React from 'react';
import './Gallery.css';

interface GalleryProps {
    images: string[];
}

const Gallery: React.FC<GalleryProps> = ({images}) => {
    return (
        <div className="gallery-container">
            {images.map((image, index) => (
                <div className="none">
                    <div className="gallery-item" key={index}>
                        <img src={image} alt={`Image ${index + 1}`}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
