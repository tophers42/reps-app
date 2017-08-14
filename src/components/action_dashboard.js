import { h, Component } from 'preact'
import RepsDisplay from './reps_display'
import ActionsDisplay from './actions_display'

function testAction (person, chamber, district) {
    //TODO: consider making this a util function
    return person.chamber === chamber && person.district === district
  }

class ActionDashboard extends Component {
  constructor (props) {
    super(props)
    // this.props.testAction = this.testAction.bind(this)
  }

  render () {
    const numLower = this.props.districtLower.match(/\d+/g)[0]
    const numUpper = this.props.districtUpper.match(/\d+/g)[0]

    //TODO: consider making 'S' and 'H' constants... possibly connected to testAction as util function?
    const upperRep = this.props.ampData.find(action => testAction(action.person, 'S', numUpper)) || {}
    const lowerRep = this.props.ampData.find(action => testAction(action.person, 'H', numLower)) || {}

    return (
      <div className="action-dashboard">
        <div className="reps-display-container"> 
          <RepsDisplay rep={upperRep} />
          <RepsDisplay rep={lowerRep} />
        </div>
        <ActionsDisplay actions={this.props.ampData} />
      </div>
    )
  }
}

export default ActionDashboard