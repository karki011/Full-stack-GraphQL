import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

//set up basic react component

import App from "../../ui/app";

Meteor.startup(() => {
    render(<App />, document.getElementById("app"));
});
