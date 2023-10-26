import React from 'react'
import './Banner.css'
import babycarries from '../Images/image 1.jpg'
import baby2 from '../Images/image 10.jpg'
import baby from '../Images/image 11.jpg';

import skin from '../Images/image 12.jpg'
import bottel from '../Images/image 13.jpg'
import monitor from '../Images/image 14.jpg'
import teeth from '../Images/image 15.jpg'
import kitchen1 from '../Images/image 3.jpg'
import kitchen2 from '../Images/image 15.jpg'
import kitchen3 from '../Images/image 16.jpg'

export default function Glance() {
  return (
    <>
    
    <div className='container'>
        <div className='row stepglance '>
            <div className='col-lg-12 col-xs-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12'>
            <h2 className='text-left StepataGlance '>Steps at a Glance</h2>

            </div>
        </div>

        <div className='row '>
            <div className='col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xxl-12 col-xl-12'>
            <div className="accordion  " id="accordionExample">
      <div className="accordion-item ">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Step 1:Choose a Topic 
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
<div className='container '>
<div className="row">

<h3 className='babyproduct'>Baby Product</h3>
<hr className='divider'/>
<br/>
</div>

<div className='row mt-5 '>
            <div className='col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 '>
                <div className="card border-0 shadow p-0 mb-0 bg-body rounded">
                  <div className='row'>
                  <img src={babycarries} className="img-fluid rounded  w-100" alt="..." />

                    </div>
                    <div className='row'>
                    <div className="card-body">
                        <h5 className="card-title mx-2 w-100">Baby Carries</h5>
                        <p className="text-muted mx-2  w-100">Your little one was carried for 9 long months in the womb. While that may sometimes have been a challenge for the person doing...
                            <a href='#' className='text-dark seemore'>See More</a>
                        </p>
                    </div>
                      </div>
                   
                </div>
            </div>


            <div className='col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 '>
                <div className="card border-0 shadow p-0 mb-0 bg-body rounded">
                  <div className='row'>
                  <img src={baby2} className="img-fluid w-100 rounded " alt="..." />

                    </div>
                    <div className='row'>
                    <div className="card-body">
                    <h5 className="card-title mx-2 w-100">Baby Diapers</h5>
                        <p className="text-muted mx-2  w-100">Diaper changing might seem complicated at first. But with a little practice, you'll find that keeping your baby clean and dry is easy.
    <a href='#' className='text-dark seemore'>See More</a>
                        </p>
                    </div>
                      </div>
                   
                </div>
            </div>





            <div className='col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 '>
                <div className="card border-0 shadow p-0 mb-0 bg-body rounded">
                  <div className='row'>
                  <img src={skin} className="img-fluid rounder w-100" alt="..." />

                    </div>
                    <div className='row'>
                    <div className="card-body">
                    <h5 className="card-title mx-2">Baby Skin Care</h5>
                        <p className="text-muted mx-2">Your newborn's skin is so sensitive. Don't worry - rashes are common during baby's first year. Learn how to keep your baby's skin...

                            <a href='#' className='text-dark seemore'>See More</a>
                        </p>
                    </div>
                      </div>
                   
                </div>
            </div>


        </div>



        <div className='row mt-5 '>
            <div className='col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 '>
                <div className="card border-0 shadow p-0 mb-0 bg-body rounded">
                  <div className='row'>
                  <img src={bottel} className="img-fluid rounded  w-100" alt="..." />

                    </div>
                    <div className='row'>
                    <div className="card-body mt-0">
                    <h5 className="card-title mx-2">Baby Feeding</h5>
                        <p className="text-muted mx-2">The practice of feeding an infant a substitute for breast milk. Pediatricians generally advise exclusively breastfeeding for all full-term, 
                        healthy infants for the first 6 months of life. <br/>
                            <a href='#' className='text-dark seemore'>See More</a>
                        </p>
                    </div>
                      </div>
                   
                </div>
            </div>


            <div className='col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 '>
                <div className="card border-0 shadow p-0 mb-0 bg-body rounded">
                  <div className='row'>
                  <img src={monitor} className="img-fluid w-100 rounded " alt="..." />

                    </div>
                    <div className='row '>
                    <div className="card-body mt-0">
                    <h5 className="card-title mx-2 ">Baby Monitor</h5>
                        <p className="text-muted mx-2">Electronic device consisting of a one-way radio or video transmitter with a portable receiver for remotely listening to or observing...

<br/>
                            <a href='#' className='text-dark seemore'>See More</a>
                        </p>
                    </div>
                      </div>
                   
                </div>
            </div>





            <div className='col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 '>
                <div className="card border-0 shadow p-0 mb-0 bg-body rounded">
                  <div className='row'>
                  <img src={teeth} className="img-fluid rounder w-100" alt="..." />

                    </div>
                    <div className='row'>
                    <div className="card-body mt-0">
                    <h5 className="card-title mx-2">Baby Teethers</h5>
                        <p className="text-muted mx-2 ">A teether, teething toy, or chew toy is a device given to teething infants.
                         Most modern teethers are silicone, but can also...
<br/>
                            <a href='#' className='text-dark seemore'>See More</a>
                        </p>
                    </div>
                      </div>
                   
                </div>
            </div>


        </div>
      

<div className='row mt-5'>
  <h3 className='babyproduct'>Kitchen tools </h3>
</div>
  <hr className='divider'/>


<div className='row  mt-4'>
<div className='col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-xs-12 col-sm-12'>
        <div className="card border-0 shadow mb-4">
            <img src={kitchen2} className="img-fluid w-100" alt='kitchen' />
            <div className="card-body mt-0">
                <h5 className="card-title mx-2">Food Stainers</h5>
                <p className="text-muted mx-2">A kitchen device that is most used to strain liquids away from other ingredients but also to occasionally sift fine ingredients...
                    <a href='#' className='text-dark seemore'>See More</a>
                </p>
            </div>
        </div>
    </div>

    <div className='col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-xs-12 col-sm-12'>
        <div className="card border-0 shadow mb-4">
            <img src={kitchen1} className="img-fluid w-100" alt="kitchen" />
            <div className="card-body mt-0">
                <h5 className="card-title mx-2">Kitchen Knives</h5>
                <p className="text-muted mx-2">A kitchen knife is any knife that is intended to be used in food preparation. Kitchen knives can be made from several different materials.
                    <a href='#' className='text-dark seemore'>See More</a>
                </p>
            </div>
        </div>
    </div>

    <div className='col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-xs-12 col-sm-12'>
        <div className="card border-0 shadow mb-4">
            <img src={kitchen3} className="img-fluid w-100" alt="kitchen" />
            <div className="card-body mt-0">
                <h5 className="card-title mx-2">Peelers</h5>
                <p className="text-muted mx-2">A peeler is a kitchen tool consisting of a metal blade with a slot with a sharp edge attached to a handle, used to remove...
                    <a href='#' className='text-dark seemore'>See More</a>
                </p>
            </div>
        </div>
    </div>



            
        </div>
</div>


          </div>
         
        </div>
      </div>




      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Step 2 : Get Hosting & Domain
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Step 3 : Keyword Tools
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body p-3 mb-2 bg-success-subtle">
<div className='conatiner'>
  <div className='row mt-5 '>
    <h5 className='toolssearch'>Tools to find keywords</h5>
  </div>

  <div className='row'>
  <div className='col-lg-5 col-xl-5 col-xxl-6 col-md-12  col-xs-12 col-sm-12 d-flex align-items-center'>
        <button type="button" className="btn btn-success p-2 m-2 flex-grow-1 w-25 toolsbutton ">#1 Tools</button>
        <p className="flex-shrink-1 mb-0">keyword.io</p>
    </div>

   
  </div>

<br/>
  <div className='row'>
  <div className='col-lg-5 col-xl-5 col-xxl-6 col-md-12 col-xs-12 col-sm-12  d-flex align-items-center'>
        <button type="button" className="btn btn-success p-2 m-2 flex-grow-1 w-25 greencolour ">#2 Tools</button>
        <p className="flex-shrink-1 mb-0">keyword Sheeter</p>
    </div>


    <div className='col-lg-6 col-xl-5 col-xxl-6 col-md-12 col-xs-12 col-sm-12  d-flex align-items-center'>
        <button type="button" className="btn btn-success p-2 m-2 flex-grow-1 w-25 greencolour">#3 Tools</button>
        <p className="flex-shrink-1 mb-0">keyword Sheeter</p>
    </div>
   
  </div>
</div>

          </div>
        </div>
      </div>


      <div className="accordion-item">
        <h2 className="accordion-header" id="headingfour">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
          Step 4 : Find Number of Searches
          </button>
        </h2>
        <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <div className='conatiner'>
  <div className='row mt-5 '>
    <h5 className='toolssearch'>Tools to get Search Volume</h5>
  </div>

  <div className='row'>
  <div className='col-lg-5 col-xl-4 col-xxl-4 col-md-8  col-xs-12 col-sm-12  d-flex align-items-center'>
        <button type="button" className="btn btn-success p-2 m-2 flex-grow-1 w-25 Tool">#1 Tools</button>
        <p className="flex-shrink-1 mb-0">SemScoop</p>
    </div>

   
  </div>

<br/>
  <div className='row'>
  <div className='col-lg-5 col-xl-5 col-xxl-6 col-md-8 col-xs-12 col-sm-12  d-flex align-items-center'>
        <button type="button" className="btn btn-success p-2 m-2 flex-grow-1 w-25 greencolour ">#2 Tools</button>
        <p className="flex-shrink-1 mb-0">LinkGraph</p>
    </div>


    <div className='col-lg-6 col-xl-5 col-xxl-6 col-md-9 col-xs-12 col-sm-12  d-flex align-items-center'>
        <button type="button" className="btn btn-success p-2 m-2 flex-grow-1 w-25 greencolour">#3 Tools</button>
        <p className="flex-shrink-1 mb-0">SearchVolume.io</p>
    </div>
   
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}
