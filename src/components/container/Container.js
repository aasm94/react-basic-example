import React, { Fragment, useState } from 'react';
import Articles from './articles/Articles';
export default function Container() {

    //Hooks: first send the variable, then the function to update the variable
    const [articles, setArticles] = useState([ 
        {
            id: 1, 
            title: 'TITLE HEADING 1', 
            description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
        },
        {
            id: 2, 
            title: 'TITLE HEADING 2', 
            description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
        },
    ]);

    return (
        <Fragment>
            <div className="col-sm-8">
                {articles.map((article) => (
                    <Articles key={article.id} article={article} />
                ))}
            </div>
                <button  className="btn btn-outline-primary btn-sm mx-auto" type='button' onClick={()=>setArticles([
                {
                    id: 1, 
                    title: 'TITLE HEADING 3', 
                    description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
                },
                {
                    id: 2, 
                    title: 'TITLE HEADING 4', 
                    description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
                },
            ])}>
                Update Titles
            </button>
        </Fragment>
    );
}