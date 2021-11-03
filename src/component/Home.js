import { Component } from "react"
import { v4 as uuidv4 } from 'uuid'
import ListPassenger from "./ListPassenger"

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
        data : [
            {
                id : uuidv4(),
                nama : "ria",
                umur : 19,
                jenisKelamin: "wanita"
            },
            {
                id : uuidv4(),
                nama : "ria",
                umur : 19,
                jenisKelamin: "wanita"
            },
            {
                id : uuidv4(),
                nama :'faris',
                umur : 25,
                jenisKelamin :"pria"
            }
        ]
    }
}

hapusPengunjung = (id) => {
    const newListPengunjung = this.state.data.filter((item) => item.id !==id)

    this.setState({data : newListPengunjung})
} 

tambahPengunjung = (newUser) => {
    const newPengujung = {id : uuidv4(), ...newUser }

    this.setState({data: [...this.state.data, newPengujung]})
}

    render (){
        return (
            <div>
                <ListPassenger data={this.state.data} hapusPengunjung={this.hapusPengunjung}/>
            </div>
        )
    }
}

export default Home