import React, { Fragment } from 'react';
import './articles.css';
export default function Articles({article}) {

    const { id, title, description } = article;

    return (
        <Fragment>
            <h2>{title}</h2>
            <h5>Title description, Dec 7, 2020</h5>
            <div className="fakeimg">Fake Image</div>
            <p>Some text..</p>
            <p>{description}</p>
        </Fragment>
    );
}