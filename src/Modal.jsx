import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty} from 'lodash';
import './Modal.css';
const keys = ['name', 'materials', 'types']
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeFile = this.onChangeFile.bind(this)
    this.state = {
      image: null,
      name: '',
      materials: '',
      types:'',
      isDisable: false,

    }
  }

  componentDidMount = () => {
    if(!isEmpty(this.props.item)) {
      let item = {};
      keys.map(key => 
        item[key]=this.props.item[key]
      )
      item['isDisable'] = true
      this.setState(item); 
    }
  }

  onChangeFile=(e) => {
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0]})
    }
  }

  onChangeInput=(event, key) => {
    let item={};
    item[key]=event.target.value;
    this.setState(item);
  }

  saveItem=() => {
   let item={};
   keys.map(key => item[key]=this.state[key]) 
    this.props.saveItem(this.state.image,item); 
  }

  render() {
    return (
      this.props.show ?
        <div className="popover-container">
          <div className="popover">
            <div style={{ "float": "right", 
                          "width": "inherit"}}>
              {!this.state.isDisable ?
              <button onClick={() => this.saveItem()}>
                Save
              </button>: null
              }
              <button onClick={() => this.props.onClose()}>
                Close
              </button>
              </div>
                <div className="itemheading">
                  <div className="itemheadingBorder">Item Info</div>
                </div>
                <div className="ml15">
                  <label className="labelForInput">Name</label>
                  <input class="inputbox" type="text" placeholder="Name of Jewellery" onChange={(e) => this.onChangeInput(e, 'name')} value={this.state.name} disabled={this.state.isDisable} />
                </div>
                <div className="ml15">
                  <label className="labelForInput">Material</label>
                  <input class="inputbox" type="text" placeholder="Material of Jewellery" onChange={(e) => this.onChangeInput(e, 'materials')} value={this.state.materials} disabled={this.state.isDisable} />
                </div>
                <div className="ml15">
                  <label className="labelForInput">Types</label>
                  <input class="inputbox" type="text" placeholder="Types of Jewellery" onChange={(e) => this.onChangeInput(e, 'types')} value={this.state.types} disabled={this.state.isDisable} />
                </div>
                {!this.state.isDisable ?
                <div className="ml15">
                  <label className="label_file">Upload Item Image</label>
                  <input type="file" onChange={this.onChangeFile} />
                </div>: null }
              </div>
            </div> : null
        );
      }
    }
      
    Modal.propTypes = {
              onClose: PropTypes.func.isRequired,
            show: PropTypes.bool,
            children: PropTypes.node,
            item: PropTypes.object,
            saveItem: PropTypes.func,
          };
          
export default Modal;