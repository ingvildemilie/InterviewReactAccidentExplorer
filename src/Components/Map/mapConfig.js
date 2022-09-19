// arcgis api
import Basemap from '@arcgis/core/Basemap';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import Graphic from '@arcgis/core/Graphic';


//NOTE:
// This file contains configuration for the map.
// Candidate does not neeed to change or understand the configuration in this file

// Basemap using Geodata vector basemap 'GeocacheBasisTerreng'
export const basemapNorway = new Basemap({
    baseLayers: [ 
        new VectorTileLayer({   
            url: "https://services.geodataonline.no/arcgis/rest/services/GeocacheVector/GeocacheBasisTerreng/VectorTileServer"
        })                  
    ]
});

// NVDB Norsk Veidatabank
export const layerNVDB = new FeatureLayer({
    portalItem: {
      id: 'c985fb2357f9466784107b4905629375',
    },
    outFields: ['alvorligste_skadegrad', 'ulykkesdato','ulykkestidspunkt','uhell_kategori','antall_drepte_i_ulykken','antall_meget_alvorlig_skadet','antall_alvorlig_skadet','antall_lettere_skadet','fartsgrense'],
    title: 'NVDB',
    timeExtent: { // show only nvdb features from 2019
        start: new Date(2019, 1, 1),
        end: new Date(2020, 1, 1)
      },
    useViewTime: false,
    renderer: { // override render
        type: "simple", 
        symbol: {
            type: "simple-marker",  
            style: "circle",
            size: 6,
            color: [ 255, 0, 0 , 0.9],
            outline: {  
                color: [ 255, 0, 0, 0.4],
                width: 5  
            }
        }
    },
    featureReduction: {
        type: "cluster",
        clusterRadius: "100px",
        // {cluster_count} is an aggregate field containing
        // the number of features comprised by the cluster
        popupTemplate: {
          title: "Accident summary",
          content: "This cluster represents {cluster_count} accidents.",
          fieldInfos: [{
            fieldName: "cluster_count",
            format: {
              places: 0,
              digitSeparator: true
            }
          }]
        },
        clusterMinSize: "24px",
        clusterMaxSize: "60px",
        labelingInfo: [{
          deconflictionStrategy: "none",
          labelExpressionInfo: {
            expression: "Text($feature.cluster_count, '#,###')"
          },
          symbol: {
            type: "text",
            color: "white",
            font: {
              weight: "bold",
              family: "Noto Sans",
              size: "12px"
            }
          },
          labelPlacement: "center-center",
        }]
      }
});

// init extent
export const initExtent = { 
    xmax: 290000,
    xmin: 260000,
    ymax: 6630000,
    ymin: 6615000,
    spatialReference: {wkid: 25833}
}

// graphic for Geodata office
export const graphicGeodataOffice = new Graphic({
    attributes: {"Name": "Geodata AS"},
    symbol: {
        type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
        url: "/logo192.png",
        width: "30px",
        height: "30px"
    }
  });






