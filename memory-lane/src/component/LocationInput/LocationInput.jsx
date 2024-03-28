
import React, { useState } from "react";
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';




function LocationInput({setlongitude ,setlatitude, setlocation ,location}) {
    // const [location, setlocation] = useState(null);
    // const [latitude , setlatitude] = useState(null);
    // const [longitude , setlongitude] =useState(null);
  
    const handleChangea = newAddress => {
      setlocation(newAddress);
    };
  
    
    const handleSelect = newAddress => {
      // console.log(newAddress);
      setlocation(newAddress)
      geocodeByAddress(newAddress)
        .then(results => getLatLng(results[0]))
        .then(latLng => {console.log('Success', latLng)
                        setlatitude(latLng.lat)
                        setlongitude(latLng.lng)
      })
        .catch(error => console.error('Error', error));
    };
    
  return (
    <div>
        
        <PlacesAutocomplete
      value={location}
      onChange={handleChangea}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>



    </div>
  )
}

export default LocationInput