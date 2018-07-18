import React, {
  Component
} from 'react';
import {
  database,
  storage
} from './firebase';
import Modal from './Modal.jsx';
import Header from './header.jsx';
import Tumbnails from './tumbnails.jsx';
import {
  size
} from 'lodash';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jeweller: [],
      isOpen: false,
      showMessage: false,
    }

    this.dataBase = database.ref().child('jeweller');
  }

  componentDidMount() {
    this.dataBase.on('value', snap => {
      this.setState({
        jeweller: snap.val()
      });
    });
  }


  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

   timeOut = () => {
     setTimeout( () => this.setState({showMessage: !this.state.showMessage}), 2000)
   } 
  uploadFileAndPushItem = (image, item) => {
    let self = this;
    const uploadTask = storage.ref(image.name).put(image, {
      contentType: image.type
    });
    uploadTask.on('state_changed', (snapshot) => {
      console.log(snapshot.bytesTransferred / snapshot.totalBytes * 100 + '%');
    });

    uploadTask.then((snapshot) => {
      storage.ref().child(image.name).getDownloadURL().then(url => {
        item.image = url;
        item.id = size(self.state.jeweller) + 1
        this.dataBase.push(item);
        this.toggleModal();
        this.setState({showMessage: true});
        this.timeOut();
      })
    });
  }

  render() {
    return ( 
    <div className="App" >
      <Header />
      <div>
      <button className="AddButton"  onClick={  () => this.toggleModal() } >
      Add Item </button> </div>
      {this.state.showMessage ?   
      <div className="alert" >
          <strong>Success!</strong> Item and Image Added.</div> : null }
      {this.state.isOpen ?
      <Modal show={
        this.state.isOpen
      }
      onClose={
        () => this.toggleModal()
      }
      item={
        this.state.item
      }
      saveItem={
        (image, item) => this.uploadFileAndPushItem(image, item)
      } >
      </Modal> : null
      }
      <div style={
        {
          "width": "100%",
          "display": "inline-block"
        }
      } >
      <Tumbnails jeweller={
        this.state.jeweller
      }
      saveItem={
        (image, item) => this.uploadFile(image, item)
      }
      />  
      </div>
 </div>
    );
  }
}

export default App;