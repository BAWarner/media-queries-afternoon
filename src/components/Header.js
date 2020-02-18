import React, { Component } from 'react';

class Header extends Component{
    constructor(){
        super();
        this.state = {
            showMenu: false,
            menuBackground: false
        }
    }
    toggleMenu = () => {
        this.setState({showMenu: !this.state.showMenu});
    }
    handleScroll = e => {
        let scrollTop = e.target.scrollingElement.scrollTop;
        if(scrollTop >= 105){
            this.setState({menuBackground: true})
        }else{
            this.setState({menuBackground: false})
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    render(){
        let { showMenu, menuBackground } = this.state;
        return(
            <div>
                <div className={`bg-responsive-black ${ menuBackground ? 'sticky' : '' } flex align-center fixed height-54`}>
                    <div className='container'>
                        <nav className='flex align-center justify-between'>
                        <span className='logo block'>Start Bootstrap</span>
                        <ul className='hide-mobile desktop-menu flex justify-between align-center width-50-p'>
                            <li>Services</li>
                            <li>Portfolio</li>
                            <li>About</li>
                            <li>Team</li>
                            <li>Contact</li>
                        </ul>
                        <button onClick={this.toggleMenu} className='menu-button hide-desktop'>
                            Menu
                            <div className='hamburger'>
                            <div className='bar bar1'></div>
                            <div className='bar bar1'></div>
                            <div className='bar bar1'></div>
                            </div>
                        </button>
                        </nav>
                    </div>
                    <menu className={ showMenu ? 'open' : null } >
                        <div className='container'>
                            <ul>
                                <li>Services</li>
                                <li>Portfolio</li>
                                <li>About</li>
                                <li>Team</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </menu>
                </div>
                <header className='flex align-center justify-center text-center'>
                    <div className='container'>
                        <h2 className='sub-header white'>Welcome To Our Studio!</h2>
                        <h1 className='uppercase white'>It's nice to meet you</h1>
                        <button className='btn-large'>Tell Me More</button>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;