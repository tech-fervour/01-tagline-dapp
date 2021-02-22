// SPDX-License-Identifier: MIT

/**
*  "pragma" keyword is used to declare the version of solidity to use,
*  the version of solidity is required to enable certain compiler features.
*  Have to add the "pragma" to all files if you want to enable it in all of your project.
**/

// Declaring version of solidity to use
pragma solidity >=0.4.22 <0.9.0;

/**
 *  Contracts are similar to classes in object-oriented languages.
 *  They contain persistent data in state variables and
 *  functions that can modify these variables.
 **/

// Declaring a contract
contract DisplayTagline {

    /**
     *  State variables are variables whose values
     *  are permanently stored in contract storage.
     *  In solidity, we have to declare the type of each variable
     **/

    // Declaring state variables
    // the "public" keyword, as the name suggests
    // makes the variable accessible from other contracts
    string public tagline;

    /**
     *  Constructor is a function declared with the "constructor" keyword.
     *  Constructor only runs when the contract is created.
     *  Constructors can be used to contain the contract initialization code.
     **/

    // Defining a constructor
    constructor() public {

        // setting the default value
        // into the contract's 'tagline' storage variable.
        tagline = 'we write about blockchain';
    }

    // A public function that accepts a string argument
    // and updates the 'tagline storage variable.
    function update(string memory newTagline) public {

        tagline = newTagline;
    }

}
