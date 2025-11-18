import { useState, useEffect } from 'react'

import Breeds from './components/Breeds';
import Button from './components/Button';
import Colors from './components/Colors.jsx';
import Details from './components/Details';
import Images from './components/Images';
import Pages from './components/Pages';

import { initColorScheme, toggleColorScheme } from "./utils/colorScheme.js"

import { getBreeds, getData } from './http/fetch'

const DEBUG = false;

export default function CatsApp() {
    const [ breeds, setBreeds ] = useState([])
    const [ selectedBreed, setSelectedBreed ] = useState();
    const [ images, setImages ] = useState([]);
    const [ pageSize, setPageSize ] = useState(3);
    const [ colorScheme, setColorScheme ] = useState();
    const [ loadStatus, setLoadStatus ] = useState({
        breeds: -1,
        data: -1,
    });

    async function selectBreeds() {
        try {
            handleLoadStatus("breeds", 0);

            const data = await getBreeds();
            DEBUG && console.log("selected breeds =", data)

            let breedsList = [];

            data.map((breed) => {
                const cfa_url = "http://cfa.org/breed/" + breed.name.replace(/\s+/g, '-').toLowerCase();
                DEBUG && console.log(cfa_url);

                breedsList.push({
                    id: breed.id,
                    name: breed.name,
                    description: breed.description,
                    wikipedia_url: breed.wikipedia_url,
                    vetstreet_url: breed.vetstreet_url,
                    cfa_url: cfa_url, 
                    temperament: breed.temperament
                })
            })
            DEBUG && console.log("breedsList = ", breedsList);

            setBreeds(breedsList);

            handleLoadStatus("breeds", 1);
        } catch (dataError) {
            console.log(dataError);
        }
    }

    async function selectData(endpoint, breedId, limit) {
        try {
            handleLoadStatus("data", 0);

            const data = await getData(endpoint, breedId, limit);
            console.log("selected data =", data);

            const selectedImages = [];
            
            data.map((image) => (
                selectedImages.push({
                    id: image.id,
                    url: image.url,
                    breed: image.breeds[0]?.name
                })
            ))

            setImages(selectedImages);

            handleLoadStatus("data", 1);
        } catch (dataError) {
            console.log(dataError);
        }
    }

    function handleLoadStatus(type, status) {
        setLoadStatus((prev) => (
            {
                ...prev,
                [type]: status,
            }
        ))
    }

    function handleBreedSelect(e) {
        DEBUG && console.log("selected ", e.target.value);

        if (e.target.value === "-1") {
            setSelectedBreed();

            selectData("images/search", undefined, pageSize);
        } else {
            const breed = breeds.find((b) => b.id === e.target.value);
            DEBUG && console.log("selected breed ", breed);

            setSelectedBreed({
                id: breed.id,
                name: breed.name,
                description: breed.description,
                wikipedia_url: breed.wikipedia_url,
                vetstreet_url: breed.vetstreet_url,
                cfa_url: breed.cfa_url,
                temperament: breed.temperament
            });

            selectData("images/search", breed?.id, pageSize);
        }
    }

    function handlePageSize(e) {
        const selectedSize = parseInt(e.target.value);
        DEBUG && console.log("selectedSize =", selectedSize);

        if (pageSize !== selectedSize) {
            DEBUG && console.log("selected ", selectedSize);
            setPageSize(selectedSize);
            selectData("images/search", selectedBreed?.id, selectedSize);
        }
    }

    function handleColorSchemeShange(e) {
        const newColorScheme = toggleColorScheme(e.target.value.toLowerCase());
        setColorScheme(newColorScheme);
        DEBUG && console.log("newColorScheme =", newColorScheme);

        if (newColorScheme) {
            document
                .querySelector("body")
                .setAttribute("data-theme", newColorScheme);
        }
    }

    useEffect(() => {
        const initialColorScheme = initColorScheme();
        setColorScheme(initialColorScheme);
        DEBUG && console.log("initialColorScheme =", initialColorScheme);

        if (initialColorScheme) {
            document
                .querySelector("body")
                .setAttribute("data-theme", initialColorScheme);
        }

        selectBreeds();

        selectData("images/search", selectedBreed?.id, pageSize);
    }, [ ]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [ images ]);

    DEBUG && console.log("data-theme on load =", document.querySelector("body").getAttribute("data-theme"));

    return (
        <div id="app">
            <header className="header">
                <h1 className="h1">
                    Welcome to the world of CATS !!!
                </h1>

                <div className="div-flex">
                    <Breeds breeds={ breeds } onChange={ handleBreedSelect } />

                    <Pages id={ pageSize } onChange={ handlePageSize } />

                    <Colors id={ colorScheme } selected={ colorScheme } onChange={ handleColorSchemeShange } />                
                </div>

                { selectedBreed &&
                    <Details selectedBreed={ selectedBreed } colorScheme={ colorScheme } />
                }

                <Button 
                    onClick={ () => selectData("images/search", selectedBreed?.id, pageSize) }
                    caption="Select Images"
                />            
            </header>

            <main className="main">
                <Images selectedBreed={ selectedBreed? true : false } loadStatus={ loadStatus } images={ images } />

                { (pageSize > 3) &&
                    <Button 
                        onClick={ () => selectData("images/search", selectedBreed?.id, pageSize) }
                        caption="Select Images"
                    />
                }       
            </main>
        </div>
    )
}

