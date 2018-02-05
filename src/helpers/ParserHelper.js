import Parser from 'html-react-parser';
import React from 'react';

class ParserHelper{
    static getLastNodeEL(el){
        while(el.next){
            el = el.next;
        }
        return el;
    }

    static parseRawHtmlString(htmlString){
       return Parser(htmlString, {
            replace: function(domNode) {
              let descEl = ParserHelper.getLastNodeEL(domNode);
              if(descEl.children && descEl.children[0]){
                return <span>{descEl.children[0].data}</span>
              }
        }})
    }
}

export default ParserHelper;