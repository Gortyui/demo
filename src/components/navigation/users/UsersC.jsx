
import React, { useEffect } from "react";

import { connect } from 'react-redux'
import { 
    getUsersThunkCreator,
    
     changeUsersThunkCreator, followUsersThunkCreator } from '../../../redux/users-reducer'


import Users from "./Users";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import { GetUsersStateCurrentPage, GetUsersStateFollowingInProgres, GetUsersStateisFetching, GetUsersStatePagePortion, GetUsersStatePageSize, GetUsersStateTotalUsersCount,  GetUsersStateUsersSuper } from "../../../redux/selectors/users-selectors";

function UserApi(props) {



 function changecurrentpage (u)  {
    props.changeUsers(u)
  };


  useEffect(()=>{
    props.getUsers(props.currentpage, 
props.pageSize)
//eslint-disable-next-line react-hooks/exhaustive-deps
},[props.currentpage])

   
  
    return <Users {...props} changecurrentpage={changecurrentpage} />

//togal fol

  }





let mapStateToProps=(state)=>{
 
  return{
users:GetUsersStateUsersSuper(state),
pageSize:GetUsersStatePageSize(state),
currentpage:GetUsersStateCurrentPage(state),
totalUserCount:GetUsersStateTotalUsersCount(state),
isFetching:GetUsersStateisFetching(state),
FollowingInProgres:GetUsersStateFollowingInProgres(state),
portion:GetUsersStatePagePortion(state),
}}


let mapDispatchToProps={
  getUsers:getUsersThunkCreator,
  changeUsers:changeUsersThunkCreator,
  followUsers:followUsersThunkCreator 
  
}






 export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(UserApi,'/login')














 /*isFetching = { props.isFetching}currentpage = {props.currentpage}
    totalUserCount = {this.props.totalUserCount}pageSize = {this.props.pageSize}
    changecurrentpage = {this.changecurrentpage }follow = {this.props.follow}
    setusertotalcount = { this.props.setusertotalcount }
    users = {this.props.users} togalFollowingProgres = {this.props.togalIsfollowingprogres}
    FollowingInProgres={this.props.FollowingInProgres}
    followUsers={this.props.followUsers}*/