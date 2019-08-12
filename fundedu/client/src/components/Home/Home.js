import React from 'react';
import '../../App.css';

const Home = () => {
    return (
        <div>
        <h1 className="indigo-text text-darken-4 center-align">Students</h1>
        <section className="container section scrollspy" id="students">
            <div className="row">
                <div className="col s12 l4">
                    <img src="https://www.gresham.k12.or.us/cms/lib/OR02216641/Centricity/ModuleInstance/9455/large/ES%20Web_4.jpg" alt="" className="responsive-img materialboxed" />
                </div>
                <div className="col s12 l6 offset-l1">
                    <h2 className="indigo-text text-darken-4">Check Balance</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src="https://experiencelife.com/wp-content/uploads/2014/08/Kids-Sports-1280x720.jpg" alt="" className="responsive-img materialboxed" />
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <h2 className="indigo-text text-darken-4">Share</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4">
                    <img src="https://www.powerschool.com/wp-content/uploads/2018/11/ps-hero-img.jpeg" alt="" className="responsive-img materialboxed" />
                </div>
                <div className="col s12 l6 offset-l1">
                    <h2 className="indigo-text text-darken-4">How to spend</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Home;