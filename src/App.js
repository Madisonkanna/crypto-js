import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    pass: null
  }

  async generateKey(e) {
    // TODO w/ Rsa key: https://mdn.github.io/dom-examples/web-crypto/derive-key/index.html
    e.preventDefault()

    const pass = this.refs.passphraseItem.value;
    //TextEncoder exposes encode func which returns Uint8Array obj
    // const passwordBuffer = new TextEncoder("utf-8").encode(pass)
    // const importedKey = await crypto.subtle.importKey("raw", passwordBuffer, "PBKDF2", false, ["deriveBits"])
    // const saltBuffer = TextEncoder.encode(salt)
    // const params = {name: "PBKDF2", hash: hash, salt: saltBuffer, iterations: iterations}

    // console.log(importedKey)


    // console.log(pass)


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

  }


  render() {
    const { pass } = this.state;






    return (


      <div className="App">
        <header className="App-header">
          <form  onSubmit={e => this.generateKey(e)}>
            <label>
              pass

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
