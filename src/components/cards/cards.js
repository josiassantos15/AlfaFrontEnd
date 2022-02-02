import React from 'react';
import "./card.css";
import FormDialog from "../dialog/dialog";

export default function Card(props) {
    // FormDialog inicialmente está fechado
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <FormDialog 
                open={open} 
                setOpen={setOpen}
                name={props.name} 
                cost={props.category}
                listCard={props.listCard}
                setListCard={props.setListCard}
                id={props.id}
            />
            <div className="card--container" onClick={() => setOpen(true)}>
                <h1 className="card--title">{props.name}</h1>
                <p className="card--category">{props.category}</p>
                <p className="card--cost"> R$ {props.cost}</p>
            </div>
        </>
    );
}