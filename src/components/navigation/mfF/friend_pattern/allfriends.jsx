import c from './allfriends.module.css'

const Onefriend=(props)=>{
    return (<div> <img className={c.img} src={props.img} alt="friend" /> <span className={c.name}> {props.name} </span> </div>)
    
}

export default Onefriend