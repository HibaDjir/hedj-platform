const router = require('express').Router();
const express = require('express');
// Middleware to handle character encoding
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const communeController = require('../controllers/communeController')
router.route("/getAllCommunes").get(communeController.getAllCommune);
router.route("/ajouterCotatCommune/:name").post(communeController.ajouterCotatCommune);


