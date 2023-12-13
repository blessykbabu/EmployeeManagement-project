import isEmpty from "./isEmpty.js";
import validator from "validator";
export async function updateValidator(data){
const errors={}
data.name=!isEmpty(data.name)?data.name:"";
data.email=!isEmpty(data.email)?data.email:"";
data.phone=!isEmpty(data.phone)?data.phone:"";
data.place=!isEmpty(data.place)?data.place:"";
data.district=!isEmpty(data.district)?data.district:"";
data.state=!isEmpty(data.state)?data.state:"";
data.date=!isEmpty(data.date)?data.date:"";
data.role=!isEmpty(data.role)?data.role:"";
data.jdate=!isEmpty(data.jdate)?data.jdate:"";
data.cemail=!isEmpty(data.cemail)?data.cemail:"";
data.exp=!isEmpty(data.exp)?data.exp:"";



if(validator.isEmpty(data.name)){
    errors.name_empty="Name is equired"
}


if(!validator.isLength(data.name,{min:2,max:30})){
    errors.name="Name must be between 2 and 30"
}


if(validator.isEmpty(data.email)){
    errors.email_empty="Email is required"
}


if(!validator.isLength(data.email,{min:2,max:30})){
    errors.email="Email must be between 2 and 30"
}

if(!validator.isEmail(data.email)){
    errors.email_invalid="Email is invalid"
}



if(validator.isEmpty(data.phone)){
    errors.phone_empty="phone required"
}



if(validator.isEmpty(data.place)){
    errors.place_empty="place required"
}



if(validator.isEmpty(data.district)){
    errors.district_empty="District required"
}


if(validator.isEmpty(data.state)){
    errors.state_empty="state required"
}


if(validator.isEmpty(data.date)){
    errors.date_empty="date required"
}


if(validator.isEmpty(data.role)){
    errors.role_empty="post required"
}


if(validator.isEmpty(data.jdate)){
    errors.jdate_empty="join date required"
}


if(validator.isEmpty(data.exp)){
    errors.exp_empty="experience equired"
}



return{
    errors,
    isValid:isEmpty(errors),
};
}


