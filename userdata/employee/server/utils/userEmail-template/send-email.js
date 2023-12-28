'use strict';
const nodemailer=require('nodemailer');
exports.sendEmail=async function(emails,subject,content){
    return new promises(async(resolve,reject)=>{
        try{
            if(typeof emails== 'object') emails=emails.join(',');
            let transporter=nodemailer.createTransport({
                host:process.env.EMAIL_HOST,
                Port:process.env.EMAIL_PORT,
                secure:true,
                auth:{
                    user:process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                }
            });
            let info=await transporter.sendEmail({
                from:'"ems" <support@ems.com>',
                to:emails,
                subject:subject,
                html:content
            }
               
            )
            resolve(true)
        }catch(error){
  reject(false)
        }
    })
}