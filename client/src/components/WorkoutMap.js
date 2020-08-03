import React, { useState } from 'react'
import ReactMapGL, { Popup, Marker, FlyToInterpolator } from 'react-map-gl';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const WORKOUTS_QUERY = gql`
    query WorkoutsQuery{
        exercises {
            workout_day
            workout_type
            workout_duration
            workout_location_lat
            workout_location_lon
        }
}`



const WorkoutMap = () => {

    const viewPortWidth = () => {
        if (window.innerWidth < 700) {

            return window.innerWidth

        }
        return window.innerWidth

    }
    const viewPortHeight = () => {
        if (window.innerWidth < 700) {
            return window.innerHeight * .9
        }
        return window.innerHeight

    }
    const viewPortZoom = () => {
        if (window.innerWidth < 700) {
            return 1
        }
        return 1

    }

    const [viewport, setViewport] = useState({
        width: viewPortWidth(),
        height: viewPortHeight(),
        latitude: 38.2,
        longitude: -96.06,
        zoom: viewPortZoom(),
        transitionDuration: null,


    });

    const zoomChange = (value) => {
        const newport = {
            ...viewport,
            zoom: viewport.zoom + value,
            transitionDuration: 5000,
            transitionInterpolator: new FlyToInterpolator()

        }
        setViewport(newport)


    }

    const _onViewportChange = viewport => {
        setViewport(viewport)
    }

    const [mapStatic, setMapStatic] = useState(true)


    return (
        <div>
            <ReactMapGL
                {...viewport}
                className="react-map"
                width={viewport.width}
                height={viewport.height}
                latitude={viewport.latitude}
                longitude={viewport.longitude}
                zoom={viewport.zoom}
                mapStyle="mapbox://styles/bartconsedine/ck4cxmh5r3m8u1co20pckaesc"
                mapboxApiAccessToken='pk.eyJ1IjoiYmFydGNvbnNlZGluZSIsImEiOiJjazBudWVxajUwMXdlM2hwZzFzcDQ5cWR5In0.376OjUpSFMy-y-PVfAeO9A'
                onViewportChange={_onViewportChange}
                dragPan={mapStatic}
                scrollZoom={mapStatic}
                minZoom={2}
            >
                <Query query={WORKOUTS_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return <div className="spinner-border"></div>
                        if (error) console.log(error)
                        return (
                            <>
                                {
                                    data.exercises.map((workout, index) =>
                                        <Marker
                                            className={"marker"}
                                            key={index}
                                            latitude={parseFloat(workout.workout_location_lat)}
                                            longitude={parseFloat(workout.workout_location_lon)}
                                            // onClick={async (e) => {
                                            //     markerClickedHandler(
                                            //         parseFloat(item[1]), 
                                            //         parseFloat(item[2]),
                                            //         item[0]
                                            //     )
                                            // }
                                            // }
                                        >
                                            <div className="spinner-grow spinner-grow-sm red"></div>
                                        </Marker>
                                    )
                                }
                            </>
                        )
                    }}
                </Query>


            </ReactMapGL>
        </div>
    )
}

export default WorkoutMap