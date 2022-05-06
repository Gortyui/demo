import React from 'react';

import c from './yourposts.module.css'



class ProfileInfo extends React.Component {

    
    /*shouldComponentUpdate(nextProps,nextState){

        return nextProps !== this.props || nextState !==this.state


      }*/

    changetoSpan=()=>{
        this.setState({editMode:false})
        this.props.setStatus(this.state.status);
    }

    changetoInput=()=>{this.setState({editMode:true});}

    constructor(props){
        super(props)
        
this.state={editMode:false,status:this.props.Status}
       // this.changeMode=this.changeMode.bind(this)

        
}


componentDidUpdate(prevprops,prevstate){
    if(prevprops.Status!==this.props.Status){
        this.setState({status:this.props.Status})}
    }
    


//this.props.posts.aboutme

render(){
   
    
window.wdad=this.props.posts
return <div>

<div className={c.imgs}><img src={this.props.posts.photos.small} className={c.small} alt="no foto" />
<br />

<img src={this.props.posts.photos.large} alt="no foto" className={c.large} />
</div>
<br />
<div className={c.description}>
{!this.state.editMode ? <span  className={`${c.item}`} onDoubleClick={this.changetoInput}>status:{this.props.Status}</span> : <input value={this.state.status} onDoubleClick={this.changetoSpan} onChange={(e)=>{this.setState({status:e.target.value})}}  autoFocus={true} className={`${c.changeStatus}`}   />}
<br></br>
<span  className={`${c.item}`} >AboutMe:{this.props.posts.aboutme}</span>
<br />
<span className={c.item}>facebook: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(this.props.posts.contacs.facebook).includes('http') ? '' :'//'}${this.props.posts.contacs.facebook}`}>
    {this.props.posts.contacs.facebook}</a></span>



<br />
<span className={c.item}>website: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(this.props.posts.contacs.website).includes('http') ? '' :'//'}${this.props.posts.contacs.website}`}>
    {this.props.posts.contacs.website}</a></span> 
    <br />
    <span className={c.item}>vk: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(this.props.posts.contacs.vk).includes('http') ? '' :'//'}${this.props.posts.contacs.vk}`}>
    {this.props.posts.contacs.vk}</a></span> 

    <br />
    <span className={c.item}>twitter: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(this.props.posts.contacs.twitter).includes('http') ? '' :'//'}${this.props.posts.contacs.twitter}`}>
    {this.props.posts.contacs.twitter}</a></span> 

    <br />
    <span className={c.item}>instagram: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(this.props.posts.contacs.instagram).includes('http') ? '' :'//'}${this.props.posts.contacs.instagram}`}>
    {this.props.posts.contacs.instagram}</a></span> 

    <br />
    <span className={c.item}>youtube: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(this.props.posts.contacs.youtube).includes('http') ? '' :'//'}${this.props.posts.contacs.youtube}`}>
    {this.props.posts.contacs.youtube}</a></span> 

    <br />
    <span className={c.item}>github: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(this.props.posts.contacs.github).includes('http') ? '' :'//'}${this.props.posts.contacs.github}`}>
    {this.props.posts.contacs.github}</a></span>

    <br />
    <span className={c.item}>mainLink: 
    <a target='_blank' rel="noreferrer" className={c.item} href={`${String(this.props.posts.contacs.mainLink).includes('http') ? '' :'//'}${this.props.posts.contacs.mainLink}`}>
    {this.props.posts.contacs.mainLink}</a></span>
    <br />

    <span className={c.item}>lookingforajob:{String(this.props.posts.lookingForAJob)}</span>
<br />
    <span className={c.item}>lookingforajob des:{String(this.props.posts.lookingForAJobDescription)}</span>
    </div>
 



 </div>}


}
export default ProfileInfo


/*"facebook": "facebook.com",
"website": null,
"vk": "vk.com/dimych",
"twitter": "https://twitter.com/@sdf",
"instagram": "instagra.com/sds",
"youtube": null,
"github": "github.com",
"mainLink": null*/