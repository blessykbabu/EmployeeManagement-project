export function isEmpty(value){
value===undefined || 
value===null ||
 (typeof value==="Object" && Object.keys(value).length===0) ||
 (typeof value==="Array" && Object.keys(value).length===0) ||    
 (typeof value==="string" && value.trim().length===0);


}