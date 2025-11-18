export default function Breeds({ breeds, ...props }) {
    return (
        <select className="select" { ...props }>
            <option key="-1" value="-1">Select a breed</option>
            {
                breeds.map((breed) => (
                    <option key={ breed.id } value={ breed.id }>{ breed.name }</option>
                ))
            }
        </select>        
    )
}