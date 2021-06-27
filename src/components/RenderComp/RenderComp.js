
import React from 'react';




import StatsContainer from 'components/StatsContainer/StatsContainer';
import Description from 'components/Description/Description';
import SingleGraph from 'components/Graph/SingleGraph';

export default function RenderCom({active,page}) {

   



    switch(active) {
        case 'Stats':
            return <StatsContainer page={page} />
        case 'Description':
            return <Description page={page} />
            
        case 'Graph':
           return page.uuid === null ? null : <SingleGraph uuid={page.uuid}/>
  

    }

   
}