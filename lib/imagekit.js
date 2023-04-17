// SDK initialization

var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : "public_mEODhCR60wwu8CnJbJdyStAh1k0=",
    privateKey : "private_IM5te06/TE2FiLlkAuNe9SXIwj4=",
    urlEndpoint : "https://ik.imagekit.io/82y2najlg"
});

module.exports = imagekit;