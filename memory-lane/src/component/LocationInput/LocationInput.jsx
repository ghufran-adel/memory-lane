
import "./LocationInput.scss";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

function LocationInput({ setlongitude, setlatitude, setlocation, location }) {
  const handleChangea = (newAddress) => {
    setlocation(newAddress);
  };

  const handleSelect = (newAddress) => {
    setlocation(newAddress);
    geocodeByAddress(newAddress)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        setlatitude(latLng.lat);
        setlongitude(latLng.lng);
      })
      .catch((error) => console.error("Error", error));
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
                placeholder: "Search Places ...",
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
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
  );
}

export default LocationInput;
