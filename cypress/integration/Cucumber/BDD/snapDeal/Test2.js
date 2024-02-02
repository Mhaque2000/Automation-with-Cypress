/// <reference types = 'cypress'/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SnapHomePage from "../../../../PageObjects/SnapdealPageObjects/SnapHomePage";
import SnapSareePage from "../../../../PageObjects/SnapdealPageObjects/SnapSareePage";
import SnapProductPage from "../../../../PageObjects/SnapdealPageObjects/SnapProductPage";
const homepage = new SnapHomePage();
const sareepage = new SnapSareePage();
const productpage = new SnapProductPage();
