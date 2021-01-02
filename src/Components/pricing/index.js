import React, {Component} from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {
  state={
    prices:[5000, 20000, 100000],
    positions:['REGULAR', 'VIP', 'VVIP' ],
    desc:[
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ],
    linkto:['http://sales/b','http://sales/b','http://sales/b'],
    delay:[500, 0, 500]
  }

  showBoxes = () => (
   this.state.prices.map((box,i)=>(
     <Zoom delay={this.state.delay[i]}key={i}>
      <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>₦{this.state.prices[i]}</span> <br/>
            <span>{this.state.positions[i]}</span>
          </div>
          <div className="pricing_description">
          {this.state.desc[i]}
          </div>
          <div className="pricing_buttons">
            <MyButton
              text="purchase"
              bck="#ffa800"
              color="#fff"
              link={this.state.linkto[i]}
            />
          </div>

        </div>
      </div>
     </Zoom>
   ) )
  )

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">
             {this.showBoxes()}
          </div>

        </div>
      </div>
    );
  }
}

export default Pricing;