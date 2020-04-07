import React from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer , Marker, Popup, Circle } from 'react-leaflet';
import { Location as LocationAction } from 'actions/Location';
import { BusinessAddress as BusinessAddressAction } from 'actions/BusinessAddress';
import { MultiCascader, Slider, Button } from 'rsuite';
import AlgoliaPlaces from 'algolia-places-react';
import { APP_ID, API_KEY } from 'constants/algoliaPlacesCredentials';

const defaultRadius = 10;

class Test extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showMap: false,
            center: null,
            radius: defaultRadius
        };
    }

    componentDidMount(){
        this.props.LocationAction();
    }

    render(){
        const { locations } = this.props;
        return (
            <div>
                <MultiCascader 
                    childrenKey='city'
                    labelKey='name'
                    valueKey='id'
                    menuHeight={400}
                    menuWidth={368}
                    data={locations}            
                />
                <br/>
                <br/>
                <h4>Cerca per indirizzo</h4>
                <br/>
                <br/>
                <AlgoliaPlaces
                    placeholder='Indirizzo'
                
                    options={{
                        appId: APP_ID,
                        apiKey: API_KEY,
                        language: 'it'
                        // Other options from https://community.algolia.com/places/documentation.html#options
                    }}
                
                    onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
                        let latlng = Object.values(suggestion['latlng']);
                        this.props.BusinessAddressAction(latlng, this.state.radius);
                        this.setState({center: latlng, showMap: true});
                    }}
                />
                <br/>
                <br/>
                <Slider
                    defaultValue={defaultRadius}
                    min={0}
                    onChange={(r) =>
                        this.setState({radius: r})
                    }
                    step={5}
                    max={50}
                    progress
                    graduated
                    renderMark={mark => {
                        return mark + 'km';
                    }}
                />
                <br/>
                <br/>
                <br/>
                {this.state.showMap ?
                    <Map center={this.state.center} zoom={11} style={{width: '100%', height: 525, border: '2px solid #1675e0'}}>
                        <Circle center={this.state.center} radius={this.state.radius*1000}/>
                        <TileLayer 
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />
                        {Object.values(this.props.businessesAddresses).map((val)=>(
                            <Marker position={[val.lat, val.lng]}>
                                <Popup>
                                    <b>{val.name}</b>
                                    <br/>
                                    {Object.values(val.business).map((v) => (
                                        <div>
                                            {v.name}
                                        </div>
                                    ))}
                                </Popup>
                            </Marker>
                        ))}
                    </Map>
                    :
                    ''
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        businessesAddresses: state.businessesAddresses,
        locations: state.locations
    };
};

export default connect(mapStateToProps, { LocationAction, BusinessAddressAction })(Test);