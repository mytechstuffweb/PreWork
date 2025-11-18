import Image from "./Image";

export default function Images({ loadStatus, selectedBreed, images }) {
    return (
        <>
        { (loadStatus.breeds === 0 || loadStatus.data === 0) &&
        <div className="div">
            <p className="p-msg">
                Images are being loaded...
            </p>
        </div>
        }
        <ul className="container">
            { (loadStatus.breeds === 1 && loadStatus.data === 1) &&
                images.map((image) => (
                    <li key={ image.id } className="container-item">
                        <Image selectedBreed={ selectedBreed } image={ image } />
                    </li>
                ))
            }
        </ul>
        </>
    )
}