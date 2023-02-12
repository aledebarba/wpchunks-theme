import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ContactForm = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [submitStatus, setSubmitStatus] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit the form to the server
    setSubmitStatus('submitting');
    fetch('/contact', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          setSubmitStatus('success');
        } else {
          setSubmitStatus('error');
        }
      })
      .catch((error) => {
        setSubmitStatus('error');
      });
  };

  return (
    <StyledForm>
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="col">
                <svg viewBox="0 0 76 16">
                    <text x="0" y="15" style={{ fill: "black"}}>CONTATO</text>
                </svg>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla inventore rerum dolor ducimus consequatur adipisci pariatur temporibus debitis quos. Magni, asperiores? Ullam doloremque eum optio omnis quo corrupti iste, rerum, quasi repudiandae quod ipsa quis alias dolorem hic sunt possimus. Cum voluptatibus maiores qui error praesentium animi quas id rem?</p>
                {submitStatus === 'success' && (
                    <p className="success-message">
                    Obrigado por sua mensagem! Entraremos em contato o mais breve possível.
                    </p>
                )}
                {submitStatus === 'error' && (
                    <p className="error-message">
                    Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.
                    </p>
                )}
            </div>
            <div className="col">
                <label htmlFor="name">
                    Nome:
                    <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="José da Silva"
                    onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <label htmlFor="email">
                    Email:
                    <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="jose_silva@email.com.bz"
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <label htmlFor="message">
                    Mensagem:
                    <textarea
                    name="message"
                    value={message}
                    placeholder="Olá, gostaria de saber mais sobre..."
                    onChange={(event) => setMessage(event.target.value)}
                    />
                </label>
                <Button bold large rounded dark uppercase type="submit" disabled={submitStatus === 'submitting'}>
                    Enviar
                </Button>
            </div>
        </form>
    </StyledForm>
  );
};

const StyledForm = styled.div`
    position: relative;
    width: 100vw;
    max-width: 1200px;
    height: 80vh;
    color: var(--form-text-color);
    background-color: var(--form-background-color);
    margin: auto;
    display: grid;
    place-content: center;

    form { 
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2vw;
        padding: 4rem 1rem;
        color: black;
        
        .col {
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 0;

            label {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-bottom: 3rem;
                font-size: 0.8rem;
                font-weight: 600;
                text-transform: uppercase;

                input, textarea {
                    margin-top: 0.5rem;
                    padding: 0.5rem;
                    border: none;
                    border-bottom: 1px solid var(--form-input-border-color);
                    background-color: var(--form-input-background-color);
                    color: var(--form-input-text-color);
                    font-size: 1rem;

                    &::placeholder {
                        color: #aaa;
                    }
                    &:focus {
                        outline: none;
                    }
                }

                
            }
        }
    }


`
export default ContactForm;