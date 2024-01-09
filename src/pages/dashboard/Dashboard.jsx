import { EuiHorizontalRule } from "@elastic/eui";
import { useRef, useEffect, useState } from "react";
import { useTitle } from "ahooks";
import "./Dashboard.css";
import Header from "../../components/header/Header";

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2VudGJ1aTIwN2t0bXQiLCJhIjoiY2xyNTR4bG0wMWZpZjJrbnYxYzhoOGNqdSJ9.jhiYzZRjU9uxGlQ66P1mOQ";

function Dashboard() {
  useTitle("KID-GPS - Portal", {
    restoreOnUnmount: true,
  });

  const breadcrumbs = [
    {
      text: "Dashboard",
      href: "",
    },
    {
      text: "Home",
      href: "/",
    },
  ];

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(106.660172);
  const [lat, setLat] = useState(10.762622);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    const interval = setInterval(getNewLocation, 5000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const getNewLocation = () => {
    const popup = new mapboxgl.Popup({ closeOnClick: true });
    fetch("http://localhost:3000/gps-data")
      .then((response) => response.json())
      .then((data) => {
        if (map.current) {
          map.current.flyTo({
            zoom: 20,
            center: [data.lng, data.lat],
            essential: true,
          });
          setLat(data.lat);
          setLng(data.lng);
        }
        popup.remove();

        popup
          .setLngLat([data.lng, data.lat])
          .setHTML(
            `
          <h1>------CURRENT LOCATION------<h1>
          <h2>HCMUT ELEMENTARY SCHOOL</h2>
          Industry House<br>
          Ho Chi Minh City<br>`
          )
          .addTo(map.current);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  return (
    <div>
      <Header
        breadcrumps={breadcrumbs}
        title="Home"
        rightSideItems={[]}
        description={""}
      />
      <EuiHorizontalRule size="full" />
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <div
          ref={mapContainer}
          style={{
            height: "720px",
          }}
          className="map-container"
        />
      </div>
    </div>
  );
}

export default Dashboard;
