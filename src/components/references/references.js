import React, { Component } from 'react';

export default class References extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="testimonials">
                    <div className="text-container">
                        <div className="row">
                            <div className="two columns header-col">
                                <h1><span>References</span></h1>
                            </div>
                            <div className="ten columns flex-container">
                                <div className="flexslider">
                                    <ul className="slides">
                                        <li>
                                            <blockquote>
                                                <p>
                                                    ahh the pepeloni, pepeloni. you know the pepeloni? the nooo one. i always, i always order the, the domino. domino pepeloni and without pepeloni. i always order the pepeloni and without pepeloni. pepeloni! i like pepeloni, yeah. i always, i always order the, the cheese- cheese pan. ahh how can i explain? i can explain by my drawing! i always order like the cheese pan that it has cheese on here, this part, the ear. ear of pizza. and then, i order- wh- when i order pepeloni, the ear- it always have a pepeloni on h- on a top, but i pick up these... away! cause i don't eat it. and then i eat the cheese pan pizza. okay? you understand? understandable! pepeloni! yes.
                                                </p>
                                                <cite>Akai Haato</cite>
                                            </blockquote>
                                        </li> {/* slide ends */}
                                        {/*<li>*/}
                                        {/*    <blockquote>*/}
                                        {/*        <p>He's a good kid</p>*/}
                                        {/*        <cite>My Mum</cite>*/}
                                        {/*    </blockquote>*/}
                                        {/*</li> /!* slide ends *!/*/}
                                    </ul>
                                </div> {/* div.flexslider ends */}
                            </div> {/* div.flex-container ends */}
                        </div> {/* row ends */}
                    </div>  {/* text-container ends */}
                    {/*<a href="https://en.wikipedia.org/wiki/Hubble_Deep_Field">What is this image?</a> TODO: Implement this link hidden*/}
                </section>
            </React.Fragment>
        );
    }
}