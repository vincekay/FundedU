import React from 'react';
import '../../App.css';

const Tab = () => {
    return (
        <section className="section container scrollspy" id="funders">

            <div className="row">

                <div className="col s12 l4">
                    <h2 className="indigo-text text-darken-4">Funders</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                    <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
                </div>

                <div className="col s12 l6 offset-l2">
                        <ul className="tabs">
                            <li className="tab col s4">
                                <a href="#payment" className="active indigo-text text-darken-4">Payment</a>
                            </li>
                            <li className="tab col s4">
                                <a href="#share" className="indigo-text text-darken-4">Share</a>
                            </li>
                            <li className="tab col s4">
                                <a href="#how" className="indigo-text text-darken-4">How it works</a>
                            </li>
                        </ul>


                        <div id="payment" className="col s12">
                            <p className="flow-text indigo-text text-darken-4">Payment</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur excepturi, dolor necessitatibus cupiditate possimus</p>
                            <p>aliquam. Vero architecto nisi ipsa distinctio dolorem provident, itaque tenetur quidem quae voluptas nulla dolores?</p>
                        </div>
                        <div id="share" className="col s12">
                            <p className="flow-text indigo-text text-darken-4">Share</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quis ipsa expedita sapiente, fugiat dolor. Maxime modi, adipisci </p>
                            <p>similique, sed assumenda asperiores sit quidem eum corporis provident impedit sunt nam!</p>
                        </div>
                        <div id="how" className="col s12">
                            <p className="flow-text indigo-text text-darken-4">How it works</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur amet sint hic, molestias illum dolorem consectetur ab exercitationem </p>
                            <p>commodi ipsa consequuntur, at esse vel totam. Vero corrupti hic quibusdam explicabo?</p>
                        </div>
                </div>
            </div>
  </section >

     );
}

export default Tab;