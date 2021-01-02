import React, {Component} from 'react';

class TimeUntil extends Component {
  state = {

  }

  render () {
    return(
      <div className="countdown_wrapper">
        <div className="countdown_top">
          Event starts in
        </div>
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">
              12
            </div>
            <div className="countdown_tag">
              Days
            </div> 
          </div>
          <div className="countdown_item">
            <div className="countdown_time">
              25
            </div>
            <div className="countdown_tag">
              Hs
            </div>
            <div className="countdown_item">
            <div className="countdown_time">
              16
            </div>
            <div className="countdown_tag">
              Min
            </div>
            <div className="countdown_item">
            <div className="countdown_time">
              22
            </div>
            <div className="countdown_tag">
              sec
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TimeUntil;