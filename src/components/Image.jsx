export default function Image({ selectedBreed, image }) {
    const breedName = image.breed ? image.breed : "";
    console.log(breedName);

    return (
        <>
            <img 
                src={ image.url } 
                atl="Random cat picture"                                   
            />
            { !selectedBreed &&
                <figcaption>&nbsp;{ breedName }</figcaption>
            }
        </>
    )
}