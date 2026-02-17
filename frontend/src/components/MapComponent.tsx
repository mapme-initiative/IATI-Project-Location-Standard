/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from "react";
import {GeoJSON, LayersControl, MapContainer, TileLayer, useMap, ZoomControl} from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import 'leaflet.fullscreen/Control.FullScreen.css';
import 'leaflet.fullscreen';
import './scss/MapComponent.scss';


interface GeoJSONFeature {
  type: "Feature";
  geometry: {
    type: "Point" | "Polygon" | "LineString";
    coordinates: number[] | number[][] | number[][][];
  };
  properties: NonNullable<unknown>;
}
interface GeoJSONCollection {
  type: "FeatureCollection";
  features: GeoJSONFeature[];
}

interface MapComponentProps {
  geoJsonData?: {
    type: "FeatureCollection";
    features: GeoJSONFeature[];
  };
}
let controlAdded = false;

// Fullscreen control component
const FullscreenControl: React.FC = () => {
  const map = useMap();
  // Add fullscreen control only once
  if (!controlAdded) {
    const fullscreenControl = L.control.fullscreen({ position: "topleft" });
    fullscreenControl.addTo(map);
    controlAdded = true; // Mark as added
  }

  return null;
};

/**
 * Checks if the given coordinates array contains any NaN values.
 * @param coordinates - The coordinates to check.
 * @returns true if any NaN is found, false otherwise.
 */
function hasInvalidCoordinates(coordinates: number[] | number[][] | number[][][]): boolean {
  if (Array.isArray(coordinates)) {
    return coordinates.some((coord) =>
      Array.isArray(coord) ? hasInvalidCoordinates(coord) : isNaN(coord)
    );
  }
  return false;
}

/**
 * Filters the features array to remove those with invalid coordinates.
 * @param features - Array of GeoJSON features.
 * @returns A new array containing only valid features.
 */
function filterValidFeatures(features: GeoJSONFeature[]): GeoJSONFeature[] {
  return features.filter((feature) => !hasInvalidCoordinates(feature.geometry.coordinates));
}

const MapComponent: React.FC<MapComponentProps> = ({ geoJsonData }) => {

  const validGeoJsonData: GeoJSONCollection = geoJsonData && geoJsonData.features ? {
    type: "FeatureCollection",
    features: filterValidFeatures(geoJsonData?.features)
  } : null;

  const onEachFeature = (feature: any, layer: L.Layer) => {
    if (feature.properties) {
      const props = feature.properties;
      const timeLapseLink = feature.timelapse_link ?
        `<a href="${feature.timelapse_link}" target="_blank">Timelapse Link</a>` : "";

      // Create a formatted HTML string with all the requested fields in the exact order from the table
      const popupContent = `
        <div class="map-popup">
          <h3>${props.locationName || 'N/A'}</h3>
          <div class="popup-content">
            <p><span class="popup-label">Unique ID:</span> <span class="popup-value">${props.uniqueId || 'N/A'}</span></p>
            <p><span class="popup-label">Inpro Nr.:</span> <span class="popup-value">${props.kfwProjectNoINPRO || 'N/A'}</span></p>
            <p><span class="popup-label">Project Acronym:</span> <span class="popup-value">${props.projectAcronym || 'N/A'}</span></p>
            <p><span class="popup-label">Data Owner:</span> <span class="popup-value">${props.dataOwner || 'N/A'}</span></p>
            <p><span class="popup-label">Publishing Restrictions:</span> <span class="popup-value">${props.publishingRestrictions || 'N/A'}</span></p>
            <p><span class="popup-label">Date of Data Collection:</span> <span class="popup-value">${props.dateOfDataCollection || 'N/A'}</span></p>
            <p><span class="popup-label">Location Identifier:</span> <span class="popup-value">${props.projectSpecificLocationIdentifier || 'N/A'}</span></p>
            <p><span class="popup-label">Location name:</span> <span class="popup-value">${props.locationName || 'N/A'}</span></p>
            <p><span class="popup-label">Activity Status:</span> <span class="popup-value">${props.locationActivityStatus || 'N/A'}</span></p>
            <p><span class="popup-label">Start Date:</span> <span class="popup-value">${props.plannedOrActualStartDate || 'N/A'}</span></p>
            <p><span class="popup-label">End Date:</span> <span class="popup-value">${props.plannedOrActualEndDate || 'N/A'}</span></p>
            <p><span class="popup-label">Activity Description:</span> <span class="popup-value">${props.activityDescriptionGeneral || 'N/A'}</span></p>
            <p><span class="popup-label">Activity Details:</span> <span class="popup-value">${props.additionalActivityDescription || 'N/A'}</span></p>
            <p><span class="popup-label">Location Type:</span> <span class="popup-value">${props.sector_location?.location_type || 'N/A'}</span></p>
            <p><span class="popup-label">DAC5 Sector:</span> <span class="popup-value">${props.dac5PurposeCode || 'N/A'}</span></p>
            <p><span class="popup-label">Geographic Exactness:</span> <span class="popup-value">${props.geographicExactness || 'N/A'}</span></p>
            <p><span class="popup-label">Related Community or Village:</span> <span class="popup-value">${props.relatedCommunityVillageNeighborhood || 'N/A'}</span></p>
            <p><span class="popup-label">Scheme Version:</span> <span class="popup-value">${props.schemeVersion || 'N/A'}</span></p>
            ${timeLapseLink ? `<div>${timeLapseLink}</div>` : ''}
          </div>
        </div>
      `;

      layer.bindPopup(popupContent);
    }
  };

  return (
    <MapContainer
      center={[20, 30]} // Default center of the map
      zoom={2} // Default zoom level
      style={mapContainerStyle}
      zoomControl={false} // Disable default zoom control, we'll add it manually
    >
      {/* Add Zoom Control (Top Left) */}
      <ZoomControl position="topleft" />

      {/* Add Fullscreen Control */}
      <FullscreenControl />

      {/* Base Layers */}
      <LayersControl position="topleft">
        <LayersControl.BaseLayer name="GoogleStreets">
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
            maxZoom={20}
            attribution="Map data © GoogleMaps contributors"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer checked name="GoogleHybrid">
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
            maxZoom={20}
            attribution="Map data © GoogleMaps contributors"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="GoogleEarth">
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
            maxZoom={20}
            attribution="Map data © GoogleMaps contributors"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="GoogleTerrain">
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
            maxZoom={20}
            attribution="Map data © GoogleMaps contributors"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
        </LayersControl.BaseLayer>
      </LayersControl>

      {/* GeoJSON Layer */}
      {validGeoJsonData && <GeoJSON data={validGeoJsonData} onEachFeature={onEachFeature} />}
    </MapContainer>

  );
};

export default MapComponent;

const mapContainerStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "left",
  width: "100%", // Full width to match text description
  maxWidth: "100%", // Remove previous constraint of 1280px to use full width
  aspectRatio: "16 / 13.5", // Adjusted from 16/9 to make it 50% taller
  margin: "20px 0",
};