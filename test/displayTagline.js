/* Here, we are importing our contract's artifact file i.e. using 'require'.
 * This 'artifacts' object is injected by truffle into each test file,
 * so that we can manipulate our smart contract. This is beacuse, there is no
 * other way for Truffle to tell which smart-contract we are interacting with.
 * 
 */
const DisplayTagline = artifacts.require('DisplayTagline')

/* 'contract()' is similar to 'describe()' of Mocha, except it enables Truffle's
 * clean-room features. Clean-room beacuse your contracts are redeployed to your 
 * Ethereum client(in our case Ganache), so that the tests within it run with a 
 * clean contract state. 
 * 
 * 'contract()' have access to all the functions of 'describe()' block, 
 * so that we can use whatever fucntion we want from Mocha.
 * 
 */
contract('DisplayTagline', () => {

    // variable declaration
    let displayTagline

    // this will run before any asynchronous test
    before(async () => {

        // it returns an instance of our deployed smart-contract
        displayTagline = await DisplayTagline.deployed()
    })

    /* This is the first test to check if the contract has been 
     * deployed successfully or not. The logic here is that if a 
     * contract has been deployed successfully its address should 
     * not be null, undefined, empty, or 0x0.
     * 
     */
    it('Deployed Successfully', async () => {
        const address = await displayTagline.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
      })

    /* It's the second test to check if the state variable 'tagline' 
     * has a initial value or not. Also, has the same value which we want.
     *
     */
    it('State variable has a value', async () => {
      const tagline = await displayTagline.tagline()
      assert.notEqual(tagline, '')
      assert.equal(tagline, 'Blockchain is the Future!')
    })

    /* It is the third test to check the 'update' function of our contract.
     * As per our smart-contract, the update function updates the value of 
     * our state variable. So to test this, first call the 'update' function
     * and provide it with a string value so that it can update our state variable.
     * Now call the state variable and check it's value using 'asset.equal()'.
     * 
     */
    it('Updates Value of state variable', async () => {
      await displayTagline.update('Welcome to TechFervour!')
      const newTagline = await displayTagline.tagline()
      assert.equal(newTagline, 'Welcome to TechFervour!')
    })

})