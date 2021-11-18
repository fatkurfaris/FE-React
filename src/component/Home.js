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
import {gql,useMutation,  useLazyQuery } from '@apollo/client';



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

const InsertDataPassenger = gql`
mutation MyInsert($id: Int!, $Nama: String!, $Umur: Int!, $JenisKelamin: String!) {
    insert_Todolist_Anggota(objects: {JenisKelamin: $JenisKelamin, Nama: $Nama, Umur: $Umur, id: $id}) {
      affected_rows
    }
  }`

const DeleteDataPassenger = gql`
mutation MyMutation2 ($id : Int!){
    delete_Todolist_Anggota_by_pk(id: $id) {
      id
    }
  }
  `

  const UpdateDataPassenger = gql`
  mutation MyMutation3($id: uuid!, $JenisKelamin: String!, $Nama: String!, $Umur: Int!) {
    update_Todolist_Anggota(where: {id: {_eq: $id}}, _set: {JenisKelamin: $JenisKelamin, Nama: $Nama, Umur: $Umur}) {
      affected_rows
    }
  }
`


function Home() {
    // const { error, loading, data } = useQuery(LOAD_PASSENGERS);
    const [getPassengerId, {error, loading, data}] = useLazyQuery(GetDataPassenger);
    const [deletePassenger, {loading: loadingDelete}] = useMutation(DeleteDataPassenger, {
        refetchQueries: [GetDataPassenger]
    });
    const [insertPassenger,{loading: loadingInsert}] = useMutation(InsertDataPassenger, {
        refetchQueries: [GetDataPassenger]
    });
    const [updatePassenger,{loading: loadingUpdate}] = useMutation(UpdateDataPassenger, {
        refetchQueries: [GetDataPassenger]
    });


    // useEffect(() => {
    //     if (data) {
    //         setId(data.id);
    //     }
    //     if (error) {
    //         console.log("tes",error);
    //         return null
    //     }
    // }, [data])

    const [id_P, setId] = useState(0);
    const [list, setList] = useState([]);

    const hapusPengunjung = (idx) => {
        deletePassenger({variables: {
            id: idx
        }})
    }

    const tambahPengunjung = (newUser) => {
        insertPassenger({variables: {
            Nama: newUser.nama,
            Umur: newUser.umur,
            JenisKelamin: newUser.jenisKelamin,
            id: id_P
        }})
    }

    const editPengunjung = (editUser) => {
        // console.log(editUser);
        updatePassenger({variables: {
            Nama: editUser.nama,
            Umur: editUser.umur,
            JenisKelamin: editUser.jenisKelamin,
            id: id_P
        }})
    }

    const onGetData = () => {
        getPassengerId({variables: {
            id:id_P
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
            <input type="number" className="input-text" placeholder="Id" value={id_P} onChange={onChangeId} />
            <button onClick={onGetData}>Get Data</button>
            
            {/* {data? <h3>{`Stasiun ${data.Todolist_Anggota[0].stasiun.namaStasiun}`}</h3> : null} */}
            {data?.Todolist_Anggota.map((v) => (
                // <ListPassenger
                <div>
                    <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                    <thead>
                        <td bgcolor="red">Nama</td>
                        <td bgcolor="red">Umur</td>
                        <td bgcolor="red">Jenis Kelamin</td>
                        <td bgcolor="white" className="removeBorder"></td>
                    
                <ListItem
                id={v}
                Nama={v.Nama}
                Umur={v.Umur}
                JenisKelamin={v.JenisKelamin}
                hapusPengunjung={()=> hapusPengunjung(v.id)}
                editPengunjung={()=> editPengunjung(v.id)}
                />
                
                    </thead>
                    </table>

                </div>
                // 

            ))}
            <PassengerInput tambahPengunjung={tambahPengunjung}/>
        </div>
    )
}

export default Home;