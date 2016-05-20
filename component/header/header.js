import React from 'react';
import './header.less';


// xx
export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Hello world',
            time: this.formatTime()
        }
    }
    formatTime(){
        let time = new Date(),
            year = time.getFullYear(),
            month = time.getMonth()+1,
            day = time.getDate(),
            hour = time.getHours(),
            min = time.getMinutes(),
            sec = time.getSeconds();
            
        return (
            <time>
                <Word word={year} /> 年
                <Word word={month} /> 月 
                <Word word={day} /> 日 
                <Word word={hour} /> 时 
                <Word word={min} /> 分 
                <Word word={sec} /> 秒 
            </time>
        );    
            
    }
    componentDidMount() {
        let me = this;
        setInterval(function(){
            me.setState({
                time: me.formatTime()
            })   
        },1000)
    }
    render() {
        return (
            <div>
                <h1>{ this.state.title }</h1>
                <p>{ this.state.time }</p>
            </div>
        ); 
    }
}


class Word extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: this.props.word,
            className: 'time',
            rotate: 0
        }
    }
    componentDidMount() {
        this.setState({
            className: 'time show'
        })
    }
    componentWillUnmount() {
        this.setState({
            className: 'time'
        })
    }
    componentWillReceiveProps(x) {
        let me =this;
        if(x.word !== this.state.word){
           this.setState({
            className: 'time show roll',
            word: this.props.word,
            rotate: this.state.rotate+Math.random()*100
          }) 
          setTimeout(function() {
            me.setState({
                className: 'time show',
            })   
          },400)
        }
    }
    roll() {
        let me =this;
        this.setState({
            rotate: this.state.rotate+Math.random()*100
        }) 
        setTimeout(function() {
           me.setState({
              rotate: 0
           })   
        },3000)  
    }
    render() {
        return <span 
                    className={ this.state.className } 
                    onClick={this.roll.bind(this)} 
                    style={{ 'transform': `rotate(${this.state.rotate}deg)` }}>
                    { this.state.word }
               </span>
    }
}