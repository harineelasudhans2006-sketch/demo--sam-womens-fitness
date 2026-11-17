function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="section-label">
                <span>GET IN TOUCH</span>
                <div></div>
                <span>07</span>
            </div>

            <div className="contact-heading">
                <div>
                    <p>YOUR JOURNEY STARTS HERE.</p>

                    <h2>
                        LET'S GET
                        <br />
                        <span>STRONGER.</span>
                    </h2>
                </div>

                <p>
                    Ready to start your fitness journey?
                    Reach out to SAM Women's Fitness Center
                    and take the first step toward a stronger you.
                </p>
            </div>

            <div className="contact-grid">

                <div className="contact-info">

                    <div className="contact-item">
                        <span>01</span>

                        <div>
                            <p>CALL US</p>
                            <a href="tel:08438792882">
                                08438 792882
                            </a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span>02</span>

                        <div>
                            <p>VISIT US</p>
                            <h3>SAM WOMEN'S FITNESS CENTER</h3>
                            <span className="contact-text">
                                Location details will be added here
                            </span>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span>03</span>

                        <div>
                            <p>OPENING HOURS</p>
                            <h3>MON — SAT</h3>
                            <span className="contact-text">
                                Timing details will be added here
                            </span>
                        </div>
                    </div>

                    <div className="contact-social">
                        <a href="#">INSTAGRAM ↗</a>
                        <a href="#">WHATSAPP ↗</a>
                    </div>

                </div>

                <div className="contact-form">

                    <p className="form-title">
                        SEND US A MESSAGE
                    </p>

                    <form>

                        <div className="form-group">
                            <label>YOUR NAME</label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-group">
                            <label>PHONE NUMBER</label>

                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="form-group">
                            <label>YOUR GOAL</label>

                            <select defaultValue="">
                                <option value="" disabled>
                                    Select your fitness goal
                                </option>

                                <option value="weight-loss">
                                    Weight Loss
                                </option>

                                <option value="strength">
                                    Strength Training
                                </option>

                                <option value="personal-training">
                                    Personal Training
                                </option>

                                <option value="general-fitness">
                                    General Fitness
                                </option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>MESSAGE</label>

                            <textarea
                                rows="4"
                                placeholder="Tell us what you are looking for..."
                            ></textarea>
                        </div>

                        <button type="submit" className="contact-submit">
                            START YOUR JOURNEY
                            <span>↗</span>
                        </button>

                    </form>

                </div>

            </div>

            <div className="contact-bottom">

                
                <div className="contact-logo">
                    SAM<span>FIT</span>
                </div>

                <p>
                    STRONGER WOMEN. STRONGER COMMUNITY.
                </p>

                <span>
                    © 2026 SAM WOMEN'S FITNESS CENTER
                </span>
                
                <a href="#home" className="go-top">
                    GO TO TOP <span>↑</span>
                </a>
            </div>

        </section>
    );
}

export default Contact;