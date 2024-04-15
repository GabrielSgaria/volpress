'use client'
import React, { useEffect } from "react"
import { Loader } from "@googlemaps/js-api-loader"

export default function GoogleMaps() {

    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initializeMap = async () => {
            const loader = new Loader({
                apiKey: "AIzaSyDkV5hxnlGzSZOlzAMMU5gvH0c5GhkMMko",
                version: "quarterly"
                
            });
        
            const { Map } = await loader.importLibrary('maps')

            const locationInMap = {
                lat: -25.5500884583817,
                lng: -49.30499283026259,
            };

            const { Marker } = (await loader.importLibrary('marker')) as google.maps.MarkerLibrary;

            const mapOptions: google.maps.MapOptions = {
                center: locationInMap,
                zoom: 15,
                mapId: 'AIzaSyDkV5hxnlGzSZOlzAMMU5gvH0c5GhkMMko',

            }
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            const marker = new Marker({
                map: map,
                position: locationInMap,
                label: {
                    text: "Volpress Transportes",
                    className: "uppercase mb-12 font-bold",
                },
                draggable: true,

            });


            marker.addListener("click", () => {
                // Abre o Google Maps em uma nova guia com as coordenadas do marcador
                window.open(`https://www.google.com/maps/search/?api=1&query=${locationInMap.lat},${locationInMap.lng}`);
            });
        };
        initializeMap();
    }, [])


    return (
        <div className="h-[300px] border-y border-zinc-200 mt-16" ref={mapRef} />
    )
}