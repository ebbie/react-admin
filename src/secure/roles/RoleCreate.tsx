import React, {Component, SyntheticEvent} from 'react';
import Wrapper from '../Wrapper';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Permission } from '../../classes/permissions';


class RoleCreate extends Component {
        state = {
            permissions: [],
            redirect: false,
            loadPermissions: false,
        }
        selected: number[] = [];
        name = '';
    componentDidMount = async () => {
        const response = await axios.get('permissions');
        this.setState({
            permissions: response.data.data,
            loadPermissions: true
        });
    }

    check = (id: number) => {
        
        if(this.selected.filter(s => s === id).length > 0) {
            this.selected = this.selected.filter(s => s !== id);  
            return;          
        }
        this.selected.push(id);
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.post('roles', {
            name: this.name,
            permissions: this.selected
        });

        this.setState({
            redirect: true
        });
        console.log("selected array is: ",this.selected);
    }
    render() {
        if(this.state.redirect){
            return <Redirect to={'/roles'} />
        }
        return (
            <Wrapper>
                 <form onSubmit={this.submit}>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="name" id="name"
                            onChange={e => this.name = e.target.value}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Permissions</label>
                        <div className="col-sm-10">
                            {this.state.permissions.map(
                                (p: Permission) => {
                                    return (
                                        <div className="form-check form-check-inline col-3" key={p.id}>
                                            <input className="form-check-input" type="checkbox" value={p.name} 
                                             onChange={e => this.check(p.id) }
                                            />
                                            <label className="form-check-label">{p.name} {p.id}</label>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>

                    <button className="btn btn-outline-secondary">Save</button>
                </form>
            </Wrapper>
        );
    }
}

// RoleCreate.propTypes = propTypes;
// RoleCreate.defaultProps = defaultProps;
// // #endregion

export default RoleCreate;