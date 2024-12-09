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
                  Cancellation Policy
                </h3>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <h3>Introduction</h3>
                <p>
                At Rook Ecom Private Limited (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;), we strive to provide clear
guidelines regarding cancellations for our products and services. This Cancellation
Policy outlines our procedures and conditions for cancellations when a &quot;No Refund&quot;
policy is in place.
</p>
               
                <h3>1. Cancellation Eligibility</h3>
                <p>
                Customers are encouraged to review their orders or services promptly upon
confirmation to determine if cancellation is necessary. A cancellation window may be
specified, during which customers can cancel their order or service. Any cancellations
requested after the specified window may not be eligible for a refund.

                </p>
            
                <h3>2. Cancellation Window</h3>
                <p>
                Customers are encouraged to review their orders or services promptly upon
confirmation to determine if cancellation is necessary. A cancellation window may be
specified, during which customers can cancel their order or service. Any cancellations
requested after the specified window may not be eligible for a refund.
                </p>
                <h3>3. Cancellation Process
</h3>
                <p>
                To cancel an order or service, customers must follow the cancellation process outlined
by the company. This process may involve contacting customer support, filling out a
cancellation request form, or using an online cancellation tool available on our website
or platform. Customers are required to provide relevant order details or account
information to facilitate the cancellation process.
                </p>
                <h3>4. No Refund Policy

</h3>
                <p>
                Please note that we operate under a &quot;No Refund&quot; policy. Once an order or service is
cancelled, customers may not be eligible for a refund of any fees or payments made.
This policy applies regardless of the reason for cancellation, including but not limited to
changes in circumstances, dissatisfaction with the product or service, or any other
factors
                </p>

<h3>5. Contact Us

</h3>
                <p>
                If you have any questions or concerns about our cancellation policy, please contact us
at the provided contact information. Our customer support team is available to assist
you and provide clarification on any cancellation-related inquiries.
                </p>

                <h3>6. Contact Us</h3>
                <p>If you have any questions or concerns about our pricing policy, please contact us at the
provided contact information. We are committed to addressing any inquiries and
ensuring customer satisfaction.</p>
               
               
                <h3>6. Changes to This Cancellation Policy</h3>
                <p>We reserve the right to update or modify this Cancellation Policy at any time. Any
changes will be effective immediately upon posting on our website or other relevant
platforms. Customers are encouraged to review this policy periodically for any updates
or changes
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
