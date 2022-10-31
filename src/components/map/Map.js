import React, { useRef } from "react";
import Leaflet from "leaflet"
import "leaflet/dist/leaflet.css" 
import { MapContainer, TileLayer, Marker, Popup, ZoomControl} from "react-leaflet"
import { useMap } from 'react-leaflet/hooks'
import 'leaflet-fullscreen/dist/Leaflet.fullscreen'
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css'
import iconUrl from '../../assets/icon-location.svg'
import styles from './Map.module.scss';

export const newicon = new Leaflet.Icon({
  iconUrl,
  iconAnchor: [5, 55],
  popupAnchor: [10, -54],
  iconSize: [40, 50]
});

const Map = ({lat, lon, status}) => {

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  const mapRef = useRef();
  const zoom = 16;
  const containerStyle = {
      width: "100%",
      height: '75vh',
  }

  const marker = {
        position: {
            lat: lat,
            lng: lon,
        },
        draggable: false,
        icon: newicon,
    }

  return (
    <div className={styles.mapContainer}>
      {status === 'success' && 
        <MapContainer
        style={containerStyle}
        center={marker.position}
        zoom={zoom}
        scrollWheelZoom={true}
        ref={mapRef}
        zoomControl={false}
        fullscreenControl={true}
      >
        <ChangeView center={marker.position} zoom={zoom}/>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomleft"/>
        <Marker position={marker.position} icon={newicon}>
          <Popup>
            <p>Peekaboo</p>
          </Popup>
        </Marker>
      </MapContainer>
      }
    </div>
  )
}

export default Map