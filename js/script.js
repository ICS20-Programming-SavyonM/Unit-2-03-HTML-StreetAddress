// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's street name and street number and displays it back to user

  // get street name from text field
  let streetName = document.getElementById("street-name").value
	// get number from text field and cast it to integer
  let streetnumber = parseInt(document.getElementById("number-entered").value)

  // display street and number back to user
  document.getElementById('user-info').innerHTML = "You live at "+ streetnumber + streetName 
}