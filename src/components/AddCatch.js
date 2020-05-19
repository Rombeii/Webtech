import React from 'react'
import CatchActions from "../actions/CatchActions";

class AddCatch extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {isAddShown: false,
                      specie:'',
                      weight:'',
                      lake:'',
                      coordinates:'',
                      dateOfCatch:''
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
                  <td>Specie</td>
                  <td><input
                      type="text"
                      value={this.state.specie}
                      onChange={(e)=>{
                          this.setState({
                              specie : e.target.value
                          });
                      }}
                  /></td>
              </tr>
              <tr>
                  <td>Weight</td>
                  <td><input
                      type="number"
                      value={this.state.weight}
                      onChange={(e)=>{
                          let temp = e.target.value > 0 ? e.target.value : 0
                          this.setState({
                              weight : temp
                          });
                      }}
                  /></td>
              </tr>
              <tr>
                  <td>Lake</td>
                  <td><input
                      type="text"
                      value={this.state.lake}
                      onChange={(e)=>{
                          this.setState({
                              lake : e.target.value
                          });
                      }}
                  /></td>
              </tr>
              <tr>
                  <td>Coordinates</td>
                  <td><input
                      type="text"
                      className="input"
                      value={this.state.coordinates}
                      placeholder="Ex.: '(12.3456,-98.7654)'"
                      onChange={(e)=>{
                          this.setState({
                              coordinates : e.target.value
                          });
                      }}
                  /></td>
              </tr>
              <tr>
                  <td>Date of catch</td>
                  <td><input
                      type="date"
                      value={this.state.dateOfCatch}
                      onChange={(e)=>{
                          this.setState({
                              dateOfCatch : e.target.value
                          });
                      }}
                  /></td>
              </tr>
              <tr>
                  <td colSpan={2}><button
                      className="btn btn-info"
                      onClick={() => {CatchActions.addCatch(this.state, this.props.fishermanId);
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
            <div>
                <button className="btn btn-info m-3" onClick={this.displayForm}>Show add catch form</button>
                {this.state.isAddShown ? this.addForm() : null}
           </div>
        )
    }
}

export default AddCatch;