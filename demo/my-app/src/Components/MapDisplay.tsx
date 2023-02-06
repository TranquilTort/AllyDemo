import * as React from 'react';

declare var google: any;

interface Props {
  lat: number;
  lng: number;

}


class GoogleMap extends React.Component<Props> {
  map: any;

  componentDidMount() {
    console.log(this.props.lat);
    console.log(this.props.lng);
    this.map = new google.maps.Map(
      document.getElementById('map'),
      {
        center: { lat: this.props.lat, lng: this.props.lng },
        zoom: 8,
      }
    );
    const marker = new google.maps.Marker({
      position: { lat: this.props.lat, lng: this.props.lng },
      map: this.map,
      label: 'A',
      draggable: true
    });
  }

  render() {
    return <div id="map"/>;
  }
}


export default GoogleMap;
