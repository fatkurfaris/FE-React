import Header from "./components/Header";
import WrapperTugas from "./components/WrapTugas";

export default function TugasPage({tugass}) {
    return (
        <>
        <Header text="To Do App"/>
        <WrapperTugas data={tugass}/>
        </>
    )
}