import cfa_white_on_black from "../assets/cfa_white_on_black.png";
import cfa_black_on_white from "../assets/cfa_black_on_white.png";
import vetstreet_logo from "../assets/vetstreet_white_on_blue.jfif";
import wikipedia_white_on_black from "../assets/wikipedia_white_on_black.png";
import wikipedia_black_on_white from "../assets/wikipedia_black_on_white.png";

export default function Details({ selectedBreed, colorScheme }) {
    const cfa_logo = 
        (colorScheme === "dark") ? 
            cfa_black_on_white : 
            cfa_white_on_black
        ;
    const wikipedia_logo = 
        (colorScheme === "dark") ? 
            wikipedia_black_on_white : 
            wikipedia_white_on_black
        ;
    return (
        <div className="div">
            <p className="p">
                { selectedBreed.description }
            </p>
            <p className="p">
                Click on logo below for more information.
            </p>
            <div className="div-flex">
                { selectedBreed.wikipedia_url &&
                    <a className="a" href={ selectedBreed.wikipedia_url } target="_blank">
                        {/* Link to Wikipedia */}
                        <img 
                            src={ wikipedia_logo } 
                            atl="Random cat picture"
                            className="logo"
                        />
                    </a>
                }
                { selectedBreed.vetstreet_url &&
                    <a className="a" href={ selectedBreed.vetstreet_url } target="_blank">
                        {/* Link to vetSTREET */}
                        <img 
                            src={ vetstreet_logo } 
                            atl="Random cat picture"
                            className="logo"
                        />
                    </a>
                }
                { selectedBreed.cfa_url &&
                    <a className="a" href={ selectedBreed.cfa_url } target="_blank">
                        {/* Link to CFA */}
                        <img 
                            src={ cfa_logo } 
                            atl="Random cat picture"
                            className="logo"
                        />
                    </a>
                }
            </div>
        </div>
    )
}