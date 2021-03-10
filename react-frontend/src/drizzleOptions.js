// importing our contracts artifact file
import DisplayTagline from "./contracts/DisplayTagline.json"

// options to use like which network to connect
// which contract to use, etc.
const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:7545",
    },
  },
  contracts: [DisplayTagline],
  events: {
  }
};

export default options;