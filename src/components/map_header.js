import { h, Component } from 'preact'
import AutocompleteContainer from './autocomplete'
import { DATA_FINE_PRINT } from '../constants'

class MapHeader extends Component {
  render () {
    return (
      <div className="MapHeader">
        <div className="MapHeader-left">
          <h5>Change address:</h5>
          <AutocompleteContainer stateDistricts={this.props.stateDistricts} />
          <h6>{DATA_FINE_PRINT}</h6>
        </div>
        {/* TODO: make <MiniMap /> */}
      </div>
    )
  }
}

export default MapHeader
