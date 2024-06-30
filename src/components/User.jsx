import React from "react"
// creating class components
export class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        //   count: 0, // If i watnt to update only this react doesnt touch the other variable
        //   count2 : 0 // state variables in class components 
        userInfo : {
            name: '',
            location: '',
            avatar_url: ''
        }
        }
    }
    
    async componentDidMount(){
         const data = await fetch('https://api.github.com/users/6141')
         const res = await data.json()
        this.setState({
            userInfo : res
        })

    }
    componentDidUpdate(){
        
    }
    componentWillUnmount(){
        console.log('')
    }

    render(){
        const { name, location, avatar_url} = this.state.userInfo
        return(
            <div>
                <div>Name: {name}</div>
                <img src = {avatar_url}/>
                {/* <button onClick={()=>
                // cant update state variables directly we should use setState
                     this.setState({
                        count: this.state.count + 1
                     })
                     }>click</button> */}
                <div>Location: {location}</div>
                {/* <div>Area: {this.props.area}</div> */}
            </div>
        )
    }
}