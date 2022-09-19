import React, { useRef, useEffect } from 'react';
// arcgis api
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import Point  from '@arcgis/core/geometry/Point';
// app
import { initExtent, basemapNorway, layerNVDB, graphicGeodataOffice } from './mapConfig';
//css
import './MapContainer.css';

// NOTE:
// This file is using ArcGIS JS API to create a map with a basemap and accident layer,
// and adds the map to map container in div tag
// Candidate does not need to change this file, or understand the map API used


function MapContainer({setAccidents, location}) {
  const mapRef = useRef();
  let view = useRef(); 

  useEffect(() => {
    // map
    const map = new Map({
      basemap: basemapNorway,
      layers:[ layerNVDB]
    });
    
    // load the map view at the ref's DOM node
    view.current = new MapView({
      container: mapRef.current,
      map: map,
      extent: initExtent
    });

    // when view and accident layer is loaded, query for data on each update
    view.current.when(() => {
      view.current.whenLayerView(layerNVDB).then(layerView =>{
        // hash fields for fast lookup
        const _fieldsHash = [];
        layerView.layer.fields.forEach(field => {
          if (field.domain && field.domain?.type === "coded-value"){
            _fieldsHash[field.name] = field.domain;
          }      
        });

        // return attributes where domain codes changed to domain values
        // ex: result returns "alvorligste_skadegrad:6429"; code:6429 means "Alvorlig skadd"
        const _getAttributesWithDomainValue = (attributes) => {
          var attributesWithDomainValues = [];
          for (const [key, value] of Object.entries(attributes)) {    
            attributesWithDomainValues[key] = _fieldsHash[key]?.getName(value) ?? attributes[key]
          }
          return attributesWithDomainValues;
        };

        // query for accident data on every accident layer update
        layerView.watch("updating", value => {
          layerView.queryFeatures({
            outFields: layerView.availableFields,
            geometry: view.current.extent
          })
          .then(results => {
            console.log(results)
            // return attributes only
            // loop all features and set domain values on attributes
            const accidentData = results.features.map(feature => {
              return _getAttributesWithDomainValue(feature.attributes);
            });
            setAccidents(accidentData);
          })
          .catch(error => {
            console.log("query failed: ", error);
          });
        })
      });
    });
     
    return () => {
      if (view.current) {
        // destroy the map view
        view.current.container = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Task: goTo location in map
  useEffect(() => {
    if (view.current && location) {
      view.current.graphics.removeAll();
      
      // create point at goTo location
      let pt = new Point(location);
      pt.spatialReference = view.current.spatialReference;

      // use ArcGIS API to got to location
      view.current.goTo({
        center: pt,
        zoom: 15
      }, { duration: 0})
      .then(() => {
        const graphic = graphicGeodataOffice;
        graphic.geometry = pt;
        view.current.graphics.add(graphic);
      })
      .catch(function(error) {
        if (error.name !== "AbortError") {
            console.error(error);
        }
      });
    }
  }, [location]);

  return <div className="MapContainer" ref={mapRef}></div>;
}

export default MapContainer;
