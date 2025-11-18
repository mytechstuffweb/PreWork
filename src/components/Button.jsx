export default function Button({ caption, ...props }) {
    return (
        <div className="div-flex">
            <button className="button" { ...props }>{ caption } </button>
        </div>
    )
}