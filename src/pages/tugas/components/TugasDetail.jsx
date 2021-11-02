import Tugas from './Tugas.module.css'

function Completed({title}) {
    return (
        <div className={Tugas.done}>{title}</div>
    );
}

function UnComplete({title}) {
    return (
        <div className={Tugas.undone}>{title}</div>
    )
}

function Content({title, status}) {
    if (status) {
        return <Completed title={title}/>;
    } 
    return <UnComplete title={title}/>
}

export default Content;