export default function Pages({ label = "Images per Page", ...props }) {
    return (
        <>
            <label id="pagesLabel" className="label">{ label }</label>
            <select className="select" { ...props }>
                <option id="3" value="3">3</option>
                <option id="6" value="6">6</option>
                <option id="9" value="9">9</option>
            </select>        
        </>
    )
}