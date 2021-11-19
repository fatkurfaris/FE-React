
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import ListItem from "./ListItem";
import Header from './Header';
import {gql,useMutation,  useLazyQuery, useSubscription } from '@apollo/client';



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
  mutation MyMutation3($id: Int!, $JenisKelamin: String!, $Nama: String!, $Umur: Int!) {
    update_Todolist_Anggota(where: {id: {_eq: $id}}, _set: {JenisKelamin: $JenisKelamin, Nama: $Nama, Umur: $Umur}) {
      affected_rows
    }
  }
`

const SubscriptionPassenger = gql`
subscription MySubscription {
    Todolist_Anggota {
      id
      Umur
      Nama
      JenisKelamin
    }
  }
  `


function Home() {
    // const { error, loading, data } = useQuery(LOAD_PASSENGERS);
    // const [getPassengerId, {error, loading, data}] = useLazyQuery(GetDataPassenger);
    const [deletePassenger, {loading: loadingDelete}] = useMutation(DeleteDataPassenger, {
        refetchQueries: [GetDataPassenger]
    });
    const [insertPassenger,{loading: loadingInsert}] = useMutation(InsertDataPassenger, {
        refetchQueries: [GetDataPassenger]
    });
    const [updatePassenger,{loading: loadingUpdate}] = useMutation(UpdateDataPassenger, {
        refetchQueries: [GetDataPassenger]
    });

    const {data,loading,error}= useSubscription(SubscriptionPassenger)

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

    // const onGetData = () => {
    //     getPassengerId({variables: {
    //         id:id_P
    //     }})
    //     setList(data?.Todolist_Anggota)
    // }

    // const onChangeId = (e) => {
    //     if (e.target) {
    //         setId(e.target.value)
    //     }
    // }

    return (
        <div>
            <Header />
            {/* <input type="number" className="input-text" placeholder="Id" value={id_P} onChange={onChangeId} /> */}
            {/* <button onClick={onGetData}>Get Data</button> */}
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