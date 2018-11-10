import React from 'react';

class AmendClaim extends React.Component {
  submit(e) {
    e.preventDefault();
    const claimAmountSet = this.claimAmountSet.value;
    const payAmountSet = this.payAmountSet.value;
    const feeAmountSet = this.feeAmountSet.value;
    const accuracy = this.accuracy.value;
    const state = this.props.state;
    const instance = state.instance;



    const printVariables = ()=> {
      // find out how to directly access smart contract variables and print them
    };

    const amendClaim = async () => {
      const result = instance.amendClaim(claimAmountSet, payAmountSet, feeAmountSet, accuracy, { from: state.web3.eth.accounts[0]}).then((result) => {

        this.props.initModal(0);

        printVariables();
        return
      });

      return result
    };

    amendClaim().then(function(res, err) {

    });
  }

  render() {
    return (
      <form className="hello-form" onSubmit={(e) => this.submit(e)}>
        <input ref={(input) => this.claimAmountSet = input} type="number"/>
        <input ref={(input) => this.payAmountSet = input} type="number"/>
        <input ref={(input) => this.feeAmountSet = input} type="number"/>
        <input ref={(input) => this.accuracy = input} type="number" />
        <button type="submit" value="Submit" className="button-submit js-button-submit">Submit</button>
      </form>
    )
  }
}

export default AmendClaim;
