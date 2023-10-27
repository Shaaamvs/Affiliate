import React from "react";
import "./Banner.css";
import Glance from "./Glance";

export default function Banner() {
  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="bannerimage">
            <div className="row">
              <h1 className="myText display-4">
                How to Create an Affiliate
                <br /> Marketing Website
              </h1>
            </div>
          </div>
        </div>
      </div>


{/* <div className="container">
        <div className="row">
            <div className="content">
            <div className="col-12">
            <p className=" text-left marketing">
              Over the years, Affiliate marketing has become one of the most
              sought-after
              <br />
              forms of making money online. More and more people are using
              affiliate marketing as a <br />
              way to generate passive income over time.
              <br />
              <span className="question ">
                Are you still thinking, Is affiliate marketing profitable?
              </span>
            </p>

            <p className=" text-left marketing">
              Around
              <span className="green">84% of content publishers</span> monetize
              their web traffic by leveraging <br /> affiliate marketing.
            </p>

            <p className="text-left marketing">
              Yeah! Affiliate marketing, when done correctly, is one of the best
              ways to earn
              <br />
              revenue through your website. So, here is how you can create an
              affiliate marketing
              <br />
              website on your own in 5 simple steps,
            </p>
          </div>
            </div>
        
        </div>
      </div> */}

    <Glance/>
    </>
  );
}
