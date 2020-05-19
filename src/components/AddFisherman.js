import React from 'react'
import FishermanActions from "../actions/FishermanActions";

class AddCatch extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {isAddShown: false,
                      name:'',
                      address:'',
                      email:'',
                      phoneNumber:'',
                      equipment:'',
                      bait: '',
                      fishingPole: '',
                      preferredTech: '',
                      certificateNumber: ''
                    }
    }
    
    componentDidMount() {
        window.scrollTo(0,0)
    }

    displayForm = () => {
        this.setState(
            { isAddShown: !this.state.isAddShown }
        )
    }

    addForm = () => {
      return (
          <table className="table table-bordered table-striped">
              <tbody>
              <tr>
                  <td>Name</td>
                  <td><input
                      type="text"
                      value={this.state.name}
                      onChange={(e)=>{
                          this.setState({
                              name : e.target.value
                          });
                      }}
                  /></td>
              </tr>
              <tr>
                  <td>Address</td>
                  <td><input
                      type="text"
                      value={this.state.address}
                      placeholder="Country, City, Street"
                      onChange={(e)=>{
                          this.setState({
                              address : e.target.value
                          });
                      }}
                  /></td>
              </tr>
              <tr>
                  <td>Email</td>
                  <td><input
                      type="email"
                      value={this.state.email}
                      placeholder="Ex.: xd@xd.hu"
                      onChange={(e)=>{
                          this.setState({
                              email : e.target.value
                          });
                      }}
                  /></td>
              </tr>
              <tr>
                  <td>Phone number</td>
                  <td><input
                      type="text"
                      className="input"
                      value={this.state.phoneNumber}
                      onChange={(e)=>{
                          this.setState({
                              phoneNumber : e.target.value
                          });
                      }}
                  /></td>
              </tr>
              <tr>
                  <td>Equipment</td>
                  <td><input
                      type="text"
                      value={this.state.equipment}
                      onChange={(e)=>{
                          this.setState({
                              equipment : e.target.value
                          });
                      }}
                  /></td>
              </tr>
              <tr>
                  <td>Bait</td>
                  <td><input
                      type="text"
                      value={this.state.bait}
                      onChange={(e)=>{
                          this.setState({
                              bait : e.target.value
                          });
                      }}
                  /></td>
              </tr>
              <tr>
                  <td>Fishing pole</td>
                  <td><input
                      type="text"
                      value={this.state.fishingPole}
                      onChange={(e)=>{
                          this.setState({
                              fishingPole : e.target.value
                          });
                      }}
                  /></td>
              </tr>
              <tr>
                  <td>Preferred technique</td>
                  <td><textarea
                      value={this.state.preferredTech}
                      onChange={(e)=>{
                          this.setState({
                              preferredTech : e.target.value
                          });
                      }}
                  /></td>
              </tr>
              <tr>
                  <td>Certificate number</td>
                  <td><input
                      type="text"
                      value={this.state.certificateNumber}
                      onChange={(e)=>{
                          this.setState({
                              certificateNumber : e.target.value
                          });
                      }}
                  /></td>
              </tr>
              <tr>
                  <td colSpan={2}><button
                      className="btn btn-info"
                      onClick={() => {FishermanActions.addFisherman(this.state);
                                      this.displayForm()}}
                  >Add</button>
                  </td>
              </tr>
              </tbody>
          </table>
        )
    }

    render() {
        return (
            <div className="container-fluid">
                <button className="btn btn-info m-3" onClick={this.displayForm}>Show add fisherman form</button>
                {this.state.isAddShown ? this.addForm() : null}
           </div>
        )
    }
}

export default AddCatch;