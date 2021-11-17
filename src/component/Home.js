// import { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
// import PassengerInput from './PassengerInput';
// import ListPassenger from './ListPassenger';
// import Header from './Header';

// class Home extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             data : [
//                 {
//                     id: uuidv4(),
//                     nama: 'Yoga',
//                     umur: 22,
//                     jenisKelamin: 'Pria'
//                 },
//                 {
//                     id: uuidv4(),
//                     nama: 'Ria',
//                     umur: 19,
//                     jenisKelamin: 'Wanita'
//                 },
//                 {
//                     id: uuidv4(),
//                     nama: 'Fahmi',
//                     umur: 25,
//                     jenisKelamin: 'Pria'
//                 },
//                 {
//                     id: uuidv4(),
//                     nama: 'Lala',
//                     umur: 21,
//                     jenisKelamin: 'Wanita'
//                 },
//                 {
//                     id: uuidv4(),
//                     nama: 'Ivan',
//                     umur: 25,
//                     jenisKelamin: 'Pria'
//                 }
//             ]
//         }
//     }

//     hapusPengunjung = id => {
//         this.setState({    
//             data: [      
//                 ...this.state.data.filter(item => {        
//                     return item.id !== id;      
//                 })    
//             ]  
//         });
//     };
    
//     tambahPengunjung = newUser => {
//         const newData = {
//             id: uuidv4(),
//             ...newUser
//         }; 
//         this.setState({    
//             data: [...this.state.data, newData]  
//         });
//     };
    
//     render() {
//         return (
//             <div>
//                 <Header/>
//                 <ListPassenger 
//                     data={this.state.data}
//                     hapusPengunjung={this.hapusPengunjung}
//                 />
//                 <PassengerInput
//                     tambahPengunjung={this.tambahPengunjung}
//                 />
//             </div>
//         )
//     }
// }

// export default Home;

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import ListItem from "./ListItem";
import Header from './Header';
import {gql,  useLazyQuery } from '@apollo/client';

const GetDataPassenger = gql`
query MyQuery2($id: Int!) {
    Todolist_Anggota(where: {id: {_eq: $id}}) {
      Nama
      Umur
      JenisKelamin
      id
    }
  }
`


function Home() {
    // const { error, loading, data } = useQuery(LOAD_PASSENGERS);
    const [getPassengerId, {error, loading, data}] = useLazyQuery(GetDataPassenger);

    // useEffect(() => {
    //     if (data) {
    //         setDataPassenger(data.passenger);
    //     }
    //     if (error) {
    //         console.log("tes",error);
    //         return null
    //     }
    // }, [data])

    const [id, setId] = useState(0);
    // const [id_stasiun, setStasiunID] = useState({idStasiun: null});
    const [list, setList] = useState([]);


    const onGetData = () => {
        getPassengerId({variables: {
            id:id
        }})
        setList(data?.Todolist_Anggota)
    }

    const onChangeId = (e) => {
        if (e.target) {
            setId(e.target.value)
        }
    }

    return (
        <div>
            <Header />
            <input type="number" className="input-text" placeholder="Id" value={id} onChange={onChangeId} />
            <button onClick={onGetData}>Get Data</button>
            {data?.Todolist_Anggota.map((v,i) => (
                // <ListPassenger
                <div>
                    <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                    <thead>
                        <td bgcolor="red">Nama</td>
                        <td bgcolor="red">Umur</td>
                        <td bgcolor="red">Jenis Kelamin</td>
                        <td bgcolor="white" className="removeBorder"></td>
                    
                <ListItem
                id={i}
                Nama={v.Nama}
                Umur={v.Umur}
                JenisKelamin={v.JenisKelamin}
                />
                    </thead>
                    </table>

                </div>
                // 

            ))}
            
        </div>
    )
}

export default Home;