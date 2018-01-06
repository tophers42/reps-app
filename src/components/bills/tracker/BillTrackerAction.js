import React from 'react';

class BillTrackerAction extends React.Component {
  render(props, state, context) {
    return (
      <div>
        <ul>
          <li>Action: {props.action.action}</li>
          <li>Date: {props.action.date}</li>
        </ul>
      </div>
    )
  }
}

export default BillTrackerAction;
