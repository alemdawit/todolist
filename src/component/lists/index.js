import React from 'react';
import '../style/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flipmove from 'react-flip-move';
function lists (props){
    const items = props.items;

    const listitems = items.map(list=>{

        return <div className="list" key={list.key}>
                    <p>
                        <input type="text" id={list.key}
                         value={list.text}
                         onChange={
                             (e) =>{
                                 props.setUpdate(e.target.value,list.key)
                             }
                         }
                        />
                        <span>
                            <FontAwesomeIcon className="faicons" icon="trash"
                                onClick={() => props.deleteItem(list.key)}
                            />
                        </span>
                    </p>
                </div>
    })
    return (
        <div>
        <Flipmove duration='500' easing='ease-in-out' >
                {listitems}
        </Flipmove>
        </div>
    )
}
export default lists;