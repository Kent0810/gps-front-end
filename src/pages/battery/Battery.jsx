import Header from "../../components/header/Header.jsx";
import {EuiButton, EuiCard, EuiFlexGroup, EuiFlexItem, EuiHorizontalRule, EuiBeacon} from "@elastic/eui";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import {useEffect, useRef} from "react";
import mapboxgl from "mapbox-gl";
export const Battery = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    const breadcrumbs = [
        {
            text: "Dashboard",
            href: "",
        },
        {
            text: "Battery",
            href: "/",
        },
    ];
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [ 106.660172, 10.762622 ],
            zoom: 16,
        });
    }, []);
    return (
        <div>
            <Header
                breadcrumps={breadcrumbs}
                title="Battery"
                rightSideItems={[]}
                description={""}
            />
            <EuiHorizontalRule size="full"/>
            <EuiFlexGroup gutterSize="l">
                <EuiFlexItem>
                    <EuiCard
                        style ={{
                            width: "300px"
                        }}
                        textAlign="left"
                        image={
                            <div
                                style={{
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    ref={mapContainer}
                                    style={{
                                        height: "200px",
                                    }}
                                    className="map-container"
                                />
                            </div>
                        }
                        title="TTGO 77"
                        description="268 Lý Thường Kiệt, Phường 14, Quận 10, Thành Phố Hồ Chí Minh"
                        footer={
                            <EuiFlexGroup justifyContent="space-evenly" alignItems="center">
                                <EuiFlexItem>
                                    <EuiButton onClick={() => {alert("Sound Played")}}><EuiBeacon /> Mark As Lost</EuiButton>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column-reverse",
                                        alignItems: "center",
                                    }}>
                                        <span>78%</span>
                                        <FontAwesomeIcon size={"lg"} icon={faBatteryThreeQuarters} />
                                    </div>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        }
                    />
                </EuiFlexItem>
            </EuiFlexGroup>
        </div>
    );
}

export default Battery