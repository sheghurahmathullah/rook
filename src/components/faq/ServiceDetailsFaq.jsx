import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../public/assets/imgs/rook/product-development/img2.webp";
import Image from "next/image";

const ServiceDetailsFaq = () => {
  return (
    <>
      <section className="faq__area">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbFaq}
                  alt="FAQ Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className="faq__title title-anim">
                  Frequently Asked Questions (FAQ)
                </h2>

                <div className="faq__list">
                  <Accordion
                    defaultActiveKey="0"
                    className="accordion"
                    id="accordionExample"
                  >
                    <Accordion.Item eventKey="0" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingOne"
                      >
                        What is the approach to design for user-friendly
                        products?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p style={{ textAlign: "justify" }}>
                          Our design services start and end with a best-in-class
                          experience strategy that builds brands. Through a
                          process of iteration and prototyping, we design
                          interfaces that bring joy to people.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                        How do you incorporate individual experiences?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p style={{ textAlign: "justify" }}>
                          We value individual experiences and creativity. Our
                          design process allows for customization and innovation
                          to create unique solutions tailored to our
                          clients&apos; needs.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                        What is the focus of human-centered design?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p style={{ textAlign: "justify" }}>
                          Our design services prioritize human-centered design,
                          addressing challenges by understanding users&apos;
                          needs and creating solutions that enhance their
                          experiences.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFour"
                      >
                        How do our design enrich the user&apos;s day-to-day
                        experience?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p style={{ textAlign: "justify" }}>
                          We believe in making each day better for users. Our
                          designs aim to enhance daily experiences by providing
                          intuitive and user-friendly solutions.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFive"
                      >
                        What is our expertise in developing core web
                        applications?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p style={{ textAlign: "justify" }}>
                          We excel in developing core web applications that meet
                          industry standards. Our solutions go through rigorous
                          testing to ensure their reliability and quality.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsFaq;
