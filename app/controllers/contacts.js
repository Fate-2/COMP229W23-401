import contactModel from '../models/contacts.js';

import { UserDisplayName } from "../utils/index.js";

//R ead Operations
export function DisplayContactsList(req, res, next){
    contactModel.find(function (error, contactCollection){
        if(error){
            console.error(error);
            res.end(error);
        }

        console.log(contactCollection);

        res.render('index', {title: 'Contact List', 
            page: 'contacts/list', 
            contacts: contactCollection,
            displayName: UserDisplayName(req)  })
    })
}


//C reate
export function DisplayContactsAddPage(req, res, next){
    res.render('index', {title: 'Add Business Contact', page: 'contacts/edit', contact: {},
    displayName: UserDisplayName(req)})
}

export function ProcessContactsAddPage(req, res, next){
    let newContact = contactModel({
        name: req.body.name,
        contactnum: req.body.contactnum,       
        email: req.body.email,
    });

    contactModel.create(newContact,function(error, Contact){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/contact-list');
    })
}



//U pdate
export function DisplayContactsEditPage(req, res, next){

    let id = req.params.id;

    contactModel.findById(id, function(error, contact){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.render('index', {title: 'Edit Contact', page: 'contacts/edit', contact,
        displayName: UserDisplayName(req)})
    })    
}

export function ProcessContactsEditPage(req, res, next){
    let id = req.params.id


    let editContact = contactModel({
        _id: req.body.id,
        name: req.body.name,
        contactnum: req.body.contactnum,       
        email: req.body.email,
    });

    
    
    contactModel.updateOne({_id: id}, editContact,function(error, Contact){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/contact-list');
    })
}


//D elete
export function ProcessContactsDelete(req, res, next){
    let id = req.params.id

    contactModel.remove({_id: id}, function(error){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/contact-list');
    })
}