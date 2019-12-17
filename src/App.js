import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    pass: null
  }

  deriveKey = (e) => {
    // TODO w/ Rsa key: https://mdn.github.io/dom-examples/web-crypto/derive-key/index.html
    e.preventDefault()

    const pass = this.refs.passphraseItem.value;
    console.log('Passphrase', pass)

    this.setState({
      pass
    })


//NOTE: This prompts the user to enter a password.
  // crypto.subtle.generateKey(
  //   {
  //       name: "PBKDF2",
  //   },
  //   false, //whether the key is extractable (i.e. can be used in exportKey)
  //   ["deriveKey", "deriveBits"] //can be any combination of "deriveKey" and "deriveBits"
  // )
  // .then(function(key){
  //   //returns a key object
  //   console.log(key);
  // })
  // .catch(function(err){
  //   console.error(err);
  // });
  //   }


  render() {
    const { pass } = this.state;






    return (


      <div className="App">
        <header className="App-header">
          <form  onSubmit={e => this.deriveKey(e)}>
            <label>
              Name:

            </label>
            <input type="text" placeholder="Enter pass" ref="passphraseItem" />
            <button>Click</button>
            <div>{pass}</div>
          </form>

        </header>
      </div>
    );

  }
}

export default App;
