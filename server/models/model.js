const express = require('express');
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
   id: {
      type: Number,
      required: true
    },
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
      },
      gender: {
        type: String,
        required: true
      },
      income: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      quote: {
        type: String,
        required: true
      },
      phone_price:{
        type: String,
        required: true
      },
})
  
  // Create user model
  const mobilicis = mongoose.model('sampledata', userSchema);
  module.exports=mobilicis;