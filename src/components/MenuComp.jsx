import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CounterCont from '../containers/CounterCont'
import ToDoListCont from '../containers/GestionePersonaleCont'
import LogInCont from '../containers/LogInCont'
import LogInStatusCont from '../containers/LogInStatusCont'

export default class MenuComp extends Component {    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    state = { activeItem: 'mainText' }
    render() {

        const { tipo } = this.props
        const AdminOnlyTab = function() {
            if (tipo === "admin") {
                return (
                    <Menu.Item 
                        name='AdminOnlyTab'
                        active={activeItem === 'LogInStatusCont'}
                        // onClick={this.handleItemClick}
                        as={Link} to='/LogInStatusCont'
                    />
                )
            } else {
                return (
                    <Menu.Item
                    name='ospite'
                        active={activeItem === 'LogInStatusCont'}
                        // onClick={this.handleItemClick}
                        as={Link} to='/LogInStatusCont'
                    />
                )
            }
    
        }
        const { activeItem } = this.state
        return (
            <Router>
                <div>
                    <Menu pointing>
                        <Menu.Item
                            name='CounterCont'
                            active={activeItem === 'CounterCont'}
                            onClick={this.handleItemClick}
                            as={Link} to='/CounterCont'
                        />
                        <Menu.Item
                            name='ToDoListCont'
                            active={activeItem === 'ToDoListCont'}
                            onClick={this.handleItemClick}
                            as={Link} to='/ToDoListCont'
                        />
                        <Menu.Item
                            name='LogInStatusCont'
                            active={activeItem === 'LogInStatusCont'}
                            onClick={this.handleItemClick}
                            as={Link} to='/LogInStatusCont'
                        />
                         <AdminOnlyTab/>

                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='LogIn'
                                active={activeItem === 'LogInCont'}
                                onClick={this.handleItemClick}
                                as={Link} to='/LogInCont'
                            />
                        </Menu.Menu >
                    </Menu>
                    <Switch>
                        <Route exact path="/CounterCont" component={CounterCont} />
                        <Route exact path="/ToDoListCont" component={ToDoListCont} />
                        <Route exact path="/LogInCont" component={LogInCont} />
                        <Route exact path="/LogInStatusCont" component={LogInStatusCont} />
                    </Switch>
                </div>

            </Router>
        )
    }
}