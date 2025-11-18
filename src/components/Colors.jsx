export default function Colors({ selected, label = "Color Scheme toggle", ...props }) {
    return (
        <>
            <label id="colorLabel" className="label">{ label }</label>
            <select defaultValue={ selected } className="select" { ...props }>
                <option id="dark" value="dark">Dark</option>
                <option id="light" value="Light">Light</option>
            </select>        
        </>
    )
}