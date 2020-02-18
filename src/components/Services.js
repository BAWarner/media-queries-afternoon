import React from 'react';

function Services(){
    return(
        <div className='services-wrap pad-100'>
            <div className='container'>
                <h2 className='text-center uppercase'>Services</h2>
                <h3 className='sub-header muted  text-center mrg-btm-75'>Lorem ipsum dolor sit amet consectetur.</h3>
                <div className='flex align-center justify-center'>
                    <div className='width-33-p text-center'>
                        <span className='fa-stack fa-4x'>
                            <i className='fa fa-circle fa-stack-2x primary'></i>
                            <i className='fa fa-shopping-cart fa-stack-1x fa-inverse'></i>
                        </span>
                        <h4>E-Commerce</h4>
                        <p className='muted'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
                        </p>
                    </div>
                    <div className='width-33-p text-center'>
                        <span className='fa-stack fa-4x'>
                            <i className='fa fa-circle fa-stack-2x primary'></i>
                            <i className='fa fa-laptop fa-stack-1x fa-inverse'></i>
                        </span>
                        <h4>Responsive Design</h4>
                        <p className='muted'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
                        </p>
                    </div>
                    <div className='width-33-p text-center'>
                        <span className='fa-stack fa-4x'>
                            <i className='fa fa-circle fa-stack-2x primary'></i>
                            <i className='fa fa-lock fa-stack-1x fa-inverse'></i>
                        </span>
                        <h4>Web Security</h4>
                        <p className='muted'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Services;