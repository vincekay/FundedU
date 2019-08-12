import React from 'react';

const Contact = () => {
    return (
        <section className="section container scrollspy" id="contact">
            <div className="row">
                <div className="col s12 l5">
                    <h2 className="indigo-text text-darken-4">Get in Touch</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                    <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                    <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
                </div>
                <div className="col s12 l5 offset-l2">
                    <form>
                        <div className="input-field">
                            <i className="material-icons prefix">email</i>
                            <input type="email" id="email" />
                            <label for="email">Your Email</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">message</i>
                            <textarea id="message" className="materialize-textarea" cols="20" rows="20"></textarea>
                            <label for="message">Your Message</label>
                        </div>
                        <div className="input-field center">
                            <button className="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;