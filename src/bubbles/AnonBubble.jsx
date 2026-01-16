import React,{ use, useState } from "react";
import { supabase } from '../lib/supabase.js'
function AnonBubble(){

    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [feedback,setFeedback] = useState({type: '', text:''});

    const handleMessageSubmit = async (event) =>{
        event.preventDefault();
         
        if(!message.trim()){
            return;
        }

        setIsSending(true);
        setFeedback({type:'',text:''});

        try{
            const { error } = await supabase
                .from('inbox_messages')
                .insert([{ content: message }]);
            
            if (error) throw error;

            setFeedback({type: 'success', text: 'Mensagem enviada!' })

        } catch(error){
            console.error('Erro: ', error)
            setFeedback({type: 'error', text:'Erro ao enviar, provavelmente é um erro no banco de dados então não se preocupe !!'});
        } finally{
            setIsSending(false);
        }
        
    }
    return(
        <div className="anon">
            
            <h1>Mande mensagens anônimas!!</h1>

            <form onSubmit={handleMessageSubmit}>

            <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                      disabled = {isSending} className="anoninput" placeholder="Me envie uma mensagem :3"/>

            <button type="submit" disabled={isSending || !message.trim()}>
                {isSending ? 'Enviando...' : 'Enviar Mensagem'}
            </button>

            </form>
        </div>
        
    )
}

export default AnonBubble