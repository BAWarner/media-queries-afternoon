import React from 'react';

function Portfolio(){
    return(
        <div className='portfolio-wrap pad-100 bg-gray'>
            <div className='container'>
                <h2 className='text-center uppercase'>Portfolio</h2>
                <h3 className='sub-header muted  text-center mrg-btm-75'>Lorem ipsum dolor sit amet consectetur.</h3>
                <div className='flex align-center justify-center'>
                    <div className='width-33-p width-50-p-small text-center'>
                        <div className='portfolio-piece'>
                            <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/01-thumbnail.jpg'/>
                            <div className='pad-25'>
                                <h4>Threads</h4>
                                <p className='muted italic'>Illustration</p>
                            </div>
                        </div>
                    </div>
                    <div className='width-33-p width-50-p-small text-center'>
                        <div className='portfolio-piece'>
                            <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-thumbnail.jpg'/>
                            <div className='pad-25'>
                                <h4>Explore</h4>
                                <p className='muted italic'>Graphic Design</p>
                            </div>
                        </div>
                    </div>
                    <div className='width-33-p width-50-p-small text-center'>
                        <div className='portfolio-piece'>
                            <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/03-thumbnail.jpg'/>
                            <div className='pad-25'>
                                <h4>Finish</h4>
                                <p className='muted italic'>Identity</p>
                            </div>
                        </div>
                    </div>
                    <div className='width-33-p width-50-p-small text-center'>
                        <div className='portfolio-piece'>
                            <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/04-thumbnail.jpg'/>
                            <div className='pad-25'>
                                <h4>Lines</h4>
                                <p className='muted italic'>Branding</p>
                            </div>
                        </div>
                    </div>
                    <div className='width-33-p width-50-p-small text-center'>
                        <div className='portfolio-piece'>
                            <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-thumbnail.jpg'/>
                            <div className='pad-25'>
                                <h4>Southwest</h4>
                                <p className='muted italic'>Website Design</p>
                            </div>
                        </div>
                    </div>
                    <div className='width-33-p width-50-p-small text-center'>
                        <div className='portfolio-piece'>
                            <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/06-thumbnail.jpg'/>
                            <div className='pad-25'>
                                <h4>Window</h4>
                                <p className='muted italic'>Photography</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;