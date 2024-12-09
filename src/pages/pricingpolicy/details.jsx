import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetails1 = () => {
  const wordAnim = useRef();
  const wordAnim2 = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
    animationWordCome(wordAnim2.current);
  }, []);
  return (
    <>
      <section className="blog__detail">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-top">
                <h3
                  className="blog__detail-title animation__word_come"
                  ref={wordAnim2}
                >
                  Pricing Policy
                </h3>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <h3>Introduction</h3>
                <p>

                At Rook Ecom Private Limited (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;), we are committed to
providing transparent and fair pricing for our products and services. This Pricing Policy
outlines how we determine and communicate pricing to our customers.
</p>
               
                <h3>1. Pricing Structure</h3>
                <p>
                Our pricing structure is based on various factors including but not limited to production
costs, market demand, competitor pricing, and value provided to customers. We strive
to set prices that are competitive yet reflective of the quality and value of our products
and services
                </p>
            
                <h3>2. Price Transparency</h3>
                <p>
                We aim to maintain transparency in our pricing by clearly displaying the prices of our
products and services on our website and other marketing channels. Any applicable
taxes, fees, or additional charges will also be clearly communicated to customers
before they make a purchase.
                </p>
                <h3>3. Pricing Changes</h3>
                <p>
                We reserve the right to adjust our prices at any time without prior notice. However, any
changes to prices will not affect orders that have already been placed, unless otherwise
specified. We may periodically review and update our pricing to ensure it remains fair
and competitive.
                </p>
                <h3>4. Promotional Pricing
</h3>
                <p>
                From time to time, we may offer promotional pricing, discounts, or special offers on
certain products or services. These promotions will be clearly communicated, and any
terms and conditions associated with them will be provided to customers.
                </p>

<h3>5. Price Matching

</h3>
                <p>
                We may offer price matching under certain conditions. If a customer finds a lower price
for the same product or service from a competitor, they may be eligible for a price
match. Details regarding our price matching policy, including eligibility criteria and
process, will be provided upon request.
                </p>

                <h3>6. Contact Us</h3>
                <p>If you have any questions or concerns about our pricing policy, please contact us at the
provided contact information. We are committed to addressing any inquiries and
ensuring customer satisfaction.</p>
               
               
                <h3>7. Changes to This Pricing Policy</h3>
                <p>We reserve the right to update or modify this Pricing Policy at any time. Any changes
will be effective immediately upon posting on our website or other relevant platforms.
We encourage customers to review this policy periodically for any updates or changes
</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails1;
