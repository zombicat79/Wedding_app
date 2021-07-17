import React from 'react';

const WelcomePopup = (props) => {
    console.log(props)
    const styles = {
        div: {
            color: "green"
        }
    }
//checkbox inputs must be "radio buttons"!
    
    return (
        <div>
            <div>
                <div>
                    <p>1</p>
                </div>
                <div>
                    <p>2</p>
                </div>
                {props.user.kids.length > 0 && <div>
                    <p>3</p>
                </div>
                }
            </div>
            <h1 style={styles.div}>Hola {props.user.casualName}!</h1>
            <h3>Ens casem, i ens complau enormement convidar-te perquè vinguis a celebrar-ho amb nosaltres!</h3>
            <h2>Assistiràs?</h2>
            <p>(No t'estressis! Pots canviar la teva resposta en qualsevol moment!)</p>
            <form>
                <label>Sí</label>
                <input type="checkbox" />

                <label>No</label>
                <input type="checkbox" />

                <input type="submit" value="Següent" />
            </form>
        </div>
    )
}

export default WelcomePopup;