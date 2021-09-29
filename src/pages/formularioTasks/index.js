import React , { useState, useEffect } from 'react';
import { Form, Button} from 'react-bootstrap';
import { cadastrarTask } from "../../services/repositories/taskRepository";


export default function Formulario(){


    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [colectedData, setColectedData] = useState()

    const cadastrar = async (data) =>{
        setColectedData(data)
        cadastrarTask(data)
        console.log(`sem use effect ${JSON.stringify(colectedData)}`)
    }


useEffect(() => {
    if(colectedData){  
        console.log(`com use effect ${JSON.stringify(colectedData)}`)
    }
}, [colectedData]);
    

    return(
        <>
       {/*<HeadeVoltar onClickVoltar={() => onChange({exibeForm: false})}/>*/}
        <Form onSubmit={(e)=>{
            e.preventDefault();
            cadastrar({title, description})
        }}
        >
            <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
                value={title}
                onChange ={(e) => {setTitle(e.target.value)}}
                id = "title"
                name = "title"
                required
                placeholder="Adicione um título"
            />
            <Form.Label>Descrição</Form.Label>
            <Form.Control 
                value ={description}
                onChange= {(e) => {setDescription(e.target.value)}}
                as="textarea" 
                rows={3} 
                placeholder="Adicione uma Descrição" 
            />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </>
    )
}