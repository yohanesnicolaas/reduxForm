import axios from "axios";

const login = (values) =>  {
    //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    console.log(values.email, values.password);
    var data = {"email": values.email, "password": values.password};
    axios.post('http://10.2.48.78:8008/api/login',data)
    .then(function(response){
        console.log(response);
    }).catch(error => {
        console.log(error.response);
    })     
};

const register = (values) => {
    console.log(values.email);
    var data = {"email": values.email};
    axios.post('http://10.2.48.78:8008/api/register-user', data)
    .then(function(response){
        console.log(response);
    }).catch( error => {
        console.log(error.response.data.message);
    })
};

const addLeave = (values) => {
    console.log(values);
    var data = {"member": values.name, "startDateLeave": values.startDateLeave, "endDateLeave":values.endDateLeave, "Reason":values.reason};
    let tokenStr =
    axios.post('http://10.2.48.78:8008/api/leave/add-leave', data)
    .then(function(response){
        console.log(response);
    }).catch( error => {
        console.log(error.response);
    }) 
};

export {login, register, addLeave}