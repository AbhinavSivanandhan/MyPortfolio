import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 160
      }}
      style={{width:"100%",height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[79.1299, 12.9165]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "black",
          strokeWidth: 4,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="maroon">
          {"Vellore"}
        </text>
      </Annotation>
      <Annotation
        subject={[-74.0060, 40.7128]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "black",
          strokeWidth: 4,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="maroon">
          {"New York"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
