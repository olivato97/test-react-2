import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CounterCont from '../containers/CounterCont'
import ToDoListCont from '../containers/GestionePersonaleCont'
import LogInCont from '../containers/LogInCont'
import LogInStatusCont from '../containers/LogInStatusCont'
import productCont from '../containers/productCont'

export default class MenuComp extends Component {
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    state = { activeItem: 'mainText' }
    render() {

        const { Member } = this.props
        const AdminOnlyTab = function () {
            var check = false
            for (var i = 0; i < Member.length; i++) {
                if (Member[i].tipo === "admin" && Member[i].logIn === true) {
                    check = true
                }
            }
            if (check) {
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
                        <Menu.Item
                            name='productCont'
                            active={activeItem === 'productCont'}
                            onClick={this.handleItemClick}
                            as={Link} to='/productCont'
                        />
                        <AdminOnlyTab />

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
                        <Route exact path="/productCont" component={productCont} />
                    </Switch>
                </div>

            </Router>
        )
    }
}