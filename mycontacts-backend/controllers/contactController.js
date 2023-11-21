const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc GET all Contacts
//http://localhost:5001/api/contacts/
//@route GET /api/contacts
//@access public

const getContact = asyncHandler(async(req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
   // res.status(200).json({message:"Get all contacts."});
});

//@desc GET Contact by id
//@route GET /api/contacts/:id
//@access public

const getContactById = asyncHandler(async(req,res)=>{
   
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc Create new Contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async(req,res)=>{
    console.log("The request body is ",req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mendatory");
    }
     
    const contact = await Contact.create({name,email,phone,});
    res.status(201).json(contact);
});

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async(req,res)=>{
    
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updateContact = await Contact.findByIdAndUpdate(req.params.id, req.body , {new: true});

    res.status(200).json(contact);
});

//@desc Delete Contact
//@route DELETE /api/contacts/::id
//@access public

const deleteContact = asyncHandler(async(req,res)=>{
   
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.remove();
    res.status(200).json(contact);
});

module.exports = {getContact,getContactById,createContact,updateContact,deleteContact};