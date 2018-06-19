import React, { Component, Fragment } from "react";

import PageContent from "../PageContent";
import SideNav from "components/SideNav/SideNav";

const articleItem1 = {
    title: "Sample blog post",
    date: "January 1, 2014",
    author: "Mark",
    paragraphs: [
        {
            type: 'text',
            content: 'This blog post shows a few different types of content ' +
            'that\'s supported and styled with Bootstrap. Basic typography, ' +
            'images, and code are all supported.'
        },
        {
            type: 'text',
            content: 'Cum sociis natoque penatibus et magnis dis parturient ' +
            'montes, nascetur ridiculus mus. Aenean eu leo quam. ' +
            'Pellentesque ornare sem lacinia quam venenatis vestibulum. ' +
            'Sed posuere consectetur est at lobortis. Cras mattis ' +
            'consectetur purus sit amet fermentum.'
        },
        {
            type: 'quote',
            content: 'Etiam porta sem malesuada magna mollis euismod. ' +
            'Cras mattis consectetur purus sit amet fermentum. ' +
            'Aenean lacinia bibendum nulla sed consectetur.'
        },
        {
            type: 'text',
            content: 'Etiam porta sem malesuada magna mollis euismod. ' +
            'Cras mattis consectetur purus sit amet fermentum. ' +
            'Aenean lacinia bibendum nulla sed consectetur.'
        },
        {
            type: 'header',
            size: 2,
            content: 'Heading'
        },
        {
            type: 'text',
            content: 'Vivamus sagittis lacus vel augue laoreet rutrum ' +
            'faucibus dolor auctor. Duis mollis, est non commodo luctus, ' +
            'nisi erat porttitor ligula, eget lacinia odio sem nec elit. ' +
            'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
        },
        {
            type: 'header',
            size: 3,
            content: 'Sub-heading'
        },
        {
            type: 'text',
            content: 'Cum sociis natoque penatibus et magnis dis ' +
            'parturient montes, nascetur ridiculus mus.'
        },
        {
            type: 'code',
            content: 'Example code block'
        },
        {
            type: 'text',
            content: 'Aenean lacinia bibendum nulla sed consectetur. ' +
            'Etiam porta sem malesuada magna mollis euismod. ' +
            'Fusce dapibus, tellus ac cursus commodo, ' +
            'tortor mauris condimentum nibh, ut fermentum massa.'
        },
        {
            type: 'header',
            size: 3,
            content: 'Sub-heading'
        },
        {
            type: 'text',
            content: 'Cum sociis natoque penatibus et magnis dis parturient ' +
            'montes, nascetur ridiculus mus. ' +
            'Aenean lacinia bibendum nulla sed consectetur. ' +
            'Etiam porta sem malesuada magna mollis euismod. ' +
            'Fusce dapibus, tellus ac cursus commodo, tortor mauris ' +
            'condimentum nibh, ut fermentum massa justo sit amet risus.'
        },

    ]
};
const articleItem2 = {
    title: "Another blog post",
    date: "December 23, 2013",
    author: "Jacob",
    paragraphs: [
        {
            type: 'text',
            content: 'Cum sociis natoque penatibus et magnis dis parturient ' +
                    'montes, nascetur ridiculus mus. Aenean eu leo quam. ' +
                    'Pellentesque ornare sem lacinia quam venenatis vestibulum. ' +
                    'Sed posuere consectetur est at lobortis. Cras mattis consectetur ' +
                    'purus sit amet fermentum.'
        },
        {
            type: 'quote',
            content: 'Curabitur blandit tempus porttitor. ' +
                    'Nullam quis risus eget urna mollis ornare vel eu leo. ' +
                    'Nullam id dolor id nibh ultricies vehicula ut id elit.'
        },
        {
            type: 'text',
            content: 'Etiam porta sem malesuada magna mollis euismod. ' +
                    'Cras mattis consectetur purus sit amet fermentum. ' +
                    'Aenean lacinia bibendum nulla sed consectetur.'
        },
        {
            type: 'text',
            content: 'Vivamus sagittis lacus vel augue laoreet rutrum ' +
                'faucibus dolor auctor. Duis mollis, est non commodo luctus, ' +
                'nisi erat porttitor ligula, eget lacinia odio sem nec elit. ' +
                'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
        },

    ]
};
const articleItem3 = {
    title: "New feature",
    date: "December 14, 2013",
    author: "Chris",
    paragraphs: [
        {
            type: 'text',
            content: 'Cum sociis natoque penatibus et magnis dis ' +
                'parturient montes, nascetur ridiculus mus. ' +
                'Aenean lacinia bibendum nulla sed consectetur. ' +
                'Etiam porta sem malesuada magna mollis euismod. ' +
                'Fusce dapibus, tellus ac cursus commodo, tortor mauris ' +
                'condimentum nibh, ut fermentum massa justo sit amet risus.'
        },
        {
            type: 'text',
            content: 'Etiam porta sem malesuada magna mollis euismod. ' +
                'Cras mattis consectetur purus sit amet fermentum. ' +
                'Aenean lacinia bibendum nulla sed consectetur.'
        },
        {
            type: 'text',
            content: 'Donec ullamcorper nulla non metus auctor fringilla. ' +
                'Nulla vitae elit libero, a pharetra augue.'
        },

    ]
};

const articleItems = [
    articleItem1,
    articleItem2,
    articleItem3,
];

export default class HomePage extends Component{
    render(){
        return (
            <main>
                <div className="container">
                    <div className="blog-header">
                        <h1 className="blog-title">The Bootstrap Blog</h1>
                        <p className="lead blog-description">
                            The official example template of creating a blog with Bootstrap.
                        </p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-9">
                                <PageContent articleItems={articleItems}/>
                            </div>
                            <div className="col-3">
                                <SideNav/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
