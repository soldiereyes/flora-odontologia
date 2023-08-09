import Gallery from "../gallery-images/Gallery.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import consultorio0 from "../../assets/consultorio0.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import consultorio1 from "../../assets/consultorio1.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import consultorio3 from '../../assets/consultorio3.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import consultorio4 from "../../assets/consultorio4.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import consultorio5 from "../../assets/consultorio5.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import consultorio6 from "../../assets/consultorio6.svg";


const SpaceGallery: React.FC = () => {
    const images = [
        consultorio0,
        consultorio1,
        consultorio3,
        consultorio4,
        consultorio5,
        consultorio6,

    ];

    return (
            <Gallery images={images}/>
    );
}

export default SpaceGallery;
