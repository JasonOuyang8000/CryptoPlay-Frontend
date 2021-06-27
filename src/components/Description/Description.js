import React from 'react';

export default function Description({page}) {

    const HtmlToReactParser = require('html-to-react').Parser;

    const htmlParser = new HtmlToReactParser();
    return (
        page.description === null ? <p className="text-center">No Description Available</p> : 
            page.description === htmlParser.parse(page.description) ? <p>{page.description}</p>
            : htmlParser.parse(page.description)
    )
}