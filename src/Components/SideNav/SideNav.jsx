import React, { Component, Fragment } from "react";

import Menu from "../Menu";

const MenuArchives = [
    { link: "#", title: "March 2014" },
    { link: "#", title: "February 2014" },
    { link: "#", title: "January 2014" },
    { link: "#", title: "December 2013" },
    { link: "#", title: "November 2013" },
    { link: "#", title: "October 2013" },
    { link: "#", title: "September 2013" },
    { link: "#", title: "August 2013" },
    { link: "#", title: "July 2013" },
    { link: "#", title: "June 2013" },
    { link: "#", title: "May 2013" },
    { link: "#", title: "April 2013" },
];
const MenuElsewhere = [
    { link: "#", title: "GitHub" },
    { link: "#", title: "Twitter" },
    { link: "#", title: "Facebook" },
];

export default class SideNav extends Component{
    render()
    {
        return (
            <Fragment>
                <div className="sidebar-module sidebar-module-inset">
                    <h4>About</h4>
                    <p>
                        Etiam porta <em>sem malesuada magna</em> mollis euismod.
                        Cras mattis consectetur purus sit amet fermentum.
                        Aenean lacinia bibendum nulla sed consectetur.
                    </p>
                </div>
                <Menu items={MenuArchives} title="Archives"/>
                <Menu items={MenuElsewhere} title="Elsewhere"/>
            </Fragment>
        )
    }
}