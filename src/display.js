import React from "react";
import { connect } from "react-redux";

function Display(props) {
    return ( <
        div >
        <
        h1 > { props.user.fName } < br / > { props.user.lName } < br / >
        visit again!!
        <
        /h1> <
        /div>
    );
}
const mapStateToProps = state => ({
    user: state.userStore.myData
});
export default connect(mapStateToProps)(Display);