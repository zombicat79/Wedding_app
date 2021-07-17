import React from 'react';
import authService from './../../services/auth-service';

const Profile = (props) => {
    const logout = () => {
        authService.logout()
            .then(() => {
                props.history.replace("/");
            })
            .catch((err) => console.log(err));
    }
    
    return (
       <main>
            <section>
                <div>
                    <h2>{props.user.username}</h2>
                    <p>{props.user.points}</p>
                </div>
                <div>
                    <h3>Contribution to dreams</h3>
                    <ul>
                        {props.user.productsAcquired.map((el) => {
                            return <li key={el._id}>{el.name}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <h3>Contribution to the party</h3>
                    <ul>
                        {props.user.music.map((el, index) => {
                            return <li key={el + index}>{el}</li>
                        })}
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <form>
                        <label>Català</label>
                        <input type="radio" name="language" value="catalan" />

                        <label>Español</label>
                        <input type="radio" name="language" value="spanish" />

                        <label>English</label>
                        <input type="radio" name="language" value="english" />
                    </form>
                </div>
            </section>
            <section>
                <div>
                    <button onClick={() => logout()}>Checkout</button>
                </div>
            </section>
        </main>
    )
}

export default Profile;